/* ToolPilot — Shared Components & Utilities */

const SITE = {
  name: 'ToolPilot',
  tagline: 'Free online tools — fast, private, no signup.',
  domain: 'cyril-netizen.github.io/toolpailot',
  tools: [
    { slug: 'json-formatter', name: 'JSON Formatter', icon: '{ }', desc: 'Format, validate & minify JSON data instantly.' },
    { slug: 'password-generator', name: 'Password Generator', icon: '🔐', desc: 'Generate strong, random passwords with custom rules.' },
    { slug: 'word-counter', name: 'Word Counter', icon: '🔢', desc: 'Count words, characters, sentences & reading time.' },
    { slug: 'base64-converter', name: 'Base64 Converter', icon: '🔄', desc: 'Encode and decode Base64 strings instantly.' },
    { slug: 'case-converter', name: 'Case Converter', icon: 'Aa', desc: 'Convert text between uppercase, lowercase, title case & more.' },
    { slug: 'lorem-ipsum', name: 'Lorem Ipsum Generator', icon: '📝', desc: 'Generate placeholder text for your designs.' },
    { slug: 'color-palette', name: 'Color Palette', icon: '🎨', desc: 'Generate beautiful color palettes for your projects.' },
    { slug: 'uuid-generator', name: 'UUID Generator', icon: '#', desc: 'Generate random UUIDs (v4) in bulk.' },
    { slug: 'regex-tester', name: 'Regex Tester', icon: '.*', desc: 'Test and debug regular expressions with real-time highlighting.' },
    { slug: 'url-encoder', name: 'URL Encoder/Decoder', icon: '%', desc: 'Encode and decode URLs and query strings instantly.' },
    { slug: 'hash-generator', name: 'Hash Generator', icon: '🔒', desc: 'Generate MD5, SHA-1, SHA-256 & SHA-512 hashes.' },
    { slug: 'timestamp-converter', name: 'Timestamp Converter', icon: '⏱️', desc: 'Convert between Unix timestamps and human-readable dates.' },
    { slug: 'markdown-preview', name: 'Markdown Preview', icon: '📄', desc: 'Preview Markdown as HTML in real time.' },
    { slug: 'diff-checker', name: 'Diff Checker', icon: '↔️', desc: 'Compare two texts and highlight differences.' },
    { slug: 'css-minifier', name: 'CSS Minifier', icon: '🎯', desc: 'Minify and beautify CSS code instantly.' },
    { slug: 'js-minifier', name: 'JS Minifier', icon: '⚡', desc: 'Minify and beautify JavaScript code instantly.' },
    { slug: 'html-entities', name: 'HTML Entities', icon: '&lt;', desc: 'Encode and decode HTML entities and special characters.' },
    { slug: 'slug-generator', name: 'Slug Generator', icon: '🔗', desc: 'Generate SEO-friendly URL slugs from text.' },
    { slug: 'hex-rgb-converter', name: 'Hex/RGB Converter', icon: '🌈', desc: 'Convert between Hex, RGB, and HSL color formats.' },
    { slug: 'line-tools', name: 'Line Tools', icon: '📋', desc: 'Sort, deduplicate, reverse & count lines of text.' },
    { slug: 'qr-code-generator', name: 'QR Code Generator', icon: '📱', desc: 'Generate QR codes for URLs, text & data instantly.' },
    { slug: 'json-csv-converter', name: 'JSON/CSV Converter', icon: '📊', desc: 'Convert between JSON and CSV formats instantly.' },
    { slug: 'jwt-decoder', name: 'JWT Decoder', icon: '🔑', desc: 'Decode and inspect JWT tokens instantly.' },
    { slug: 'cron-generator', name: 'Cron Generator', icon: '⏰', desc: 'Build and decode cron expressions visually.' },
    { slug: 'css-gradient-generator', name: 'CSS Gradient Generator', icon: '🎨', desc: 'Create beautiful CSS gradients with live preview.' },
    { slug: 'yaml-json-converter', name: 'YAML/JSON Converter', icon: '🔄', desc: 'Convert between YAML and JSON formats.' },
    { slug: 'html-to-markdown', name: 'HTML to Markdown', icon: '📝', desc: 'Convert HTML code to clean Markdown.' },
    { slug: 'meta-tag-generator', name: 'Meta Tag Generator', icon: '🏷️', desc: 'Generate SEO meta tags for your web pages.' },
    { slug: 'chmod-calculator', name: 'Chmod Calculator', icon: '🔧', desc: 'Calculate Linux file permissions visually.' },
    { slug: 'svg-to-png', name: 'SVG to PNG', icon: '🖼️', desc: 'Convert SVG images to PNG format.' },
  ]
};

