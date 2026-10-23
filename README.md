<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>TruthBridge AI</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">

<style>
:root {
  --teal:#0D9488;
  --dark:#0F766E;
  --navy:#0B1220;
  --gray:#4B5563;
  --border:#E2E8F0;
  --panel:#F8FAFC;
}
*{box-sizing:border-box}
body{margin:0;color:var(--navy);font-family:Inter,sans-serif;line-height:1.5}
.wrap{max-width:900px;margin:auto;padding:38px 20px 80px}
header{display:flex;align-items:center;gap:14px}
.mark{width:48px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--teal),var(--dark));display:grid;place-items:center;color:white;font-weight:700}
h1,h2{font-family:'Space Grotesk',sans-serif}
h1{font-size:24px;margin:0}
.tagline{color:var(--gray);margin:4px 0}
.badge{display:inline-block;background:#FEF3C7;color:#92400E;border-radius:99px;padding:6px 12px;font-size:12px;font-weight:700;margin:18px 0}
.stages{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-bottom:25px}
.stage,.card{border:1px solid var(--border);border-radius:14px;background:white}
.stage{text-align:center;background:var(--panel);padding:10px 4px}
.stage-num{margin:auto auto 6px;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--teal);color:white;font-size:12px}
.stage-label{font-size:11px;font-weight:600}
.card{padding:24px;margin-bottom:20px}
.card h2{font-size:17px;margin:0 0 14px}
textarea{width:100%;min-height:95px;border:1px solid var(--border);border-radius:10px;padding:12px;font:14px Inter;resize:vertical}
.samples,.lang-tabs{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}
.sample-btn,.lang-tab{background:white;border:1px solid var(--border);border-radius:99px;padding:7px 11px;cursor:pointer;font-size:12px}
.submit-btn{background:var(--teal);color:white;border:0;border-radius:10px;padding:12px 18px;font-weight:700;margin-top:15px;cursor:pointer}
.submit-btn:disabled{opacity:.6;cursor:wait}
.status,.script-note{font-size:12px;color:var(--gray);margin-top:10px}
.error-box{background:#FEF2F2;border:1px solid #FECACA;color:#991B1B;border-radius:10px;padding:12px;margin-top:12px;font-size:13px;overflow-wrap:anywhere}
.verdict-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.verdict-pill{font-size:12px;font-weight:700;padding:6px 12px;border-radius:99px}
.confirmed{background:#DCFCE7;color:#166534}
.disputed{background:#FEF3C7;color:#92400E}
.unverified{background:#F1F5F9;color:#475569}
.verdict-note,.cred-note{font-size:12px;color:var(--gray)}
.sources{display:grid;gap:10px;margin:15px 0}
.source{border:1px solid var(--border);border-radius:10px;padding:12px;font-size:13px}
.source a{color:inherit;overflow-wrap:anywhere}
.cred{display:block;font-size:11px;font-weight:700;color:#92400E;margin-top:5px}
.summary-box,.script-box{background:var(--panel);padding:15px;border-radius:10px;font-size:14px;white-space:pre-wrap;overflow-wrap:anywhere}
.lang-tab.active{background:var(--navy);color:white}
.review-note{margin-top:15px;background:#FEF2F2;border:1px solid #FECACA;color:#991B1B;padding:13px;border-radius:10px;font-size:13px}
.wa-mock{background:#E8F5F3;padding:14px;border-radius:12px;max-width:430px}
.wa-bubble{background:white;border-radius:10px;padding:12px;font-size:13px;white-space:pre-wrap}
.presenter{background:var(--panel);border:1px dashed var(--border);padding:25px;text-align:center;border-radius:12px;color:var(--gray);font-size:13px}
footer{border-top:1px solid var(--border);padding-top:20px;margin-top:35px;text-align:center;color:var(--gray);font-size:12px}
@media(max-width:600px){
.wrap{padding:25px 12px}
.card{padding:18px 14px}
.stages{gap:3px}
.stage-label{font-size:9px}
}
</style>
</head>

<body>
<div class="wrap">

<header>
  <div class="mark">TB</div>
  <div>
    <h1>TruthBridge AI</h1>
    <p class="tagline">AI-assisted claim investigation & multilingual news drafts</p>
  </div>
</header>

<div class="badge">Browser AI · no AI API key · web search may be incomplete</div>

<div class="stages">
  <div class="stage"><div class="stage-num">1</div><div class="stage-label">Submit claim</div></div>
  <div class="stage"><div class="stage-num">2</div><div class="stage-label">Investigate</div></div>
  <div class="stage"><div class="stage-num">3</div><div class="stage-label">Evidence summary</div></div>
  <div class="stage"><div class="stage-num">4</div><div class="stage-label">Script</div></div>
  <div class="stage"><div class="stage-num">5</div><div class="stage-label">Presenter</div></div>
</div>

<div class="card">
  <h2>Stage 1 — Submit a claim</h2>

  <textarea id="claimInput" placeholder="Paste or type a claim, rumour, or news report to check…"></textarea>

  <div class="samples">
    <button class="sample-btn" data-sample="A message circulating on WhatsApp claims that a community in Katsina State was attacked overnight and that security forces are not responding.">
      Sample: community attack rumour
    </button>

    <button class="sample-btn" data-sample="A social media post claims that a contraceptive method sold locally causes infertility in young women.">
      Sample: public-health claim
    </button>
  </div>

  <button class="submit-btn" id="investigateBtn">Investigate this claim</button>

  <div class="status" id="statusText">
    First use downloads a browser AI model. Wi-Fi is recommended; model support depends on your device/browser.
  </div>

  <div class="error-box" id="errorBox" hidden></div>
</div>

<div id="results" hidden>

  <div class="card">
    <h2>Stage 2–3 — Evidence & summary</h2>
    <div class="verdict-row">
      <span id="verdictPill" class="verdict-pill unverified">Unverified</span>
      <span id="verdictNote" class="verdict-note"></span>
    </div>
    <div class="sources" id="sourcesList"></div>
    <div class="summary-box" id="summaryBox"></div>
  </div>

  <div class="card">
    <h2>Shareable community update</h2>
    <p class="tagline">Draft only — do not publish before human review.</p>
    <div class="wa-mock">
      <div class="wa-bubble" id="waBubble"></div>
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

    <div id="scriptBox" class="script-box"></div>
    <div class="script-note">AI-generated draft; have a qualified reviewer check it.</div>
  </div>

  <div class="card">
    <h2>Stage 5 — AI presenter</h2>
    <div class="presenter">
      Video presenter generation is not connected yet. This is the script hand-off stage.
    </div>

    <div class="review-note" id="reviewNote">
      Human review is required before publication, especially for claims involving health, violence, security incidents, or identifiable people. This AI assessment is not proof of truth.
    </div>
  </div>

</div>

<footer>TruthBridge AI — built by CapacityHub</footer>
</div>

<script type="module">
const MODEL_ID = 'Llama-3.2-1B-Instruct-q4f16_1-MLC';

const LANGS = {
  en: 'English',
  ha: 'Hausa',
  ar: 'Arabic',
  fr: 'French',
  ja: 'Japanese'
};

const $ = id => document.getElementById(id);

let engine = null;
let enginePromise = null;
let current = null;
let currentLang = 'en';

const claimInput = $('claimInput');
const button = $('investigateBtn');
const status = $('statusText');
const error = $('errorBox');
const results = $('results');

function setStatus(message) {
  status.textContent = message;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function sensitiveClaim(text) {
  return /attack|killed|violence|terror|bomb|kidnap|security|police|soldier|outbreak|disease|epidemic|vaccine|contracept|infertil|rape|assault|massacre|gunmen|explosion|death|dead|abduct|accused/i.test(text);
}

async function getEngine() {
  if (engine) return engine;
  if (enginePromise) return enginePromise;

  enginePromise = (async () => {
    setStatus('Loading browser AI library…');

    const mlc = await import('https://esm.run/@mlc-ai/web-llm');

    setStatus('Downloading/preparing local AI model. Keep this tab open…');

    engine = await mlc.CreateMLCEngine(MODEL_ID, {
      initProgressCallback: progress => {
        if (progress?.text) {
          setStatus('Loading model: ' + progress.text);
        }
      }
    });

    setStatus('Local AI is ready. Searching public web results…');

    return engine;
  })();

  try {
    return await enginePromise;
  } catch (err) {
    enginePromise = null;
    engine = null;
    throw err;
  }
}

async function searchGdelt(claim) {
  const words = claim
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3)
    .slice(0, 8)
    .join(' ');

  if (!words) return [];

  const url =
    'https://api.gdeltproject.org/api/v2/doc/doc?query=' +
    encodeURIComponent(words) +
    '&mode=ArtList&format=json&maxrecords=6&timespan=7d&sort=HybridRel';

  const response = await fetch(url);

  if (!response.ok) {
    throw Error('News search HTTP ' + response.status);
  }

  const data = await response.json();

  return (data.articles || [])
    .map(article => ({
      title: article.title || article.domain || 'News result',
      url: article.url,
      date: article.seendate || '',
      domain: article.domain || '',
      snippet: ''
    }))
    .filter(article => /^https?:\/\//i.test(article.url || ''));
}

async function searchWiki(claim) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' +
    encodeURIComponent(claim) +
    '&format=json&origin=*&srlimit=3';

  const response = await fetch(url);

  if (!response.ok) {
    throw Error('Reference search HTTP ' + response.status);
  }

  const data = await response.json();

  return (data.query?.search || []).map(article => ({
    title: article.title,
    url: 'https://en.wikipedia.org/wiki/' +
      encodeURIComponent(article.title.replace(/ /g, '_')),
    domain: 'Wikipedia',
    snippet: article.snippet.replace(/<[^>]*>/g, ' ')
  }));
}

async function collectSources(claim) {
  let articles = [];
  const notes = [];

  try {
    articles = await searchGdelt(claim);
  } catch (err) {
    notes.push('News search unavailable: ' + err.message);
  }

  if (articles.length < 3) {
    try {
      articles = articles.concat(await searchWiki(claim));
    } catch (err) {
      notes.push('Reference search unavailable: ' + err.message);
    }
  }

  const seen = new Set();

  articles = articles.filter(article => {
    if (!article.url || seen.has(article.url)) return false;
    seen.add(article.url);
    return true;
  }).slice(0, 8);

  return { articles, notes };
}

function sourcesText(articles) {
  if (!articles.length) {
    return 'No web search results were retrieved. Say that evidence is insufficient; do not claim that external sources were checked.';
  }

  return articles.map((article, index) =>
    `${index + 1}. Title: ${article.title}
URL: ${article.url}
Date: ${article.date || 'not provided'}
Domain: ${article.domain || 'not provided'}
Snippet: ${article.snippet || 'No article text/snippet available; title alone is not evidence.'}`
  ).join('\n\n');
}

async function ask(claim, articles, language) {
  const ai = await getEngine();

  const system = `You are TruthBridge AI's cautious evidence-analysis assistant.

Search-result titles and links are not proof. Article contents may not have been retrieved.

Never invent facts, quotations, dates, source reliability, or official statements.

If evidence is thin, unrelated, conflicting, or unavailable, use Unverified.

Use Supported only if supplied material directly supports the claim. Use Disputed only if supplied material directly contradicts it.

Do not state allegations about private people as fact.

Sensitive health, security, violence, or identifiable-person claims require human review.

Respond as valid JSON only with these keys:
verdict (Supported, Disputed, or Unverified),
rationale,
limitations,
script (in ${LANGS[language]}),
humanReviewRequired (boolean).

State limitations clearly.`;

  const user = `Claim: ${claim}

Web search results (discovery only; not independently verified):
${sourcesText(articles)}

Assess only what this supplied material supports. Explain whether results directly support or contradict the claim or are merely related. Write a short, cautious public-interest script in ${LANGS[language]}.`;

  const response = await ai.chat.completions.create({
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ],
    temperature: 0.1,
    max_tokens: 600
  });

  const raw = (response.choices?.[0]?.message?.content || '')
    .replace(/```json|```/gi, '')
    .trim();

  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');

  if (start < 0 || end < start) {
    throw Error('The local model returned an invalid response. Try again.');
  }

  return JSON.parse(raw.slice(start, end + 1));
}

function verdict(value) {
  value = String(value || '').toLowerCase();

  if (value.includes('support')) {
    return ['confirmed', 'Supported — AI assessment, not proof'];
  }

  if (value.includes('disput')) {
    return ['disputed', 'Disputed — evidence may be incomplete'];
  }

  return ['unverified', 'Unverified — evidence insufficient'];
}

function render() {
  if (!current) return;

  const result = current.answer;
  const verdictInfo = verdict(result.verdict);

  $('verdictPill').className = 'verdict-pill ' + verdictInfo[0];
  $('verdictPill').textContent = verdictInfo[1];

  $('verdictNote').textContent =
    current.sources.length +
    ' search result(s); contents not independently verified';

  $('sourcesList').innerHTML = current.sources.length
    ? current.sources.map(source => `
      <div class="source">
        <strong>
          ${source.url
            ? `<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a>`
            : esc(source.title)}
        </strong>
        <span class="cred">Search result only — credibility not assessed</span>
        <span class="cred-note">
          ${esc(source.domain || '')}
          ${esc(source.date || '')}
          ${esc(source.snippet || '')}
        </span>
      </div>
    `).join('')
    : '<div class="source">No live sources retrieved. This is not a verification of the claim.</div>';

  $('summaryBox').textContent =
    'AI assessment: ' +
    (result.rationale || 'No clear conclusion.') +
    '\n\nLimitations: ' +
    (result.limitations || 'The results may be incomplete. Open the links and verify their contents independently.') +
    '\n\n' +
    (current.sources.length
      ? 'Search results were discovered, but this page did not verify their full contents.'
      : 'No live results were retrieved.') +
    (current.notes.length
      ? '\n\nSearch notes: ' + current.notes.join(' ')
      : '');

  $('waBubble').textContent =
    'DRAFT — NOT FOR PUBLICATION\n' +
    result.rationale;

  $('scriptBox').textContent =
    current.scripts[currentLang] ||
    'No script generated for this language yet.';

  $('reviewNote').style.display =
    (current.sensitive || result.humanReviewRequired)
      ? 'block'
      : 'none';
}

document.querySelectorAll('.sample-btn').forEach(button => {
  button.addEventListener('click', () => {
    claimInput.value = button.dataset.sample;
  });
});

document.querySelectorAll('.lang-tab').forEach(tab => {
  tab.addEventListener('click', async () => {
    document.querySelectorAll('.lang-tab').forEach(item => {
      item.classList.remove('active');
    });

    tab.classList.add('active');
    currentLang = tab.dataset.lang;

    if (!current) return;

    try {
      setStatus('Generating ' + LANGS[currentLang] + ' script…');

      const result = await ask(
        current.claim,
        current.sources,
        currentLang
      );

      current.scripts[currentLang] = result.script || '';

      render();

      setStatus(
        'Script generated. Human review is required before publication.'
      );
    } catch (err) {
      $('scriptBox').textContent =
        'Could not generate this language script: ' + err.message;

      setStatus('Language generation failed.');
    }
  });
});

button.addEventListener('click', async () => {
  const claim = claimInput.value.trim();

  if (!claim) {
    claimInput.focus();
    return;
  }

  if (claim.length > 1200) {
    error.textContent = 'Please keep the claim under 1,200 characters.';
    error.hidden = false;
    return;
  }

  error.hidden = true;
  button.disabled = true;
  button.textContent = 'Preparing AI…';
  results.hidden = true;

  try {
    await getEngine();

    setStatus('Searching recent public web results…');
    button.textContent = 'Searching evidence…';

    const found = await collectSources(claim);

    setStatus('Analysing search results with local AI…');
    button.textContent = 'Analysing…';

    const answer = await ask(claim, found.articles, 'en');

    current = {
      claim,
      answer,
      sources: found.articles,
      notes: found.notes,
      sensitive: sensitiveClaim(claim),
      scripts: {
        en: answer.script || ''
      }
    };

    currentLang = 'en';

    document.querySelectorAll('.lang-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.lang === 'en');
    });

    render();

    results.hidden = false;
    results.scrollIntoView({ behavior: 'smooth' });

    setStatus(
      'Preliminary analysis complete. It is not a verified fact-check.'
    );

  } catch (err) {
    console.error(err);

    let message = err?.message || 'Unknown error';

    if (/webgpu|gpu|adapter|not supported|compatible/i.test(message)) {
      message =
        'This device/browser may not support WebGPU or the selected model. Try a recent desktop Chrome/Edge or a compatible device.';
    }

    error.textContent =
      'TruthBridge AI could not complete the investigation: ' + message;

    error.hidden = false;

    setStatus(
      'Check browser support and internet connection, then try again.'
    );

  } finally {
    button.disabled = false;
    button.textContent = 'Investigate this claim';
  }
});
</script>
</body>
</html>