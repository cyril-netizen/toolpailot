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

/* ---- French translations for tool cards ---- */
const SITE_FR = {
  tools: {
    'json-formatter': { name: 'Formateur JSON', desc: 'Formatez, validez et minifiez vos données JSON instantanément.' },
    'password-generator': { name: 'Générateur de mots de passe', desc: 'Générez des mots de passe forts et aléatoires.' },
    'word-counter': { name: 'Compteur de mots', desc: 'Comptez mots, caractères, phrases et temps de lecture.' },
    'base64-converter': { name: 'Convertisseur Base64', desc: 'Encodez et décodez des chaînes Base64 instantanément.' },
    'case-converter': { name: 'Convertisseur de casse', desc: 'Convertissez entre majuscules, minuscules, titre et plus.' },
    'lorem-ipsum': { name: 'Générateur Lorem Ipsum', desc: 'Générez du texte de remplissage pour vos maquettes.' },
    'color-palette': { name: 'Palette de couleurs', desc: 'Générez de belles palettes de couleurs pour vos projets.' },
    'uuid-generator': { name: 'Générateur UUID', desc: 'Générez des UUIDs aléatoires (v4) en masse.' },
    'regex-tester': { name: "Testeur d'expressions régulières", desc: 'Testez et déboguez vos regex avec surlignage en temps réel.' },
    'url-encoder': { name: 'Encodeur/Décodeur URL', desc: 'Encodez et décodez les URLs instantanément.' },
    'hash-generator': { name: 'Générateur de hash', desc: 'Générez des hash MD5, SHA-1, SHA-256 et SHA-512.' },
    'timestamp-converter': { name: 'Convertisseur de timestamp', desc: 'Convertissez entre timestamps Unix et dates lisibles.' },
    'markdown-preview': { name: 'Aperçu Markdown', desc: 'Prévisualisez le Markdown en HTML en temps réel.' },
    'diff-checker': { name: 'Comparateur de texte', desc: 'Comparez deux textes et surlignez les différences.' },
    'css-minifier': { name: 'Minifieur CSS', desc: 'Minifiez et embellissez du code CSS instantanément.' },
    'js-minifier': { name: 'Minifieur JS', desc: 'Minifiez et embellissez du code JavaScript instantanément.' },
    'html-entities': { name: 'Entités HTML', desc: 'Encodez et décodez les entités HTML et caractères spéciaux.' },
    'slug-generator': { name: 'Générateur de slug', desc: 'Générez des slugs URL optimisés pour le SEO.' },
    'hex-rgb-converter': { name: 'Convertisseur Hex/RGB', desc: 'Convertissez entre les formats Hex, RGB et HSL.' },
    'line-tools': { name: 'Outils de lignes', desc: 'Triez, dédupliquez, inversez et comptez les lignes de texte.' },
    'qr-code-generator': { name: 'Générateur de QR code', desc: 'Générez des QR codes pour vos URLs et textes instantanément.' },
    'json-csv-converter': { name: 'Convertisseur JSON/CSV', desc: 'Convertissez entre les formats JSON et CSV instantanément.' },
    'jwt-decoder': { name: 'Décodeur JWT', desc: 'Décodez et inspectez les tokens JWT instantanément.' },
    'cron-generator': { name: 'Générateur Cron', desc: 'Créez et décodez des expressions cron visuellement.' },
    'css-gradient-generator': { name: 'Générateur de dégradés CSS', desc: 'Créez de beaux dégradés CSS avec aperçu en direct.' },
    'yaml-json-converter': { name: 'Convertisseur YAML/JSON', desc: 'Convertissez entre les formats YAML et JSON.' },
    'html-to-markdown': { name: 'HTML vers Markdown', desc: 'Convertissez du code HTML en Markdown propre.' },
    'meta-tag-generator': { name: 'Générateur de balises meta', desc: 'Générez des balises meta SEO pour vos pages web.' },
    'chmod-calculator': { name: 'Calculateur Chmod', desc: 'Calculez les permissions de fichiers Linux visuellement.' },
    'svg-to-png': { name: 'SVG vers PNG', desc: 'Convertissez des images SVG au format PNG.' },
  },
  nav: { allTools: 'Tous les outils', blog: 'Blog', home: 'Accueil', about: 'À propos', privacy: 'Confidentialité' },
  footer: 'Outils en ligne gratuits. Tout le traitement se fait dans votre navigateur.'
};