/* ---- Theme ---- */
function initTheme() {
  const saved = localStorage.getItem('tp-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('tp-theme', next);
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

/* ---- Layout Injection ---- */
function getBaseUrl() {
  const path = window.location.pathname;
  if (path.includes('/tools/') || path.includes('/blog/') || path.includes('/categories/')) return '..';
  return '.';
}

function isFrenchPage() {
  return window.location.pathname.includes('/fr/');
}

function getLangSwitchLink() {
  const base = getBaseUrl();
  if (isFrenchPage()) {
    // FR → EN: go up from /fr/ to root
    return { label: 'EN', href: base + '/', title: 'English version' };
  } else {
    // EN → FR: relative link to /fr/
    return { label: 'FR', href: base + '/fr/', title: 'Version française' };
  }
}

function injectHeader() {
  const base = getBaseUrl();
  const theme = initTheme();
  const lang = getLangSwitchLink();
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container">
      <a href="${base}/" class="logo">⚡ <span>Tool</span>Pilot</a>
      <div class="header-actions">
        <a href="${base}/#tools" style="font-size:.9rem;color:var(--text-muted)">All Tools</a>
        <a href="${base}/blog/" style="font-size:.9rem;color:var(--text-muted)">Blog</a>
        <a href="${lang.href}" style="font-size:.9rem;color:var(--text-muted)" title="${lang.title}">${lang.label}</a>
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">${theme === 'dark' ? '☀️' : '🌙'}</button>
      </div>
    </div>`;
  document.body.prepend(header);
}

function injectFooter() {
  const base = getBaseUrl();
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-links">
        <a href="${base}/">Home</a>
        <a href="${base}/#tools">All Tools</a>
        <a href="${base}/blog/">Blog</a>
        <a href="${base}/about.html">About</a>
        <a href="${base}/privacy.html">Privacy</a>
        <a href="https://buymeacoffee.com/toolpailot" target="_blank" rel="noopener">☕ Buy Me a Coffee</a>
      </div>
      <p>&copy; ${new Date().getFullYear()} ToolPilot — Free online tools. All processing happens in your browser.</p>
    </div>`;
  document.body.append(footer);
}

function injectAdSlot(target, id) {
  const slot = document.createElement('div');
  slot.className = 'ad-slot';
  slot.id = id || 'ad-' + Math.random().toString(36).slice(2, 8);
  slot.innerHTML = `<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-8551172612233720"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>`;
  if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) el.appendChild(slot);
  } else if (target) {
    target.appendChild(slot);
  }
  try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
  return slot;
}

/* ---- Utilities ---- */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => showToast('Copied!')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied!');
  });
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

function renderToolCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const base = getBaseUrl();
  const toolsPath = base === '.' ? 'tools/' : 'tools/';
  container.innerHTML = SITE.tools.map(t => `
    <a href="${base === '.' ? '' : '../'}tools/${t.slug}.html" class="card tool-card">
      <span class="icon">${t.icon}</span>
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
    </a>
  `).join('');
}

/* ---- AdSense ---- */
function injectAdSense() {
  if (document.querySelector('script[src*="adsbygoogle"]')) return; // already loaded
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551172612233720';
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

function initAdSlots() {
  document.querySelectorAll('ins.adsbygoogle').forEach(ins => {
    if (!ins.dataset.adsbygoogleStatus) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
    }
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  injectAdSense();
  injectHeader();
  injectFooter();
  // Initialize ad slots after a short delay to let AdSense script load
  setTimeout(initAdSlots, 1000);
});
