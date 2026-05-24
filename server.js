/**
 * CapacityHub Centralized Bot & Dashboard Integration Server
 * Implements real-time WebSockets tracking loops without styling mutations.
 */

const express = require('express');
const cors = require('cors');
const { WebSocketServer } = require('ws');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// --- TELEGRAM BOT CONFIGURATION ENGINE ---
const tokenA = '8871153618:AAEpnVzycmv5Mn2-gKZ19p44Qj0gWT7NC-4'; // Bot A: Signups
const tokenB = '8913775751:AAFBPFztDFbA9FqJwtDwvo1ymFXQwVaRqGs'; // Bot B: Task Submissions
const tokenC = '8809856569:AAEEVItQkMLf6qsyE5TTIbU-UqRGF6b-dvI'; // Bot C: Withdrawals
const TARGET_TELEGRAM_ID = '7289939366'; // Audit Logging Chat Target ID

const botA = new TelegramBot(tokenA, { polling: true });
const botB = new TelegramBot(tokenB, { polling: true });
const botC = new TelegramBot(tokenC, { polling: true });

console.log('Successfully active: Listening to Bot instances A, B, and C.');

// --- WEBSOCKET REAL-TIME DISTRIBUTOR POOL ---
const server = app.listen(PORT, () => console.log(`CapacityHub Server executing live on port ${PORT}`));
const wss = new WebSocketServer({ server });

let connectedDashboards = new Set();

wss.on('connection', (ws) => {
    ws.on('message', (messageStr) => {
        try {
            const payload = JSON.parse(messageStr);
            if (payload.action === 'register_dashboard') {
                connectedDashboards.add(ws);
                console.log('Administrative Dashboard joined live updates channel.');
            }
            if (payload.action === 'admin_action_response') {
                handleAdminDecision(payload.data);
            }
        } catch (err) {
            console.error('Payload ingestion parsing exception error:', err);
        }
    });

    ws.on('close', () => {
        connectedDashboards.delete(ws);
    });
});

function broadcastToDashboards(messageObj) {
    const payloadStr = JSON.stringify(messageObj);
    connectedDashboards.forEach(client => {
        if (client.readyState === 1) { // WebSocket.OPEN
            client.send(payloadStr);
        }
    });
}

// --- TELEGRAM INBOUND EVENT INTERCEPT PIPELINES ---

// Bot A: User Signup Processing (Format expected: Name, Phone, Country)
botA.on('message', (msg) => {
    if (!msg.text || msg.text.startsWith('/')) return;
    const components = msg.text.split(',');
    if (components.length >= 2) {
        const signupData = {
            name: components[0].trim(),
            phone: components[1].trim(),
            country: components[2] ? components[2].trim() : 'NG',
            timestamp: new Date().toISOString()
        };
        broadcastToDashboards({ type: 'realtime_signup', data: signupData });
        botA.sendMessage(msg.chat.id, `✅ Signup data for ${signupData.name} dispatched to Admin Dashboard layout successfully.`);
    }
});

// Bot B: Task Processing (Format expected: Username, Phone, Task Name, RewardAmount)
botB.on('message', (msg) => {
    if (!msg.text || msg.text.startsWith('/')) return;
    const elements = msg.text.split(',');
    if (elements.length >= 4) {
        const taskPayload = {
            id: 'task_' + Date.now(),
            username: elements[0].trim(),
            phone: elements[1].trim(),
            task_name: elements[2].trim(),
            reward: parseFloat(elements[3].trim() || 0),
            chat_id: msg.chat.id
        };
        broadcastToDashboards({ type: 'realtime_task', data: taskPayload });
        botB.sendMessage(msg.chat.id, `📥 Task entry logged and placed into dashboard verification row.`);
    }
});

// Bot C: Payout Routing (Format expected: Username, Phone, BankOrWalletDetails, PayoutAmount, Currency)
botC.on('message', (msg) => {
    if (!msg.text || msg.text.startsWith('/')) return;
    const details = msg.text.split(',');
    if (details.length >= 5) {
        const withdrawalPayload = {
            id: 'withdraw_' + Date.now(),
            username: details[0].trim(),
            phone: details[1].trim(),
            info: details[2].trim(),
            amount: parseFloat(details[3].trim() || 0),
            asset: details[4].trim().toUpperCase(),
            chat_id: msg.chat.id
        };
        broadcastToDashboards({ type: 'realtime_withdrawal', data: withdrawalPayload });
        botC.sendMessage(msg.chat.id, `📥 Payout route registered under active dashboard verification review.`);
    }
});

// --- CORE ACTION APPROVAL RESOLUTION GATEWAY ---
function handleAdminDecision(actionData) {
    const { actionType, id, decision, targetPhone, amount, asset, chat_id } = actionData;
    const notificationText = `🔔 Update: Your ${actionType === 'task' ? 'Task' : 'Withdrawal request'} for ${amount} ${asset} was [${decision.toUpperCase()}] by verification operators.`;
    
    // Notify user on relevant channel directly based on origination target context
    if (actionType === 'task' && chat_id) {
        botB.sendMessage(chat_id, notificationText).catch(() => {});
        botB.sendMessage(TARGET_TELEGRAM_ID, `📝 Admin System Log: Marked task ${id} for ${targetPhone} as ${decision}.`).catch(() => {});
    } else if (chat_id) {
        botC.sendMessage(chat_id, notificationText).catch(() => {});
        botC.sendMessage(TARGET_TELEGRAM_ID, `💸 Admin System Log: Marked withdrawal payout ${id} for ${targetPhone} as ${decision}.`).catch(() => {});
    }
}