/* ---- Monetization: Affiliate & Pro-Tier Config ---- */
const TOOL_MONETIZATION = {
  'json-formatter': {
    affiliates: [
      { name: 'JetBrains IDEs', desc: 'Professional IDE with built-in JSON tools', url: 'https://www.jetbrains.com/?ref=toolpilot', icon: '🛠️' },
      { name: 'Postman', desc: 'API testing platform with advanced JSON support', url: 'https://www.postman.com/', icon: '📮' }
    ],
    pro: { text: 'Need real-time API testing & validation?', cta: 'Try Postman for free', url: 'https://www.postman.com/' }
  },
  'password-generator': {
    affiliates: [
      { name: 'Bitwarden', desc: 'Open-source password manager — free tier available', url: 'https://bitwarden.com/', icon: '🔐' },
      { name: 'NordPass', desc: 'Premium password manager by NordVPN', url: 'https://nordpass.com/', icon: '🛡️' }
    ],
    pro: { text: 'Need to securely store & share passwords?', cta: 'Try Bitwarden — free', url: 'https://bitwarden.com/' }
  },
  'word-counter': {
    affiliates: [
      { name: 'Grammarly', desc: 'AI writing assistant — grammar, tone & clarity', url: 'https://www.grammarly.com/', icon: '✍️' },
      { name: 'Hemingway Editor', desc: 'Make your writing bold and clear', url: 'https://hemingwayapp.com/', icon: '📖' }
    ],
    pro: { text: 'Need advanced grammar & readability checks?', cta: 'Try Grammarly for free', url: 'https://www.grammarly.com/' }
  },
  'base64-converter': {
    affiliates: [
      { name: 'Insomnia', desc: 'API client for REST & GraphQL', url: 'https://insomnia.rest/', icon: '🌙' },
      { name: 'Hoppscotch', desc: 'Open-source API development ecosystem', url: 'https://hoppscotch.io/', icon: '🦅' }
    ],
    pro: null
  },
  'case-converter': {
    affiliates: [
      { name: 'Grammarly', desc: 'AI writing assistant — grammar, tone & clarity', url: 'https://www.grammarly.com/', icon: '✍️' },
      { name: 'Notion', desc: 'All-in-one workspace for notes & docs', url: 'https://www.notion.so/', icon: '📓' }
    ],
    pro: null
  },
  'lorem-ipsum': {
    affiliates: [
      { name: 'Figma', desc: 'Collaborative design tool — free tier available', url: 'https://www.figma.com/', icon: '🎨' },
      { name: 'Canva', desc: 'Design anything — templates, presentations & more', url: 'https://www.canva.com/', icon: '🖌️' }
    ],
    pro: null
  },
  'color-palette': {
    affiliates: [
      { name: 'Figma', desc: 'Collaborative design tool — free tier available', url: 'https://www.figma.com/', icon: '🎨' },
      { name: 'Coolors Pro', desc: 'Advanced palette generation & export', url: 'https://coolors.co/pricing', icon: '🌈' }
    ],
    pro: { text: 'Need export to Figma, Adobe & unlimited palettes?', cta: 'Try Coolors Pro', url: 'https://coolors.co/pricing' }
  },
  'uuid-generator': {
    affiliates: [
      { name: 'Postman', desc: 'API testing with auto-generated UUIDs', url: 'https://www.postman.com/', icon: '📮' }
    ],
    pro: null
  },
  'regex-tester': {
    affiliates: [
      { name: 'JetBrains IDEs', desc: 'Built-in regex support with find & replace', url: 'https://www.jetbrains.com/?ref=toolpilot', icon: '🛠️' },
      { name: 'RegexBuddy', desc: 'Dedicated regex development tool', url: 'https://www.regexbuddy.com/', icon: '🧩' }
    ],
    pro: { text: 'Need regex debugging across languages?', cta: 'Try RegexBuddy', url: 'https://www.regexbuddy.com/' }
  },
  'url-encoder': {
    affiliates: [
      { name: 'Postman', desc: 'API platform with URL encoding built-in', url: 'https://www.postman.com/', icon: '📮' }
    ],
    pro: null
  },
  'hash-generator': {
    affiliates: [
      { name: 'NordVPN', desc: 'Encrypt your connection — 30-day money back', url: 'https://nordvpn.com/', icon: '🛡️' },
      { name: 'Bitwarden', desc: 'Secure password manager with hash verification', url: 'https://bitwarden.com/', icon: '🔐' }
    ],
    pro: null
  },
  'timestamp-converter': {
    affiliates: [
      { name: 'Toggl Track', desc: 'Simple time tracking for teams', url: 'https://toggl.com/track/', icon: '⏱️' }
    ],
    pro: null
  },
  'markdown-preview': {
    affiliates: [
      { name: 'Notion', desc: 'All-in-one Markdown-friendly workspace', url: 'https://www.notion.so/', icon: '📓' },
      { name: 'Obsidian', desc: 'Knowledge base with Markdown & backlinks', url: 'https://obsidian.md/', icon: '💎' }
    ],
    pro: { text: 'Need a full Markdown workspace with backlinks?', cta: 'Try Obsidian — free', url: 'https://obsidian.md/' }
  },
  'diff-checker': {
    affiliates: [
      { name: 'Beyond Compare', desc: 'Professional file & folder comparison tool', url: 'https://www.scootersoftware.com/', icon: '📊' },
      { name: 'GitHub', desc: 'Code hosting with built-in diff & review', url: 'https://github.com/', icon: '🐙' }
    ],
    pro: { text: 'Need folder comparison & 3-way merge?', cta: 'Try Beyond Compare', url: 'https://www.scootersoftware.com/' }
  },
  'css-minifier': {
    affiliates: [
      { name: 'Cloudflare', desc: 'Free CDN with auto CSS minification', url: 'https://www.cloudflare.com/', icon: '☁️' },
      { name: 'Hostinger', desc: 'Fast hosting from €2.99/mo — free domain included', url: 'https://www.hostinger.com/', icon: '🌐' }
    ],
    pro: { text: 'Need automatic minification on deploy?', cta: 'Try Cloudflare — free tier', url: 'https://www.cloudflare.com/' }
  },
  'js-minifier': {
    affiliates: [
      { name: 'Cloudflare', desc: 'Free CDN with auto JS minification', url: 'https://www.cloudflare.com/', icon: '☁️' },
      { name: 'Vercel', desc: 'Deploy frontend apps with auto optimization', url: 'https://vercel.com/', icon: '▲' }
    ],
    pro: { text: 'Need auto-minification in your CI/CD pipeline?', cta: 'Try Vercel — free tier', url: 'https://vercel.com/' }
  },
  'html-entities': {
    affiliates: [
      { name: 'VS Code', desc: 'Free code editor with HTML entity support', url: 'https://code.visualstudio.com/', icon: '💻' }
    ],
    pro: null
  },
  'slug-generator': {
    affiliates: [
      { name: 'Ahrefs', desc: 'SEO toolset — keyword research & site audit', url: 'https://ahrefs.com/', icon: '📈' },
      { name: 'Hostinger', desc: 'Fast hosting from €2.99/mo — free domain included', url: 'https://www.hostinger.com/', icon: '🌐' }
    ],
    pro: { text: 'Need full SEO audit & keyword research?', cta: 'Try Ahrefs', url: 'https://ahrefs.com/' }
  },
  'hex-rgb-converter': {
    affiliates: [
      { name: 'Figma', desc: 'Collaborative design tool — free tier available', url: 'https://www.figma.com/', icon: '🎨' }
    ],
    pro: null
  },
  'line-tools': {
    affiliates: [
      { name: 'Sublime Text', desc: 'Sophisticated text editor for code & markup', url: 'https://www.sublimetext.com/', icon: '📝' }
    ],
    pro: null
  },
  'qr-code-generator': {
    affiliates: [
      { name: 'QR Code Monkey', desc: 'Custom QR codes with logos & colors — free', url: 'https://www.qrcode-monkey.com/', icon: '🐵' },
      { name: 'Beaconstac', desc: 'Dynamic QR codes with analytics & tracking', url: 'https://www.beaconstac.com/', icon: '📊' }
    ],
    pro: { text: 'Need trackable QR codes with analytics?', cta: 'Try Beaconstac', url: 'https://www.beaconstac.com/' }
  },
  'json-csv-converter': {
    affiliates: [
      { name: 'Airtable', desc: 'Spreadsheet-database hybrid — free tier', url: 'https://airtable.com/', icon: '📊' }
    ],
    pro: null
  },
  'jwt-decoder': {
    affiliates: [
      { name: 'Auth0', desc: 'Identity platform — free up to 7,500 users', url: 'https://auth0.com/', icon: '🔑' },
      { name: 'Postman', desc: 'API testing with JWT auto-handling', url: 'https://www.postman.com/', icon: '📮' }
    ],
    pro: { text: 'Need full JWT auth management?', cta: 'Try Auth0 — free tier', url: 'https://auth0.com/' }
  },
  'cron-generator': {
    affiliates: [
      { name: 'Cronitor', desc: 'Cron job monitoring & alerting', url: 'https://cronitor.io/', icon: '📟' }
    ],
    pro: { text: 'Need cron monitoring & failure alerts?', cta: 'Try Cronitor', url: 'https://cronitor.io/' }
  },
  'css-gradient-generator': {
    affiliates: [
      { name: 'Figma', desc: 'Design tool with advanced gradient editor', url: 'https://www.figma.com/', icon: '🎨' },
      { name: 'Webflow', desc: 'Visual website builder — no code needed', url: 'https://webflow.com/', icon: '🌊' }
    ],
    pro: null
  },
  'yaml-json-converter': {
    affiliates: [
      { name: 'JetBrains IDEs', desc: 'Built-in YAML/JSON support & validation', url: 'https://www.jetbrains.com/?ref=toolpilot', icon: '🛠️' }
    ],
    pro: null
  },
  'html-to-markdown': {
    affiliates: [
      { name: 'Notion', desc: 'All-in-one workspace with Markdown import', url: 'https://www.notion.so/', icon: '📓' },
      { name: 'Obsidian', desc: 'Knowledge base built on Markdown files', url: 'https://obsidian.md/', icon: '💎' }
    ],
    pro: null
  },
  'meta-tag-generator': {
    affiliates: [
      { name: 'Ahrefs', desc: 'SEO toolset — site audit & keyword research', url: 'https://ahrefs.com/', icon: '📈' },
      { name: 'Hostinger', desc: 'Fast hosting from €2.99/mo — free domain included', url: 'https://www.hostinger.com/', icon: '🌐' }
    ],
    pro: { text: 'Need full SEO audit & competitor analysis?', cta: 'Try Ahrefs', url: 'https://ahrefs.com/' }
  },
  'chmod-calculator': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Cloud servers from $4/mo — developer friendly', url: 'https://www.digitalocean.com/', icon: '🌊' }
    ],
    pro: null
  },
  'svg-to-png': {
    affiliates: [
      { name: 'Figma', desc: 'Design & export in any format — free tier', url: 'https://www.figma.com/', icon: '🎨' },
      { name: 'Canva', desc: 'Design anything — easy image export', url: 'https://www.canva.com/', icon: '🖌️' }
    ],
    pro: null
  }
};

