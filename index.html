<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TruthBridge AI — Prototype Demo</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --teal:#0D9488; --teal-dark:#0F766E; --navy:#0B1220; --gray:#4B5563;
    --border:#E2E8F0; --panel:#F8FAFC; --amber:#D97706; --bg:#ffffff;
  }
  *{box-sizing:border-box;}
  body{ margin:0; background:var(--bg); color:var(--navy); font-family:'Inter',sans-serif; line-height:1.5; }
  .wrap{ max-width:900px; margin:0 auto; padding:48px 24px 100px; }
  header{ display:flex; align-items:center; gap:14px; margin-bottom:8px; }
  .mark{ width:48px; height:36px; border-radius:10px; background:linear-gradient(135deg,var(--teal),var(--teal-dark)); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .mark svg{ width:36px; height:23px; }
  h1{ font-family:'Space Grotesk',sans-serif; font-size:24px; margin:0; letter-spacing:-0.01em; }
  .tagline{ color:var(--gray); font-size:15px; margin:4px 0 0; }
  .badge{ display:inline-flex; align-items:center; gap:6px; background:#FEF3C7; color:#92400E; font-size:12.5px; font-weight:600; padding:6px 12px; border-radius:999px; margin:20px 0 32px; }
  .badge svg{ width:14px; height:14px; }

  .stages{ display:grid; grid-template-columns:repeat(5,1fr); gap:8px; margin-bottom:40px; }
  .stage{ border:1px solid var(--border); border-radius:12px; padding:14px 10px; text-align:center; background:var(--panel); position:relative; }
  .stage.active{ border-color:var(--teal); background:#F0FDFA; }
  .stage-num{ width:22px; height:22px; border-radius:50%; background:var(--border); color:var(--gray); font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; }
  .stage.active .stage-num{ background:var(--teal); color:#fff; }
  .stage-label{ font-size:12px; font-weight:600; color:var(--navy); line-height:1.3; }

  .card{ border:1px solid var(--border); border-radius:16px; padding:28px; margin-bottom:24px; }
  .card h2{ font-family:'Space Grotesk',sans-serif; font-size:17px; margin:0 0 14px; }
  textarea{ width:100%; min-height:90px; border:1px solid var(--border); border-radius:10px; padding:12px 14px; font-family:inherit; font-size:14.5px; resize:vertical; }
  textarea:focus{ outline:2px solid var(--teal); outline-offset:1px; }
  .samples{ display:flex; gap:8px; flex-wrap:wrap; margin-top:10px; }
  .sample-btn{ font-size:12.5px; border:1px solid var(--border); background:#fff; color:var(--gray); padding:6px 12px; border-radius:999px; cursor:pointer; }
  .sample-btn:hover{ border-color:var(--teal); color:var(--teal-dark); }
  .submit-btn{ margin-top:16px; background:var(--teal); color:#fff; border:none; padding:12px 22px; border-radius:10px; font-size:14.5px; font-weight:600; cursor:pointer; }
  .submit-btn:hover{ background:var(--teal-dark); }
  .submit-btn:disabled{ opacity:0.6; cursor:default; }

  #results{ display:none; }
  .verdict-row{ display:flex; align-items:center; gap:10px; margin-bottom:18px; }
  .verdict-pill{ font-size:13px; font-weight:700; padding:6px 14px; border-radius:999px; }
  .verdict-pill.disputed{ background:#FEF3C7; color:#92400E; }
  .verdict-pill.confirmed{ background:#DCFCE7; color:#166534; }
  .verdict-pill.unverified{ background:#F1F5F9; color:#475569; }
  .verdict-note{ font-size:13px; color:var(--gray); }

  .sources{ display:flex; flex-direction:column; gap:10px; margin:14px 0 20px; }
  .source{ border:1px solid var(--border); border-radius:10px; padding:12px 14px; font-size:13.5px; display:flex; justify-content:space-between; gap:12px; }
  .source .name{ font-weight:600; }
  .source .stance{ font-size:12px; font-weight:600; padding:3px 9px; border-radius:999px; white-space:nowrap; height:fit-content; }
  .source a{ color:inherit; text-decoration:underline; text-underline-offset:2px; }
  .error-box{ margin-top:14px; background:#FEF2F2; border:1px solid #FECACA; border-radius:10px; padding:12px 14px; font-size:13.5px; color:#991B1B; word-break:break-word; }
  .script-note{ font-size:12.5px; color:var(--gray); margin-top:10px; }
  .stance.confirms{ background:#DCFCE7; color:#166534; }
  .stance.disputes{ background:#FEE2E2; color:#991B1B; }
  .stance.context{ background:#E0F2FE; color:#075985; }

  .summary-box{ background:var(--panel); border-radius:10px; padding:16px 18px; font-size:14px; margin-bottom:18px; }

  .lang-tabs{ display:flex; gap:6px; margin-bottom:12px; }
  .lang-tab{ font-size:13px; font-weight:600; padding:7px 16px; border-radius:8px; border:1px solid var(--border); background:#fff; cursor:pointer; color:var(--gray); }
  .lang-tab.active{ background:var(--navy); color:#fff; border-color:var(--navy); }
  .script-box{ background:var(--panel); border-radius:10px; padding:16px 18px; font-size:14px; white-space:pre-line; }
  .script-box[lang="ha"]{ font-style:italic; }

  .presenter{ border:1px dashed var(--border); border-radius:12px; padding:36px 20px; text-align:center; color:var(--gray); font-size:13.5px; background:var(--panel); }
  .presenter svg{ width:34px; height:34px; margin-bottom:10px; color:var(--teal); }

  .review-note{ display:flex; gap:10px; background:#FEF2F2; border:1px solid #FECACA; border-radius:10px; padding:14px 16px; font-size:13px; color:#991B1B; margin-top:18px; }
  .review-note svg{ width:18px; height:18px; flex-shrink:0; margin-top:1px; }

  footer{ margin-top:48px; padding-top:24px; border-top:1px solid var(--border); font-size:12.5px; color:var(--gray); text-align:center; }

  .source-main{ display:flex; flex-direction:column; gap:4px; min-width:0; }
  .cred{ display:inline-flex; align-items:center; gap:5px; font-size:11.5px; font-weight:700; }
  .cred::before{ content:""; width:7px; height:7px; border-radius:50%; flex-shrink:0; }
  .cred.high{ color:#166534; } .cred.high::before{ background:#166534; }
  .cred.medium{ color:#92400E; } .cred.medium::before{ background:#92400E; }
  .cred.low{ color:#991B1B; } .cred.low::before{ background:#991B1B; }
  .cred-note{ font-size:11.5px; color:var(--gray); }

  .wa-intro{ color:var(--gray); font-size:13.5px; margin:0 0 14px; }
  .wa-mock{ background:#E8F5F3; border-radius:14px; padding:14px; max-width:420px; }
  .wa-header{ display:flex; align-items:center; gap:9px; margin-bottom:10px; }
  .wa-avatar{ width:30px; height:30px; border-radius:50%; background:var(--teal); color:#fff; font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .wa-name{ font-size:13px; font-weight:700; }
  .wa-sub{ font-size:11px; color:var(--gray); }
  .wa-bubble{ background:#fff; border-radius:10px; padding:11px 13px; font-size:13.5px; line-height:1.5; }
  .wa-meta{ font-size:11px; color:var(--gray); text-align:right; margin-top:7px; }

  @media (max-width:640px){
    .stages{ grid-template-columns:repeat(5,1fr); gap:4px; }
    .stage{ padding:8px 4px; }
    .stage-label{ font-size:10px; }
  }
</style>
</head>
<body>
<div class="wrap">

  <header>
    <div class="mark"><svg viewBox="0 0 32 20" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16h28" stroke-width="1.8"/><path d="M9 2v14M23 2v14" stroke-width="1.8"/><path d="M2 13Q5 3 9 2Q12 8 16 10Q20 8 23 2Q27 3 30 13"/><path d="M5 10v6M12 7v9M16 10v6M20 7v9M27 10v6"/></svg></div>
    <div>
      <h1>TruthBridge AI</h1>
      <p class="tagline">AI-assisted claim verification &amp; multilingual news presenter</p>
    </div>
  </header>


  <div class="stages">
    <div class="stage active"><div class="stage-num">1</div><div class="stage-label">Submit claim</div></div>
    <div class="stage active"><div class="stage-num">2</div><div class="stage-label">Investigate</div></div>
    <div class="stage active"><div class="stage-num">3</div><div class="stage-label">Evidence summary</div></div>
    <div class="stage active"><div class="stage-num">4</div><div class="stage-label">Script (HA/EN)</div></div>
    <div class="stage"><div class="stage-num">5</div><div class="stage-label">AI presenter</div></div>
  </div>

  <div class="card">
    <h2>Stage 1 — Submit a claim</h2>
    <textarea id="claimInput" placeholder="Paste or type a claim, rumour, or news report to check…"></textarea>
    <div class="samples">
      <button class="sample-btn" data-sample="a">Sample: community attack rumour</button>
      <button class="sample-btn" data-sample="b">Sample: public-health claim</button>
    </div>
    <button class="submit-btn" id="investigateBtn">Investigate this claim</button>
    <div class="error-box" id="errorBox" role="alert" hidden></div>
  </div>

  <div id="results">
    <div class="card">
      <h2>Stage 2–3 — Evidence &amp; summary</h2>
      <div class="verdict-row">
        <span class="verdict-pill disputed" id="verdictPill">Disputed — evidence incomplete</span>
        <span class="verdict-note" id="verdictNote">Reviewed against 3 sample sources · human review required before publication</span>
      </div>
      <div class="sources" id="sourcesList"></div>
      <div class="summary-box" id="summaryBox"></div>
    </div>

    <div class="card">
      <h2>How this reaches people</h2>
      <p class="wa-intro">Most of this misinformation first spreads through WhatsApp groups — so the reviewed result is designed to be shared the same way, not locked inside a dashboard.</p>
      <div class="wa-mock">
        <div class="wa-header">
          <div class="wa-avatar">TB</div>
          <div><div class="wa-name">TruthBridge AI</div><div class="wa-sub">Community update</div></div>
        </div>
        <div class="wa-bubble" id="waBubble"></div>
        <div class="wa-meta">9:41 AM ✓✓</div>
      </div>
    </div>

    <div class="card">
      <h2>Stage 4 — News script</h2>
      <div class="lang-tabs">
        <button class="lang-tab active" data-lang="en">English</button>
        <button class="lang-tab" data-lang="ha">Hausa</button>
        <button class="lang-tab" data-lang="ar">Arabic</button>
        <button class="lang-tab" data-lang="fr">French</button>
        <button class="lang-tab" data-lang="ja">Japanese</button>
      </div>
      <div class="script-box" id="scriptBox"></div>
      <div class="script-note" id="scriptNote" hidden></div>
    </div>

    <div class="card">
      <h2>Stage 5 — AI presenter</h2>
      <div class="presenter">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3Z"/></svg>
        <div>Video presenter rendering is the next build milestone — this demo shows the reviewed script ready for hand-off to the text-to-speech / avatar stage.</div>
      </div>
      <div class="review-note" id="reviewNote">
        <svg viewBox="0 0 24 24" fill="none" stroke="#991B1B" stroke-width="2"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>
        <div>This claim involves a sensitive safety, security or health report. Per TruthBridge AI's editorial policy, publication is blocked until a human reviewer confirms or edits this summary.</div>
      </div>
    </div>
  </div>

  <footer>
    TruthBridge AI — built by CapacityHub
  </footer>

</div>

<script>
const SAMPLES = {
  a: "A message circulating on WhatsApp claims that a community in Katsina State was attacked overnight and that security forces are not responding.",
  b: "A social media post claims that a specific contraceptive method sold locally causes infertility in young women.",
};

const DATA = {
  a: {
    verdict: { label: "Disputed — evidence incomplete", cls: "disputed" },
    sources: [
      { name: "Local radio station report (same morning)", stance: "context", label: "Related context", cred: "medium", credNote: "Established local outlet, not independently corroborated" },
      { name: "State police public statement", stance: "disputes", label: "Disputes claim", cred: "high", credNote: "Official government source" },
      { name: "Community WhatsApp group (original post)", stance: "context", label: "Original source", cred: "low", credNote: "Unverified individual account, no corroboration" },
    ],
    summary: "Confirmed: a security incident was reported in the area within the last 48 hours. Disputed: the claim that security forces are not responding is contradicted by an official statement, though response time is not independently verified. Unknown: the scale and exact location of the incident have not been confirmed by an independent source.",
    script_en: "Reports have circulated this week of a security incident in [community], Katsina State. We can confirm a local radio report referenced an incident in the same area. However, a statement from state police disputes claims that security forces have not responded. We were not able to independently verify the scale of the incident. We'll update this report as more verified information becomes available.",
    script_ha: "An samu rahotanni a wannan makon game da wani lamarin tsaro a [al'umma], Jihar Katsina. Za mu iya tabbatar da cewa wani rahoto na gidan rediyo na gida ya ambaci wani lamari a wannan yanki. Sai dai, wata sanarwa daga 'yan sanda ta jiha ta musanta cewa jami'an tsaro ba su mayar da martani ba. Ba mu iya tabbatar da girman lamarin ba daga wata majiya mai zaman kanta. Za mu sabunta wannan rahoto idan an samu karin tabbataccen bayani.",
  },
  b: {
    verdict: { label: "Unverified — no credible source found", cls: "unverified" },
    sources: [
      { name: "National health regulator product database", stance: "disputes", label: "No such warning listed", cred: "high", credNote: "Official regulatory record" },
      { name: "Peer-reviewed study (contraceptive safety, regional)", stance: "disputes", label: "Contradicts claim", cred: "high", credNote: "Peer-reviewed, regionally relevant" },
      { name: "Original social media post", stance: "context", label: "Original source", cred: "low", credNote: "Unverified individual account, no citation" },
    ],
    summary: "Disputed: no credible medical source or the national health regulator's product safety records support this claim. A regional peer-reviewed study on the same contraceptive method found no link to infertility. The claim appears to originate from a single unverified social media post with no cited source.",
    script_en: "A claim shared online this week states that a widely used contraceptive method causes infertility. We checked the national health regulator's safety records and a peer-reviewed regional study — neither supports this claim. If you have questions about contraceptive safety, we encourage speaking with a qualified healthcare provider rather than relying on unverified posts.",
    script_ha: "Wani sakon da aka yada a kafafen sada zumunta a wannan makon ya ce wata hanyar hana daukar ciki da ake amfani da ita a ko'ina tana haddasa rashin haihuwa. Mun duba bayanan tsaro na hukumar lafiya ta kasa da kuma wani bincike da aka buga — babu wanda ya tabbatar da wannan zargi. Idan kuna da tambayoyi game da amincin hanyoyin hana daukar ciki, muna ba da shawarar tuntubar ƙwararren likita maimakon dogara da sakonnin da ba a tabbatar ba.",
  }
};

// Set this to your deployed Worker address (see backend/DEPLOY.md) to switch on live checking.
// Leave it empty and the page runs in sample mode.
const API_URL = "https://script.google.com/macros/s/AKfycbyJOJ1U9n9bq5eIMOf9EouK2vfPNHGmVuli_TD7UeM0_0GjOL9pnHpxLCRW4mcXihco/exec";

const claimInput = document.getElementById('claimInput');
const investigateBtn = document.getElementById('investigateBtn');
const results = document.getElementById('results');
const verdictPill = document.getElementById('verdictPill');
const verdictNote = document.getElementById('verdictNote');
const sourcesList = document.getElementById('sourcesList');
const summaryBox = document.getElementById('summaryBox');
const scriptBox = document.getElementById('scriptBox');
const scriptNote = document.getElementById('scriptNote');
const waBubble = document.getElementById('waBubble');
const reviewNote = document.getElementById('reviewNote');
const errorBox = document.getElementById('errorBox');

const CRED_LABEL = { high: "High reliability", medium: "Moderate reliability", low: "Unverified / low reliability" };
const STANCE_LABEL = { confirms: "Supports claim", disputes: "Disputes claim", context: "Related context" };

let current = null;      // the result being shown
let currentLang = 'en';

function esc(t) {
  return String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fromSample(key) {
  const d = DATA[key];
  return { live: false, verdict: d.verdict.cls, verdictLabel: d.verdict.label, sensitive: true,
           sources: d.sources, summary: d.summary, script_en: d.script_en, script_ha: d.script_ha,
           note: 'Reviewed against 3 sample sources · human review required before publication' };
}

document.querySelectorAll('.sample-btn').forEach(btn => {
  btn.addEventListener('click', () => { claimInput.value = SAMPLES[btn.dataset.sample]; });
});

function render() {
  const d = current;
  if (!d) return;
  verdictPill.textContent = d.verdictLabel;
  verdictPill.className = 'verdict-pill ' + d.verdict;
  verdictNote.textContent = d.note || (d.live
    ? 'Checked against ' + d.sourcesChecked + ' live sources · AI-drafted · human review required before publication'
    : '');
  sourcesList.innerHTML = d.sources.length ? d.sources.map(s => {
    const label = s.label || STANCE_LABEL[s.stance] || 'Related context';
    const name = s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a>` : esc(s.name);
    return `
    <div class="source">
      <div class="source-main">
        <span class="name">${name}</span>
        <span class="cred ${esc(s.cred)}">${CRED_LABEL[s.cred]}</span>
        <span class="cred-note">${esc(s.credNote)}</span>
      </div>
      <span class="stance ${esc(s.stance)}">${esc(label)}</span>
    </div>`;
  }).join('') : '<div class="source"><div class="source-main"><span class="name">No sources found</span></div></div>';
  summaryBox.textContent = d.summary;
  waBubble.textContent = "✅ Verified update: " + d.summary;
  reviewNote.style.display = d.sensitive ? 'flex' : 'none';
  scriptNote.hidden = true;
  const scripts = { en: d.script_en, ha: d.script_ha, ar: d.script_ar, fr: d.script_fr, ja: d.script_ja };
  const names = { ha: 'Hausa', ar: 'Arabic', fr: 'French', ja: 'Japanese' };
  const text = scripts[currentLang];
  if (text) {
    scriptBox.textContent = text;
    if (d.live && currentLang !== 'en') {
      scriptNote.textContent = 'Machine-drafted ' + names[currentLang] + '. A native ' + names[currentLang] + ' speaker must review it before publication.';
      scriptNote.hidden = false;
    }
  } else if (d.live) {
    scriptBox.textContent = 'No script was generated because no sources were found.';
  } else if (currentLang === 'en' || currentLang === 'ha') {
    scriptBox.textContent = 'No script available.';
  } else {
    scriptBox.textContent = 'Coming soon — live checking generates this language. Switch it on to see it.';
  }
  scriptBox.setAttribute('lang', currentLang);
  scriptBox.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
}

function show() {
  render();
  results.style.display = 'block';
  results.scrollIntoView({ behavior: 'smooth' });
  document.querySelectorAll('.stages .stage')[4].classList.add('active');
}

investigateBtn.addEventListener('click', async () => {
  const claim = claimInput.value.trim();
  if (!claim) { claimInput.focus(); return; }
  const sampleKey = Object.keys(SAMPLES).find(k => SAMPLES[k] === claim);

  if (!API_URL) {
    // Sample mode: only the two built-in claims have results. Say so for anything else.
    current = fromSample(sampleKey || 'a');
    if (!sampleKey) current.note = 'Sample mode: live checking is not switched on, so this is a sample result, not a check of your text.';
    show();
    return;
  }

  errorBox.hidden = true;
  const label = investigateBtn.textContent;
  investigateBtn.disabled = true;
  investigateBtn.textContent = 'Checking sources…';
  try {
    // text/plain keeps this a simple request, which works with both Google Apps Script and Cloudflare.
    const res = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ claim }) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.error) throw new Error(data.error || 'The check could not be completed.');
    current = data;
    show();
  } catch (err) {
    console.error(err);
    errorBox.textContent = (err && err.message ? err.message : 'The check could not be completed.') + (/failed to fetch|networkerror|load failed/i.test(String(err && err.message)) ? ' (The browser could not reach the service. If you opened this page inside an app preview, open the file in Chrome instead.)' : '');
    errorBox.hidden = false;
  } finally {
    investigateBtn.disabled = false;
    investigateBtn.textContent = label;
  }
});

document.querySelectorAll('.lang-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentLang = tab.dataset.lang;
    render();
  });
});
</script>
</body>
</html>