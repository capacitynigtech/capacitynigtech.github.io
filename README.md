<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#0D9488">
<title>TruthBridge AI</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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

* { box-sizing:border-box; }

body {
  margin:0;
  color:var(--navy);
  background:#fff;
  font-family:Inter,Arial,sans-serif;
  line-height:1.6;
}

button,textarea { font:inherit; }

.wrap {
  max-width:900px;
  margin:auto;
  padding:28px 16px 60px;
}

header {
  display:flex;
  align-items:center;
  gap:13px;
}

.mark {
  width:48px;
  height:42px;
  border-radius:11px;
  background:linear-gradient(135deg,var(--teal),var(--dark));
  display:grid;
  place-items:center;
  color:white;
  font-weight:700;
  flex-shrink:0;
}

h1,h2 { font-family:"Space Grotesk",sans-serif; }
h1 { font-size:25px; margin:0; }
h2 { font-size:18px; margin:0 0 14px; }

.tagline {
  color:var(--gray);
  margin:3px 0;
  font-size:13px;
}

.badge {
  display:inline-block;
  background:#CCFBF1;
  color:#115E59;
  border-radius:99px;
  padding:6px 12px;
  font-size:11px;
  font-weight:700;
  margin:15px 0 20px;
}

.stages {
  display:grid;
  grid-template-columns:repeat(5,minmax(0,1fr));
  gap:6px;
  margin-bottom:22px;
}

.stage,.card {
  border:1px solid var(--border);
  border-radius:14px;
  background:white;
}

.stage {
  text-align:center;
  background:var(--panel);
  padding:10px 3px;
}

.stage-num {
  margin:0 auto 5px;
  width:23px;
  height:23px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:var(--teal);
  color:white;
  font-size:12px;
  font-weight:700;
}

.stage-label { font-size:10px; font-weight:600; }

.card {
  padding:21px;
  margin-bottom:18px;
}

textarea {
  width:100%;
  min-height:110px;
  border:1px solid #CBD5E1;
  border-radius:10px;
  padding:13px;
  font-size:14px;
  line-height:1.6;
  resize:vertical;
  outline:none;
}

textarea:focus {
  border-color:var(--teal);
  box-shadow:0 0 0 3px #CCFBF1;
}

.samples,.lang-tabs {
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:11px;
}

.sample-btn,.lang-tab {
  background:white;
  border:1px solid var(--border);
  border-radius:99px;
  padding:8px 11px;
  cursor:pointer;
  font-size:12px;
}

.submit-btn {
  width:100%;
  background:var(--teal);
  color:white;
  border:0;
  border-radius:10px;
  padding:13px 18px;
  font-weight:700;
  margin-top:17px;
  cursor:pointer;
}

.submit-btn:disabled {
  opacity:.65;
  cursor:wait;
}

.status,.small-note {
  font-size:12px;
  color:var(--gray);
  margin-top:11px;
  overflow-wrap:anywhere;
}

.error-box {
  background:#FEF2F2;
  border:1px solid #FECACA;
  color:#991B1B;
  border-radius:10px;
  padding:12px;
  margin-top:12px;
  font-size:12px;
  white-space:pre-wrap;
  overflow-wrap:anywhere;
}

.notice {
  background:#FFFBEB;
  border:1px solid #FDE68A;
  color:#92400E;
  border-radius:10px;
  padding:12px;
  margin:12px 0;
  font-size:12px;
}

.mode-pill {
  display:inline-block;
  padding:5px 10px;
  border-radius:99px;
  background:#DBEAFE;
  color:#1D4ED8;
  font-size:11px;
  font-weight:700;
  margin-bottom:12px;
}

.verdict-row {
  display:flex;
  gap:10px;
  align-items:center;
  flex-wrap:wrap;
}

.verdict-pill {
  font-size:12px;
  font-weight:700;
  padding:6px 12px;
  border-radius:99px;
}