/* ---- French labels for monetization ---- */
const MONETIZATION_FR = {
  sectionTitle: 'Aller plus loin',
  proLabel: 'Besoin de plus ?',
  affiliateDisclosure: 'Liens partenaires — nous pouvons percevoir une commission.',
  // Pro-tier French overrides
  pro: {
    'json-formatter': { text: 'Besoin de tests API en temps réel ?', cta: 'Essayer Postman gratuitement' },
    'password-generator': { text: 'Besoin de stocker et partager vos mots de passe ?', cta: 'Essayer Bitwarden — gratuit' },
    'word-counter': { text: 'Besoin de correction grammaticale avancée ?', cta: 'Essayer Grammarly gratuitement' },
    'color-palette': { text: 'Besoin d\'export Figma, Adobe et palettes illimitées ?', cta: 'Essayer Coolors Pro' },
    'regex-tester': { text: 'Besoin de déboguer des regex multi-langages ?', cta: 'Essayer RegexBuddy' },
    'markdown-preview': { text: 'Besoin d\'un espace Markdown complet avec backlinks ?', cta: 'Essayer Obsidian — gratuit' },
    'diff-checker': { text: 'Besoin de comparaison de dossiers et fusion 3 voies ?', cta: 'Essayer Beyond Compare' },
    'css-minifier': { text: 'Besoin de minification automatique au déploiement ?', cta: 'Essayer Cloudflare — gratuit' },
    'js-minifier': { text: 'Besoin de minification auto dans votre CI/CD ?', cta: 'Essayer Vercel — gratuit' },
    'slug-generator': { text: 'Besoin d\'un audit SEO complet ?', cta: 'Essayer Ahrefs' },
    'qr-code-generator': { text: 'Besoin de QR codes traçables avec analytics ?', cta: 'Essayer Beaconstac' },
    'jwt-decoder': { text: 'Besoin d\'une gestion complète de l\'authentification JWT ?', cta: 'Essayer Auth0 — gratuit' },
    'cron-generator': { text: 'Besoin de monitoring et alertes pour vos crons ?', cta: 'Essayer Cronitor' },
    'meta-tag-generator': { text: 'Besoin d\'un audit SEO et analyse concurrentielle ?', cta: 'Essayer Ahrefs' }
  }
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
  const isFr = isFrenchPage();
  const t = isFr ? SITE_FR.nav : { allTools: 'All Tools', blog: 'Blog' };
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <a href="#main-content" class="skip-link">${isFr ? 'Aller au contenu' : 'Skip to content'}</a>
    <div class="container">
      <a href="${base}/" class="logo">⚡ <span>Tool</span>Pilot</a>
      <div class="header-actions">
        <a href="${base}/#tools" style="font-size:.9rem;color:var(--text-muted)">${t.allTools}</a>
        <a href="${base}/blog/" style="font-size:.9rem;color:var(--text-muted)">${t.blog}</a>
        <a href="${lang.href}" style="font-size:.9rem;color:var(--text-muted)" title="${lang.title}">${lang.label}</a>
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="${isFr ? 'Changer le thème' : 'Toggle theme'}">${theme === 'dark' ? '☀️' : '🌙'}</button>
      </div>
    </div>`;
  document.body.prepend(header);
  // Add main-content id to <main> element for skip-link
  const mainEl = document.querySelector('main');
  if (mainEl && !mainEl.id) mainEl.id = 'main-content';
}

function injectFooter() {
  const base = getBaseUrl();
  const isFr = isFrenchPage();
  const t = isFr ? SITE_FR.nav : { home: 'Home', allTools: 'All Tools', blog: 'Blog', about: 'About', privacy: 'Privacy' };
  const tagline = isFr ? SITE_FR.footer : 'Free online tools. All processing happens in your browser.';
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-links">
        <a href="${base}/">${t.home}</a>
        <a href="${base}/#tools">${t.allTools}</a>
        <a href="${base}/blog/">${t.blog}</a>
        <a href="${base}/about.html">${t.about}</a>
        <a href="${base}/privacy.html">${t.privacy}</a>
        <a href="https://buymeacoffee.com/toolpailot" target="_blank" rel="noopener">☕ Buy Me a Coffee</a>
      </div>
      <p>&copy; ${new Date().getFullYear()} ToolPilot — ${tagline}</p>
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
  // Announce to screen readers
  const ariaStatus = document.getElementById('aria-status');
  if (ariaStatus) ariaStatus.textContent = msg;
}

function renderToolCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const base = getBaseUrl();
  const isFr = isFrenchPage();
  container.innerHTML = SITE.tools.map(t => {
    const fr = isFr && SITE_FR.tools[t.slug];
    const name = fr ? fr.name : t.name;
    const desc = fr ? fr.desc : t.desc;
    return `
    <a href="${base === '.' ? '' : '../'}tools/${t.slug}.html" class="card tool-card">
      <span class="icon">${t.icon}</span>
      <h3>${name}</h3>
      <p>${desc}</p>
    </a>`;
  }).join('');
}

/* ---- Cookie Consent (GDPR) ---- */
function getCookieConsent() {
  return localStorage.getItem('tp-cookie-consent'); // 'accepted' | 'refused' | null
}

function setCookieConsent(value) {
  localStorage.setItem('tp-cookie-consent', value);
}

function injectCookieBanner() {
  if (getCookieConsent()) return; // already answered

  const isFr = isFrenchPage();
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', isFr ? 'Consentement cookies' : 'Cookie consent');
  banner.innerHTML = `
    <div class="cookie-inner">
      <p>${isFr
        ? 'Ce site utilise des cookies publicitaires via Google AdSense. Aucune donnée personnelle n\'est collectée par nos outils (tout est traité dans votre navigateur).'
        : 'This site uses advertising cookies via Google AdSense. No personal data is collected by our tools (everything is processed in your browser).'
      } <a href="${getBaseUrl()}/privacy.html" style="color:inherit;text-decoration:underline">${isFr ? 'Politique de confidentialité' : 'Privacy Policy'}</a></p>
      <div class="cookie-buttons">
        <button id="cookie-accept" class="cookie-btn cookie-btn-accept">${isFr ? 'Accepter' : 'Accept'}</button>
        <button id="cookie-refuse" class="cookie-btn cookie-btn-refuse">${isFr ? 'Refuser' : 'Refuse'}</button>
      </div>
    </div>`;
  document.body.appendChild(banner);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    setCookieConsent('accepted');
    banner.remove();
    loadAdSense();
    loadGA4();
  });
  document.getElementById('cookie-refuse').addEventListener('click', () => {
    setCookieConsent('refused');
    banner.remove();
    hideAdSlots();
  });
}

function hideAdSlots() {
  document.querySelectorAll('.ad-slot').forEach(el => { el.style.display = 'none'; });
}

/* ---- Google Analytics 4 (loaded only after consent) ---- */
function loadGA4() {
  if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-0V85LF9GWM';
  document.head.appendChild(s);
  s.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-0V85LF9GWM');
  };
}

/* ---- AdSense (loaded only after consent) ---- */
function loadAdSense() {
  if (document.querySelector('script[src*="adsbygoogle"]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551172612233720';
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
  setTimeout(initAdSlots, 1000);
}

function initAdSlots() {
  document.querySelectorAll('ins.adsbygoogle').forEach(ins => {
    if (!ins.dataset.adsbygoogleStatus) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
    }
  });
}

/* ---- Monetization Injection ---- */
function getCurrentToolSlug() {
  const path = window.location.pathname;
  const match = path.match(/tools\/([a-z0-9-]+)\.html/);
  return match ? match[1] : null;
}

function injectMonetization() {
  const slug = getCurrentToolSlug();
  if (!slug) return; // not a tool page
  const config = TOOL_MONETIZATION[slug];
  if (!config) return;

  const isFr = isFrenchPage();
  const sectionTitle = isFr ? MONETIZATION_FR.sectionTitle : 'Go Further';
  const disclosure = isFr ? MONETIZATION_FR.affiliateDisclosure : 'Partner links — we may earn a commission.';

  // Build HTML
  let html = '';

  // Pro-tier banner (if exists)
  if (config.pro) {
    const proText = isFr && MONETIZATION_FR.pro[slug] ? MONETIZATION_FR.pro[slug].text : config.pro.text;
    const proCta = isFr && MONETIZATION_FR.pro[slug] ? MONETIZATION_FR.pro[slug].cta : config.pro.cta;
    html += `
      <div class="pro-banner">
        <span class="pro-banner-icon">⚡</span>
        <div class="pro-banner-content">
          <span class="pro-banner-text">${proText}</span>
          <a href="${config.pro.url}" target="_blank" rel="noopener sponsored" class="pro-banner-cta">${proCta} →</a>
        </div>
      </div>`;
  }

  // Affiliate cards
  if (config.affiliates && config.affiliates.length) {
    html += `<div class="affiliate-grid">`;
    config.affiliates.forEach(a => {
      html += `
        <a href="${a.url}" target="_blank" rel="noopener sponsored" class="affiliate-card">
          <span class="affiliate-icon">${a.icon}</span>
          <div>
            <strong>${a.name}</strong>
            <p>${a.desc}</p>
          </div>
          <span class="affiliate-arrow">→</span>
        </a>`;
    });
    html += `</div>`;
    html += `<p class="affiliate-disclosure">${disclosure}</p>`;
  }

  if (!html) return;

  // Find insertion point: before "Related Tools" section or before footer
  const section = document.createElement('section');
  section.className = 'monetization-section container';
  section.innerHTML = `<h2>${sectionTitle}</h2>${html}`;

  // Insert before Related Tools or before footer
  const relatedSection = document.querySelector('section:has(.tool-grid)') ||
    Array.from(document.querySelectorAll('section')).find(s => s.querySelector('.tool-card'));
  const footer = document.querySelector('.site-footer');

  if (relatedSection) {
    relatedSection.parentNode.insertBefore(section, relatedSection);
  } else if (footer) {
    footer.parentNode.insertBefore(section, footer);
  } else {
    document.body.appendChild(section);
  }
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  injectMonetization();

  // Inject global aria-live region for dynamic status messages
  if (!document.getElementById('aria-status')) {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'aria-status';
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  const consent = getCookieConsent();
  if (consent === 'accepted') {
    loadAdSense();
    loadGA4();
  } else if (consent === 'refused') {
    hideAdSlots();
  }
  // Show banner if no choice made yet (blocks AdSense until consent)
  injectCookieBanner();
});
