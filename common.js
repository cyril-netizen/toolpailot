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
/* AFFILIATE IDs — Replace 'AFFILIATE_ID' with your real IDs after signup:
 *  Hostinger:    https://www.hostinger.com/affiliates       → 40-60% per sale
 *  NordVPN:      https://nordvpn.com/affiliate/              → 40-100% + 30% recurring
 *  NordPass:     included with NordVPN affiliate signup
 *  Grammarly:    https://www.grammarly.com/affiliates        → $0.20/free + $20/premium
 *  SEMrush:      https://www.semrush.com/lp/affiliate-program → $200 per sale
 *  Surfshark:    https://surfshark.com/affiliate              → 40%+ per sale
 *  Canva:        https://www.canva.com/help/canva-affiliate-marketing-program → ~$36/annual
 *  Webflow:      https://webflow.com/solutions/affiliates     → 50% first year
 *  DigitalOcean: https://www.digitalocean.com/affiliates (CJ) → 10% recurring 12mo
 */
const AFF = {
  hostinger:    'https://www.hostinger.com/?ref=toolpilot',   // ← replace with your link
  nordvpn:      'https://nordvpn.com/?ref=toolpilot',         // ← replace with your link
  nordpass:     'https://nordpass.com/?ref=toolpilot',         // ← replace with your link
  grammarly:    'https://www.grammarly.com/?ref=toolpilot',   // ← replace with your link
  semrush:      'https://www.semrush.com/?ref=toolpilot',     // ← replace with your link
  surfshark:    'https://surfshark.com/?ref=toolpilot',       // ← replace with your link
  canva:        'https://www.canva.com/?ref=toolpilot',       // ← replace with your link
  webflow:      'https://webflow.com/?ref=toolpilot',         // ← replace with your link
  digitalocean: 'https://www.digitalocean.com/?ref=toolpilot' // ← replace with your link
};