.confirmed { background:#DCFCE7; color:#166534; }
.disputed { background:#FEF3C7; color:#92400E; }
.unverified { background:#F1F5F9; color:#475569; }

.sources {
  display:grid;
  gap:10px;
  margin:15px 0;
}

.source {
  border:1px solid var(--border);
  border-radius:10px;
  padding:13px;
  font-size:13px;
  overflow-wrap:anywhere;
}

.source a {
  color:var(--dark);
  font-weight:600;
  overflow-wrap:anywhere;
}

.source p {
  margin:6px 0 0;
  color:var(--gray);
  font-size:12px;
}

.answer-box,.summary-box,.script-box {
  background:var(--panel);
  padding:15px;
  border-radius:10px;
  font-size:14px;
  white-space:pre-wrap;
  overflow-wrap:anywhere;
  min-height:55px;
}

.lang-tab.active {
  background:var(--navy);
  color:white;
  border-color:var(--navy);
}

.lang-tab:disabled { opacity:.5; cursor:wait; }

.wa-mock {
  background:#E8F5F3;
  padding:13px;
  border-radius:12px;
  max-width:500px;
}

.wa-bubble {
  background:white;
  border-radius:10px;
  padding:12px;
  font-size:13px;
  white-space:pre-wrap;
  overflow-wrap:anywhere;
}

.review-note {
  margin-top:15px;
  background:#FEF2F2;
  border:1px solid #FECACA;
  color:#991B1B;
  padding:13px;
  border-radius:10px;
  font-size:12px;
}

.presenter {
  background:var(--panel);
  border:1px dashed var(--border);
  padding:23px;
  text-align:center;
  border-radius:12px;
  color:var(--gray);
  font-size:13px;
}

footer {
  border-top:1px solid var(--border);
  padding-top:20px;
  margin-top:30px;
  text-align:center;
  color:var(--gray);
  font-size:12px;
}

[hidden] { display:none !important; }

@media(max-width:600px) {
  .wrap { padding:22px 12px 45px; }
  .card { padding:17px 13px; }
  .stages { gap:3px; }
  .stage { padding:8px 2px; }
  .stage-label { font-size:9px; }
  h1 { font-size:22px; }
}
</style>
</head>

<body>
<div class="wrap">

<header>
  <div class="mark">TB</div>
  <div>
    <h1>TruthBridge AI</h1>
    <p class="tagline">Ask questions. Explore evidence. Understand the facts.</p>
  </div>
</header>

<div class="badge">Browser AI · No paid AI API key · Web research</div>

<div class="stages">
  <div class="stage"><div class="stage-num">1</div><div class="stage-label">Ask</div></div>
  <div class="stage"><div class="stage-num">2</div><div class="stage-label">Research</div></div>
  <div class="stage"><div class="stage-num">3</div><div class="stage-label">Answer</div></div>
  <div class="stage"><div class="stage-num">4</div><div class="stage-label">Languages</div></div>
  <div class="stage"><div class="stage-num">5</div><div class="stage-label">Review</div></div>
</div>

<section class="card">
  <h2>Ask TruthBridge AI</h2>

  <textarea id="questionInput" maxlength="2000"
    placeholder="Ask anything: Who sang Smooth Criminal? Who is Michael Jackson? Is a news report true?"></textarea>

  <div class="samples">
    <button type="button" class="sample-btn"
      data-question="Who sang the song Smooth Criminal?">
      Who sang Smooth Criminal?
    </button>

    <button type="button" class="sample-btn"
      data-question="Who is Michael Jackson?">
      Who is Michael Jackson?
    </button>

    <button type="button" class="sample-btn"
      data-question="What is the capital of Nigeria?">
      Capital of Nigeria?
    </button>

    <button type="button" class="sample-btn"
      data-question="Is it true that a community in Katsina was attacked yesterday?">
      Check a news claim
    </button>
  </div>

  <button type="button" class="submit-btn" id="askBtn">
    Ask TruthBridge AI
  </button>

  <div id="statusText" class="status" role="status" aria-live="polite">
    Enter a question and tap Ask. The app will search for useful information before generating an answer.
  </div>

  <div id="errorBox" class="error-box" hidden></div>
</section>

<div id="results" hidden>

  <section class="card">
    <div id="modePill" class="mode-pill">GENERAL QUESTION</div>
    <h2 id="answerHeading">TruthBridge AI's Answer</h2>

    <div id="answerBox" class="answer-box"></div>

    <div id="factCheckArea" hidden>
      <h2 style="margin-top:20px">Claim assessment</h2>
      <div class="verdict-row">
        <span id="verdictPill" class="verdict-pill unverified">Unverified</span>
        <span id="verdictNote" class="small-note"></span>
      </div>
    </div>

    <div id="limitationsBox" class="notice" hidden></div>
  </section>

  <section class="card">
    <h2>Sources and references</h2>
    <p class="tagline">Open the original pages to check the information yourself.</p>
    <div id="sourcesList" class="sources"></div>
    <div id="sourceNote" class="small-note"></div>
  </section>

  <section class="card">
    <h2>Multilingual answer</h2>

    <div class="lang-tabs">
      <button type="button" class="lang-tab active" data-lang="en">English</button>
      <button type="button" class="lang-tab" data-lang="ha">Hausa</button>
      <button type="button" class="lang-tab" data-lang="fr">French</button>
      <button type="button" class="lang-tab" data-lang="ar">Arabic</button>
      <button type="button" class="lang-tab" data-lang="ja">Japanese</button>
    </div>

    <div id="translatedBox" class="script-box" style="margin-top:14px"></div>
    <div id="languageStatus" class="small-note">
      Select a language to generate a version of the answer.
    </div>
  </section>

  <section class="card">
    <h2>Shareable summary</h2>
    <div class="wa-mock">
      <div id="shareBox" class="wa-bubble"></div>
    </div>
    <button type="button" class="submit-btn" id="copyBtn">
      Copy answer
    </button>
    <div id="copyStatus" class="small-note"></div>
  </section>

  <section class="card">
    <h2>Responsible information</h2>
    <div id="reviewNote" class="review-note">
      AI-generated information may contain errors. Check important facts against reliable original sources.
    </div>
  </section>

</div>

<footer>TruthBridge AI — built by CapacityHub</footer>
</div>

<script type="module">
'use strict';

/*
 * TruthBridge AI
 *
 * Modes:
 * 1. General question answering
 * 2. Cautious claim investigation
 *
 * The application searches public sources first.
 * The local model is used without a paid AI API key.
 * If local AI fails, available search evidence is still shown.
 */

const MODEL_ID = 'Llama-3.2-1B-Instruct-q4f16_1-MLC';

const LANGS = {
  en: 'English',
  ha: 'Hausa',
  fr: 'French',
  ar: 'Arabic',
  ja: 'Japanese'
};

const $ = id => document.getElementById(id);

const input = $('questionInput');
const askBtn = $('askBtn');
const status = $('statusText');
const errorBox = $('errorBox');
const results = $('results');

let engine = null;
let enginePromise = null;
let busy = false;
let requestNumber = 0;
let activeData = null;
let activeLanguage = 'en';
let languageBusy = false;
let inferenceQueue = Promise.resolve();

function setStatus(message) {
  status.textContent = message;
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = '';
  errorBox.hidden = true;
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

function detectMode(question) {
  const q = question.toLowerCase();

  const patterns = [
    /\bis it true\b/,
    /\bis this true\b/,
    /\bis this real\b/,
    /\bfact.?check\b/,
    /\bverify this\b/,
    /\bverify whether\b/,
    /\bcan you verify\b/,
    /\bcheck this claim\b/,
    /\bcheck whether\b/,
    /\bdebunk\b/,
    /\bmisinformation\b/,
    /\bdisinformation\b/,
    /\bhoax\b/,
    /\brumou?r\b/,
    /\bwhatsapp message\b/,
    /\bclaim(s|ed)? that\b/,
    /\bdid .{2,100}\b(happen|occur|attack|kill|arrest|ban|announce|declare)\b/,
    /\bhas .{2,100}\b(happened|occurred|attacked|killed|arrested|announced)\b/,
    /\bwhat happened (today|yesterday|last night|this morning|this week)\b/,
    /\bis it confirmed\b/,
    /\bconfirm(ed)?\b.*\b(news|report|incident|attack)\b/,
    /\btrue or false\b/
  ];

  return patterns.some(pattern => pattern.test(q))
    ? 'factcheck'
    : 'general';
}

function sensitiveClaim(text) {
  return /\b(attack|attacked|killed|violence|terror|bomb|kidnap|security|police|soldier|outbreak|disease|epidemic|vaccine|contracept|infertil|rape|assault|massacre|gunmen|explosion|death|dead|abduct|accused|injured|shooting|war|medicine|drug)\b/i.test(text);
}

function cleanText(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* -------------------------------------------------
   LOCAL AI
------------------------------------------------- */

async function getEngine() {
  if (engine) return engine;
  if (enginePromise) return enginePromise;

  enginePromise = (async () => {
    setStatus('Loading the browser AI library...');

    if (!navigator.gpu) {
      throw new Error(
        'This browser does not support WebGPU. Search results can still be shown, but local AI generation is unavailable here.'
      );
    }

    const mlc = await import('https://esm.run/@mlc-ai/web-llm');

    const created = await mlc.CreateMLCEngine(MODEL_ID, {
      initProgressCallback: progress => {
        if (progress?.text) {
          setStatus('Preparing local AI: ' + progress.text);
        }
      }
    });

    engine = created;
    return created;
  })();

  try {
    return await enginePromise;
  } catch (err) {
    engine = null;
    enginePromise = null;
    throw err;
  }
}

function runAI(messages, maxTokens = 500) {
  const task = inferenceQueue.then(async () => {
    const ai = await getEngine();

    const response = await ai.chat.completions.create({
      messages,
      temperature: 0.15,
      max_tokens: maxTokens
    });

    const content = response.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('The local AI returned an empty response.');
    }

    return content;
  });

  inferenceQueue = task.catch(() => {});
  return task;
}

function parseJSON(text) {
  const cleaned = String(text)
    .replace(/```json/gi, '')
    .replace(/```/g, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (_) {
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');

    if (start >= 0 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1));
    }

    throw new Error('The AI response could not be parsed.');
  }
}

/* -------------------------------------------------
   SEARCH
------------------------------------------------- */

async function searchWikipedia(question) {
  const url =
    'https://en.wikipedia.org/w/api.php' +
    '?action=query' +
    '&generator=search' +
    '&gsrsearch=' + encodeURIComponent(question) +
    '&gsrnamespace=0' +
    '&gsrlimit=5' +
    '&prop=extracts%7Cinfo' +
    '&exintro=1' +
    '&explaintext=1' +
    '&exchars=1800' +
    '&inprop=url' +
    '&format=json' +
    '&formatversion=2' +
    '&origin=*';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Wikipedia search returned HTTP ' + response.status);
  }

  const data = await response.json();
  const pages = data.query?.pages || [];

  return pages.map(page => ({
    title: page.title || 'Wikipedia reference',
    url: page.fullurl ||
      'https://en.wikipedia.org/wiki/' +
      encodeURIComponent((page.title || '').replace(/ /g, '_')),
    domain: 'Wikipedia',
    date: '',
    snippet: cleanText(page.extract || ''),
    kind: 'Background reference'
  })).filter(page => page.url && page.title);
}

async function searchGdelt(question) {
  const words = question
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2)
    .slice(0, 10)
    .join(' ');

  if (!words) return [];

  const url =
    'https://api.gdeltproject.org/api/v2/doc/doc' +
    '?query=' + encodeURIComponent(words) +
    '&mode=ArtList' +
    '&format=json' +
    '&maxrecords=6' +
    '&timespan=7d' +
    '&sort=HybridRel';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('News search returned HTTP ' + response.status);
  }

  const data = await response.json();

  return (data.articles || []).map(article => ({
    title: article.title || article.domain || 'News article',
    url: article.url || '',
    domain: article.domain || '',
    date: article.seendate || '',
    snippet: '',
    kind: 'News discovery'
  })).filter(article => /^https?:\/\//i.test(article.url));
}

async function searchSources(question, mode) {
  const notes = [];
  let wikipedia = [];
  let news = [];

  /*
   * General questions often benefit most from encyclopedic
   * background information. Current-event questions prioritize news.
   */
  if (mode === 'factcheck') {
    try {
      news = await searchGdelt(question);
    } catch (err) {
      notes.push('News search unavailable: ' + err.message);
    }

    try {
      wikipedia = await searchWikipedia(question);
    } catch (err) {
      notes.push('Background search unavailable: ' + err.message);
    }
  } else {
    try {
      wikipedia = await searchWikipedia(question);
    } catch (err) {
      notes.push('Background search unavailable: ' + err.message);
    }

    /*
     * Search news too when the question concerns recent events.
     */
    if (/\b(today|yesterday|latest|recent|current|this week|last night|breaking|2026|2025)\b/i.test(question)) {
      try {
        news = await searchGdelt(question);
      } catch (err) {
        notes.push('News search unavailable: ' + err.message);
      }
    }
  }

  const all = [...wikipedia, ...news];
  const seen = new Set();

  const sources = all.filter(source => {
    if (!source.url || seen.has(source.url)) return false;
    seen.add(source.url);
    return true;
  }).slice(0, 9);

  return { sources, notes };
}

/* -------------------------------------------------
   ANSWER GENERATION
------------------------------------------------- */

function sourcesForPrompt(sources) {
  if (!sources.length) {
    return 'No external search sources were retrieved.';
  }

  return sources.map((source, index) =>
    `${index + 1}. ${source.title}\n` +
    `URL: ${source.url}\n` +
    `Type: ${source.kind}\n` +
    `Date: ${source.date || 'Not provided'}\n` +
    `Available source text: ${source.snippet || 'No article text was retrieved.'}`
  ).join('\n\n');
}

function fallbackGeneral(question, sources) {
  if (!sources.length) {
    return {
      answer:
        'I could not retrieve supporting web references, and the local AI did not provide an answer. Please check your internet connection and try again. I do not want to guess.',
      limitations:
        'No source-backed answer was available. This does not mean that the question has no answer.'
    };
  }

  const useful = sources
    .filter(source => source.snippet)
    .slice(0, 3);

  if (!useful.length) {
    return {
      answer:
        'I found reference links, but could not retrieve enough article text to answer this question confidently. Open the sources below to read them directly.',
      limitations:
        'Search-result titles alone are not enough to establish an accurate answer.'
    };
  }

  return {
    answer:
      'I could not complete AI-generated answering, but I retrieved the following source excerpts that may help answer your question:\n\n' +
      useful.map(source =>
        source.title + '\n' + source.snippet
      ).join('\n\n'),
    limitations:
      'This is a source-excerpt fallback, not an AI-generated answer. Check the original pages.'
  };
}

function fallbackFactCheck(question, sources) {
  return {
    answer: sources.length
      ? 'I found some potentially relevant sources, but I could not complete the AI assessment. The existence of these search results does not confirm the claim.'
      : 'I could not retrieve external sources to assess this claim. I cannot confirm whether it is true or false.',
    verdict: 'Unverified',
    rationale: 'An evidence-based conclusion has not been established.',
    limitations:
      'The available search may be incomplete. Review original reporting and relevant official sources before sharing the claim.',
    humanReviewRequired: sensitiveClaim(question)
  };
}

async function generateAnswer(question, mode, sources) {
  const sourceText = sourcesForPrompt(sources);

  if (mode === 'general') {
    const messages = [
      {
        role: 'system',
        content:
          'You are TruthBridge AI, a helpful general-purpose question-answering assistant. ' +
          'Answer the user’s actual question directly and naturally. ' +
          'Do not automatically treat ordinary questions as misinformation claims. ' +
          'For who, what, when, where, why, and how questions, provide a direct answer first, followed by useful explanation. ' +
          'Use the supplied reference excerpts when relevant. ' +
          'Do not invent details or pretend that you read an article when only its title is supplied. ' +
          'If the sources do not establish a fact, distinguish your general knowledge from what the sources establish. ' +
          'For current events, be careful about dates and uncertainty. ' +
          'Return valid JSON only with keys "answer" and "limitations". ' +
          'Answer in English.'
      },
      {
        role: 'user',
        content:
          'QUESTION:\n' + question +
          '\n\nSEARCH RESULTS AND AVAILABLE EXCERPTS:\n' + sourceText +
          '\n\nAnswer the question directly. Use a concise but informative answer. ' +
          'If a person, song, place, or event is being asked about, identify it clearly. ' +
          'Do not return a fact-check verdict unless the user actually asks for verification.'
      }
    ];

    const content = await runAI(messages, 500);
    const parsed = parseJSON(content);

    return {
      answer: String(parsed.answer || ''),
      limitations: String(parsed.limitations || '')
    };
  }

  const messages = [
    {
      role: 'system',
      content:
        'You are TruthBridge AI, a cautious fact-checking assistant. ' +
        'Assess claims only using available evidence and established knowledge. ' +
        'Search-result titles are not proof, and article content may be unavailable. ' +
        'Do not invent facts, quotations, dates, or official statements. ' +
        'Use Supported only when evidence directly supports the claim. ' +
        'Use Disputed only when evidence directly contradicts it. ' +
        'Otherwise use Unverified. ' +
        'Clearly explain limitations. ' +
        'Return valid JSON only with keys "answer", "verdict", "rationale", "limitations", "humanReviewRequired".'
    },
    {
      role: 'user',
      content:
        'CLAIM OR QUESTION:\n' + question +
        '\n\nSEARCH RESULTS:\n' + sourceText +
        '\n\nExplain what the evidence actually establishes. ' +
        'Do not confuse lack of evidence with proof that the claim is false. ' +
        'Do not present allegations about private individuals as fact.'
    }
  ];

  const content = await runAI(messages, 500);
  const parsed = parseJSON(content);

  const allowed = ['Supported', 'Disputed', 'Unverified'];

  return {
    answer: String(parsed.answer || parsed.rationale || ''),
    verdict: allowed.includes(parsed.verdict) ? parsed.verdict : 'Unverified',
    rationale: String(parsed.rationale || 'The evidence is inconclusive.'),
    limitations: String(parsed.limitations || 'The available evidence may be incomplete.'),
    humanReviewRequired:
      Boolean(parsed.humanReviewRequired) || sensitiveClaim(question)
  };
}

/* -------------------------------------------------
   DISPLAY
------------------------------------------------- */

function renderSources(sources) {
  const container = $('sourcesList');
  container.replaceChildren();

  if (!sources.length) {
    const message = document.createElement('div');
    message.className = 'source';
    message.textContent =
      'No external sources were retrieved. Check your connection and try again.';
    container.appendChild(message);
    return;
  }

  sources.forEach((source, index) => {
    const card = document.createElement('div');
    card.className = 'source';

    const title = document.createElement('strong');
    title.textContent = `${index + 1}. ${source.title}`;

    const link = document.createElement('a');
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open original source';

    const metadata = document.createElement('p');
    metadata.textContent =
      `${source.domain || 'External reference'} · ${source.date || 'Date not provided'} · ${source.kind}`;

    card.append(title, document.createElement('br'), link, metadata);

    if (source.snippet) {
      const excerpt = document.createElement('p');
      excerpt.textContent = source.snippet;
      card.appendChild(excerpt);
    }

    container.appendChild(card);
  });
}

function setVerdict(verdict) {
  const pill = $('verdictPill');
  const value = ['Supported', 'Disputed', 'Unverified'].includes(verdict)
    ? verdict
    : 'Unverified';

  pill.textContent = value;
  pill.className = 'verdict-pill ' + (
    value === 'Supported' ? 'confirmed' :
    value === 'Disputed' ? 'disputed' :
    'unverified'
  );
}

function renderAnswer(data, mode, sources, notes) {
  $('modePill').textContent =
    mode === 'factcheck' ? 'FACT-CHECKING MODE' : 'GENERAL QUESTION';

  $('answerHeading').textContent =
    mode === 'factcheck' ? 'Evidence Assessment' : 'Direct Answer';

  $('answerBox').textContent =
    data.answer || 'No answer was generated. Please try again.';

  const factCheckArea = $('factCheckArea');

  if (mode === 'factcheck') {
    factCheckArea.hidden = false;
    setVerdict(data.verdict || 'Unverified');
    $('verdictNote').textContent = data.rationale || '';
  } else {
    factCheckArea.hidden = true;
  }

  const limitationMessages = [];

  if (data.limitations) {
    limitationMessages.push(data.limitations);
  }

  if (notes.length) {
    limitationMessages.push(notes.join(' '));
  }

  $('limitationsBox').textContent = limitationMessages.join('\n\n');
  $('limitationsBox').hidden = limitationMessages.length === 0;

  renderSources(sources);

  $('sourceNote').textContent = sources.length
    ? 'These links are references to inspect, not automatic proof that every statement is correct.'
    : 'No external source links were retrieved.';

  $('shareBox').textContent =
    'TruthBridge AI\n\n' +
    (mode === 'factcheck' ? 'Evidence assessment:\n' : 'Answer:\n') +
    (data.answer || '') +
    (mode === 'factcheck'
      ? '\n\nAssessment: ' + (data.verdict || 'Unverified')
      : '') +
    '\n\nPlease review the original sources before sharing important claims.';

  $('reviewNote').textContent =
    mode === 'factcheck' && data.humanReviewRequired
      ? 'HUMAN REVIEW REQUIRED. This subject may involve health, violence, security, or identifiable people. Do not publish a claim as confirmed until a qualified reviewer checks the original evidence.'
      : 'AI-generated information can be wrong or incomplete. For important claims, review the original sources. This app does not independently prove truth.';

  $('translatedBox').textContent = data.answer || '';
  $('languageStatus').textContent =
    'English answer displayed. Select another language to request a translation.';

  $('copyStatus').textContent = '';
  results.hidden = false;
}

/* -------------------------------------------------
   MAIN QUESTION HANDLER
------------------------------------------------- */

async function askTruthBridge() {
  if (busy) return;

  const question = input.value.trim();

  if (!question) {
    showError('Please type a question first.');
    input.focus();
    return;
  }

  busy = true;
  const id = ++requestNumber;
  const mode = detectMode(question);

  askBtn.disabled = true;
  askBtn.textContent = 'Researching...';
  clearError();
  results.hidden = true;

  activeData = {
    question,
    mode,
    sources: [],
    notes: [],
    answerData: null,
    translations: {}
  };

  try {
    setStatus('Searching public sources...');

    const searchResult = await searchSources(question, mode);

    if (id !== requestNumber) return;

    activeData.sources = searchResult.sources;
    activeData.notes = searchResult.notes;

    /*
     * Show a useful fallback before loading the local model.
     * A failed model download will not hide the search results.
     */
    let fallback = mode === 'factcheck'
      ? fallbackFactCheck(question, searchResult.sources)
      : fallbackGeneral(question, searchResult.sources);

    activeData.answerData = fallback;
    activeData.translations.en = fallback.answer;

    renderAnswer(
      fallback,
      mode,
      searchResult.sources,
      searchResult.notes
    );

    setStatus(
      `Retrieved ${searchResult.sources.length} source(s). Preparing the AI answer...`
    );

    try {
      const answer = await generateAnswer(
        question,
        mode,
        searchResult.sources
      );

      if (id !== requestNumber) return;

      activeData.answerData = answer;
      activeData.translations.en = answer.answer;

      renderAnswer(
        answer,
        mode,
        searchResult.sources,
        searchResult.notes
      );

      setStatus(
        'Answer ready. Check the references for important information.'
      );
    } catch (aiError) {
      if (id !== requestNumber) return;

      setStatus(
        'Search completed, but local AI could not generate the answer.'
      );

      showError(
        'Local AI error: ' + (aiError.message || String(aiError)) +
        '\n\nThe displayed answer is a fallback based on available sources, not a completed AI answer. You can open the references below. Check browser compatibility if this problem continues.'
      );
    }
  } catch (err) {
    showError(
      'The research process encountered an error: ' +
      (err.message || String(err))
    );

    setStatus('Research stopped. Please check your internet connection and try again.');
  } finally {
    busy = false;
    askBtn.disabled = false;
    askBtn.textContent = 'Ask TruthBridge AI';
  }
}

/* -------------------------------------------------
   LANGUAGE GENERATION
------------------------------------------------- */

function setLanguageActive(language) {
  activeLanguage = language;

  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.lang === language);
  });
}

async function changeLanguage(language) {
  if (!LANGS[language] || !activeData || busy || languageBusy) return;

  if (language === 'en') {
    setLanguageActive('en');
    $('translatedBox').textContent =
      activeData.translations.en || activeData.answerData?.answer || '';
    $('languageStatus').textContent = 'Original English answer.';
    return;
  }

  if (activeData.translations[language]) {
    setLanguageActive(language);
    $('translatedBox').textContent = activeData.translations[language];
    $('languageStatus').textContent = 'Previously generated translation.';
    return;
  }

  languageBusy = true;

  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.disabled = true;
  });

  setLanguageActive(language);
  $('languageStatus').textContent =
    'Generating ' + LANGS[language] + ' translation...';

  try {
    const original = activeData.answerData?.answer || '';

    const messages = [
      {
        role: 'system',
        content:
          'Translate the supplied text accurately into ' + LANGS[language] + '. ' +
          'Preserve names, dates, facts, uncertainty, and warnings. ' +
          'Do not add new factual claims. Return only the translated text.'
      },
      {
        role: 'user',
        content: original
      }
    ];

    const translated = await runAI(messages, 450);

    activeData.translations[language] = translated.trim();

    $('translatedBox').textContent = translated.trim();
    $('languageStatus').textContent =
      'Machine-generated ' + LANGS[language] +
      ' translation. Check it before publishing.';
  } catch (err) {
    $('translatedBox').textContent =
      'The translation could not be generated because local AI is unavailable. The original English answer is still available.';
    $('languageStatus').textContent = err.message;
  } finally {
    languageBusy = false;

    document.querySelectorAll('.lang-tab').forEach(tab => {
      tab.disabled = false;
    });
  }
}