const TOOL_MONETIZATION = {
  'json-formatter': {
    affiliates: [
      { name: 'Hostinger', desc: 'Deploy your app — hosting from €2.99/mo, free domain', url: AFF.hostinger, icon: '🌐' },
      { name: 'SEMrush', desc: 'All-in-one SEO & dev toolkit — audit any site', url: AFF.semrush, icon: '📈' }
    ],
    pro: { text: 'Need a complete SEO & site audit toolkit?', cta: 'Try SEMrush — free trial', url: AFF.semrush }
  },
  'password-generator': {
    affiliates: [
      { name: 'NordPass', desc: 'Premium password manager by NordVPN', url: AFF.nordpass, icon: '🔐' },
      { name: 'NordVPN', desc: 'Encrypt your connection — 30-day money back', url: AFF.nordvpn, icon: '🛡️' }
    ],
    pro: { text: 'Need to securely store & sync all your passwords?', cta: 'Try NordPass', url: AFF.nordpass }
  },
  'word-counter': {
    affiliates: [
      { name: 'Grammarly', desc: 'AI writing assistant — grammar, tone & clarity', url: AFF.grammarly, icon: '✍️' },
      { name: 'SEMrush', desc: 'SEO writing assistant — optimize content for Google', url: AFF.semrush, icon: '📈' }
    ],
    pro: { text: 'Need advanced grammar & readability checks?', cta: 'Try Grammarly — free', url: AFF.grammarly }
  },
  'base64-converter': {
    affiliates: [
      { name: 'Hostinger', desc: 'Deploy your app — hosting from €2.99/mo, free domain', url: AFF.hostinger, icon: '🌐' },
      { name: 'NordVPN', desc: 'Secure your dev traffic — 30-day money back', url: AFF.nordvpn, icon: '🛡️' }
    ],
    pro: null
  },
  'case-converter': {
    affiliates: [
      { name: 'Grammarly', desc: 'AI writing assistant — grammar, tone & clarity', url: AFF.grammarly, icon: '✍️' },
      { name: 'Canva', desc: 'Design templates with perfect typography', url: AFF.canva, icon: '🖌️' }
    ],
    pro: { text: 'Need AI-powered writing correction?', cta: 'Try Grammarly — free', url: AFF.grammarly }
  },
  'lorem-ipsum': {
    affiliates: [
      { name: 'Canva', desc: 'Design anything — templates, mockups & more', url: AFF.canva, icon: '🖌️' },
      { name: 'Webflow', desc: 'Visual website builder — no code needed', url: AFF.webflow, icon: '🌊' }
    ],
    pro: { text: 'Need a visual website builder with real content?', cta: 'Try Webflow — free tier', url: AFF.webflow }
  },
  'color-palette': {
    affiliates: [
      { name: 'Canva', desc: 'Apply your palette to real designs instantly', url: AFF.canva, icon: '🖌️' },
      { name: 'Webflow', desc: 'Build websites with custom color systems', url: AFF.webflow, icon: '🌊' }
    ],
    pro: { text: 'Need to apply palettes to real designs?', cta: 'Try Canva — free', url: AFF.canva }
  },
  'uuid-generator': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Cloud servers from $4/mo — deploy in seconds', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'Web hosting from €2.99/mo — free domain included', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'regex-tester': {
    affiliates: [
      { name: 'SEMrush', desc: 'Full SEO toolkit — regex-powered site crawling', url: AFF.semrush, icon: '📈' },
      { name: 'Hostinger', desc: 'Host your app — .htaccess regex made easy', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: { text: 'Need SEO site crawling with regex filters?', cta: 'Try SEMrush — free trial', url: AFF.semrush }
  },
  'url-encoder': {
    affiliates: [
      { name: 'SEMrush', desc: 'Audit & fix URL issues across your site', url: AFF.semrush, icon: '📈' },
      { name: 'Hostinger', desc: 'Web hosting from €2.99/mo — free SSL included', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'hash-generator': {
    affiliates: [
      { name: 'NordVPN', desc: 'Encrypt your connection — 30-day money back', url: AFF.nordvpn, icon: '🛡️' },
      { name: 'Surfshark', desc: 'VPN + antivirus + data breach alerts', url: AFF.surfshark, icon: '🦈' }
    ],
    pro: { text: 'Need full encryption beyond hashing?', cta: 'Try NordVPN', url: AFF.nordvpn }
  },
  'timestamp-converter': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Cloud servers from $4/mo — cron jobs built-in', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'VPS hosting with scheduled tasks support', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'markdown-preview': {
    affiliates: [
      { name: 'Hostinger', desc: 'Host your blog — WordPress from €2.99/mo', url: AFF.hostinger, icon: '🌐' },
      { name: 'Grammarly', desc: 'Perfect your writing before publishing', url: AFF.grammarly, icon: '✍️' }
    ],
    pro: { text: 'Need to publish your Markdown as a blog?', cta: 'Try Hostinger — from €2.99/mo', url: AFF.hostinger }
  },
  'diff-checker': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Git-friendly cloud hosting with CI/CD', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'Host your projects — free domain included', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'css-minifier': {
    affiliates: [
      { name: 'Hostinger', desc: 'Fast hosting with LiteSpeed cache & auto-optimize', url: AFF.hostinger, icon: '🌐' },
      { name: 'Webflow', desc: 'Visual builder with auto CSS optimization', url: AFF.webflow, icon: '🌊' }
    ],
    pro: { text: 'Need automatic CSS optimization on deploy?', cta: 'Try Hostinger — LiteSpeed built-in', url: AFF.hostinger }
  },
  'js-minifier': {
    affiliates: [
      { name: 'Hostinger', desc: 'Fast hosting with auto JS optimization', url: AFF.hostinger, icon: '🌐' },
      { name: 'DigitalOcean', desc: 'App Platform with CI/CD — auto build & optimize', url: AFF.digitalocean, icon: '🌊' }
    ],
    pro: { text: 'Need auto-minification in your deploy pipeline?', cta: 'Try DigitalOcean App Platform', url: AFF.digitalocean }
  },
  'html-entities': {
    affiliates: [
      { name: 'Hostinger', desc: 'Web hosting from €2.99/mo — free domain included', url: AFF.hostinger, icon: '🌐' },
      { name: 'Grammarly', desc: 'Write cleaner content — AI-powered', url: AFF.grammarly, icon: '✍️' }
    ],
    pro: null
  },
  'slug-generator': {
    affiliates: [
      { name: 'SEMrush', desc: 'Full SEO toolkit — keyword research & site audit', url: AFF.semrush, icon: '📈' },
      { name: 'Hostinger', desc: 'SEO-friendly hosting — from €2.99/mo', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: { text: 'Need full SEO audit & keyword research?', cta: 'Try SEMrush — free trial', url: AFF.semrush }
  },
  'hex-rgb-converter': {
    affiliates: [
      { name: 'Canva', desc: 'Design with any color — templates & export', url: AFF.canva, icon: '🖌️' },
      { name: 'Webflow', desc: 'Build sites with custom color variables', url: AFF.webflow, icon: '🌊' }
    ],
    pro: null
  },
  'line-tools': {
    affiliates: [
      { name: 'Grammarly', desc: 'Clean up your text with AI assistance', url: AFF.grammarly, icon: '✍️' },
      { name: 'Hostinger', desc: 'Host your scripts & tools online', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'qr-code-generator': {
    affiliates: [
      { name: 'Canva', desc: 'Design branded materials with QR codes', url: AFF.canva, icon: '🖌️' },
      { name: 'Hostinger', desc: 'Host your landing page — from €2.99/mo', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: { text: 'Need branded QR codes in marketing materials?', cta: 'Try Canva — free', url: AFF.canva }
  },
  'json-csv-converter': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Managed databases for your data pipelines', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'Host your data apps — from €2.99/mo', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'jwt-decoder': {
    affiliates: [
      { name: 'NordVPN', desc: 'Secure your API traffic — 30-day money back', url: AFF.nordvpn, icon: '🛡️' },
      { name: 'DigitalOcean', desc: 'Deploy auth services — App Platform from $5/mo', url: AFF.digitalocean, icon: '🌊' }
    ],
    pro: { text: 'Need to secure your API traffic end-to-end?', cta: 'Try NordVPN', url: AFF.nordvpn }
  },
  'cron-generator': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Cloud servers with native cron support', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'VPS hosting with cron job scheduler', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: { text: 'Need a server to run your cron jobs?', cta: 'Try DigitalOcean — from $4/mo', url: AFF.digitalocean }
  },
  'css-gradient-generator': {
    affiliates: [
      { name: 'Webflow', desc: 'Visual website builder with gradient editor', url: AFF.webflow, icon: '🌊' },
      { name: 'Canva', desc: 'Apply gradients to designs & social posts', url: AFF.canva, icon: '🖌️' }
    ],
    pro: { text: 'Need to build full websites visually?', cta: 'Try Webflow — free tier', url: AFF.webflow }
  },
  'yaml-json-converter': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Deploy with Kubernetes YAML configs', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'Host your apps — from €2.99/mo', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'html-to-markdown': {
    affiliates: [
      { name: 'Grammarly', desc: 'Perfect your content before converting', url: AFF.grammarly, icon: '✍️' },
      { name: 'Hostinger', desc: 'Host your Markdown blog — from €2.99/mo', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: null
  },
  'meta-tag-generator': {
    affiliates: [
      { name: 'SEMrush', desc: 'Full SEO toolkit — audit meta tags at scale', url: AFF.semrush, icon: '📈' },
      { name: 'Hostinger', desc: 'SEO-friendly hosting — from €2.99/mo', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: { text: 'Need to audit meta tags across your whole site?', cta: 'Try SEMrush — free trial', url: AFF.semrush }
  },
  'chmod-calculator': {
    affiliates: [
      { name: 'DigitalOcean', desc: 'Linux cloud servers from $4/mo', url: AFF.digitalocean, icon: '🌊' },
      { name: 'Hostinger', desc: 'VPS hosting with full root access', url: AFF.hostinger, icon: '🌐' }
    ],
    pro: { text: 'Need a Linux server to manage?', cta: 'Try DigitalOcean — from $4/mo', url: AFF.digitalocean }
  },
  'svg-to-png': {
    affiliates: [
      { name: 'Canva', desc: 'Design & export in any format — PNG, SVG, PDF', url: AFF.canva, icon: '🖌️' },
      { name: 'Webflow', desc: 'Build sites with optimized image handling', url: AFF.webflow, icon: '🌊' }
    ],
    pro: { text: 'Need a full design tool with export options?', cta: 'Try Canva — free', url: AFF.canva }
  }
};

/* ---- French labels for monetization ---- */
const MONETIZATION_FR = {
  sectionTitle: 'Aller plus loin',
  proLabel: 'Besoin de plus ?',
  affiliateDisclosure: 'Liens partenaires — nous pouvons percevoir une commission.',
  pro: {
    'json-formatter': { text: 'Besoin d\'un toolkit SEO complet ?', cta: 'Essayer SEMrush — essai gratuit' },
    'password-generator': { text: 'Besoin de stocker et synchroniser vos mots de passe ?', cta: 'Essayer NordPass' },
    'word-counter': { text: 'Besoin de correction grammaticale avancée ?', cta: 'Essayer Grammarly — gratuit' },
    'case-converter': { text: 'Besoin de correction d\'écriture par IA ?', cta: 'Essayer Grammarly — gratuit' },
    'lorem-ipsum': { text: 'Besoin d\'un constructeur de site visuel ?', cta: 'Essayer Webflow — gratuit' },
    'color-palette': { text: 'Besoin d\'appliquer vos palettes à de vrais designs ?', cta: 'Essayer Canva — gratuit' },
    'regex-tester': { text: 'Besoin d\'audit SEO avec filtres regex ?', cta: 'Essayer SEMrush — essai gratuit' },
    'hash-generator': { text: 'Besoin d\'un chiffrement complet ?', cta: 'Essayer NordVPN' },
    'markdown-preview': { text: 'Besoin de publier votre Markdown en blog ?', cta: 'Essayer Hostinger — dès 2,99€/mois' },
    'css-minifier': { text: 'Besoin d\'optimisation CSS automatique ?', cta: 'Essayer Hostinger — LiteSpeed inclus' },
    'js-minifier': { text: 'Besoin de minification auto au déploiement ?', cta: 'Essayer DigitalOcean App Platform' },
    'slug-generator': { text: 'Besoin d\'un audit SEO complet ?', cta: 'Essayer SEMrush — essai gratuit' },
    'qr-code-generator': { text: 'Besoin de QR codes dans vos supports marketing ?', cta: 'Essayer Canva — gratuit' },
    'jwt-decoder': { text: 'Besoin de sécuriser votre trafic API ?', cta: 'Essayer NordVPN' },
    'cron-generator': { text: 'Besoin d\'un serveur pour vos tâches cron ?', cta: 'Essayer DigitalOcean — dès 4$/mois' },
    'css-gradient-generator': { text: 'Besoin de construire des sites visuellement ?', cta: 'Essayer Webflow — gratuit' },
    'chmod-calculator': { text: 'Besoin d\'un serveur Linux à administrer ?', cta: 'Essayer DigitalOcean — dès 4$/mois' },
    'meta-tag-generator': { text: 'Besoin d\'auditer les meta tags de tout votre site ?', cta: 'Essayer SEMrush — essai gratuit' },
    'svg-to-png': { text: 'Besoin d\'un outil de design complet ?', cta: 'Essayer Canva — gratuit' }
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