/* -------------------------------------------------
   EVENTS
------------------------------------------------- */

askBtn.addEventListener('click', event => {
  event.preventDefault();
  askTruthBridge();
});

input.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    event.preventDefault();
    askTruthBridge();
  }
});

document.querySelectorAll('.sample-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    input.value = btn.dataset.question || '';
    clearError();
    input.focus();
  });
});

document.querySelectorAll('.lang-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    changeLanguage(tab.dataset.lang);
  });
});

$('copyBtn').addEventListener('click', async () => {
  const text = $('shareBox').textContent;

  try {
    await navigator.clipboard.writeText(text);
    $('copyStatus').textContent = 'Answer copied.';
  } catch (_) {
    const temporary = document.createElement('textarea');
    temporary.value = text;
    document.body.appendChild(temporary);
    temporary.select();

    const succeeded = document.execCommand('copy');
    temporary.remove();

    $('copyStatus').textContent = succeeded
      ? 'Answer copied.'
      : 'Copy was blocked by the browser. Select and copy the text manually.';
  }
});

window.addEventListener('error', event => {
  if (event.message) {
    showError('Browser error: ' + event.message);
  }
});

window.addEventListener('unhandledrejection', event => {
  const reason = event.reason;
  showError(
    'Unexpected error: ' +
    (reason?.message || String(reason || 'Unknown error'))
  );
});

setStatus(
  'Ready. Ask a general question or request a fact-check. Search runs before local AI generation.'
);
</script>

</body>
</html>