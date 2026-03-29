# ToolPilot — Plan d'action restant

> Tout ce qui peut être automatisé a été fait. Voici les actions qui nécessitent ton intervention manuelle (15-20 min au total).

---

## 1. Redéployer le site sur Netlify (2 min)

Les fichiers locaux ont été enrichis avec du contenu SEO long-tail et des FAQ Schema (GEO) sur toutes les pages. Il faut redéployer.

1. Va sur https://app.netlify.com → site `toolpailot`
2. Onglet **Deploys**
3. Glisse le dossier `toolpilot/` entier dans la zone de drop
4. Attends "Published" → c'est fait

---

## 2. DevHunt — Annulé (payant)

DevHunt exige **$49** pour chaque semaine de lancement. C'est au-dessus du budget (<20€/mois). Le formulaire est partiellement rempli sur https://devhunt.org/account/tools/new mais les screenshots n'ont pas pu être uploadés via automatisation.

**Décision :** Skip. Le backlink DevHunt n'est pas indispensable.

---

## 3. Reddit — 3 posts (10 min)

Crée un compte Reddit (ou utilise un existant), puis poste sur ces 3 subreddits :

### r/SideProject
- URL : https://www.reddit.com/r/SideProject/submit
- **Titre :** I built a collection of free, privacy-first online tools (100% client-side)
- **Corps :**
```
Hey! I just launched ToolPilot — a suite of free online tools that run entirely in your browser. No signup, no data sent to servers.

Available tools:
- JSON Formatter & Validator
- Password Generator (with strength meter)
- Word & Character Counter
- Base64 Encoder/Decoder
- Case Converter
- Lorem Ipsum Generator
- Color Palette Generator
- UUID Generator

Everything is built with vanilla HTML/CSS/JS, loads instantly, and works offline once cached. Your data never leaves your device.

Check it out: https://cyril-netizen.github.io/toolpailot

Would love feedback!
```

### r/webdev
- URL : https://www.reddit.com/r/webdev/submit
- **Titre :** Show r/webdev: ToolPilot — Free developer tools that run 100% client-side
- **Corps :**
```
Built a lightweight collection of browser-based dev tools. Zero backend, zero tracking, zero signup.

Tools include JSON formatter, Base64 converter, UUID generator, password generator, and more.

Tech: vanilla JS, no frameworks, no build step. Hosted on Netlify (free tier).

https://cyril-netizen.github.io/toolpailot

Interested in feedback on UX and which tools to add next.
```

### r/InternetIsBeautiful
- URL : https://www.reddit.com/r/InternetIsBeautiful/submit
- **Titre :** ToolPilot — Free online tools that run entirely in your browser (no signup, no tracking)
- **Corps :** (laisser vide ou juste le lien, ce subreddit préfère les posts liens)
- **Type de post :** Link → `https://cyril-netizen.github.io/toolpailot`

---

## 4. AlternativeTo — à faire le 3 avril (compte trop récent)

Le compte a été créé mais les soumissions nécessitent un compte de 7+ jours.

**Le 3 avril :**
1. Va sur https://alternativeto.net/add-app/
2. Soumets ToolPilot comme alternative à : SmallSEOTools, CyberChef, Dan's Tools
3. **Titre :** ToolPilot
4. **URL :** https://cyril-netizen.github.io/toolpailot
5. **Description :** Free, privacy-first online tools — JSON formatter, password generator, word counter & more. 100% client-side, no signup.

---

## 5. Google AdSense — dans 2-4 semaines

Une fois que le site est indexé par Google (vérifie dans Search Console que les pages apparaissent) :

1. Va sur https://adsense.google.com
2. Crée un compte avec cyril@lourseyre.fr
3. Ajoute le site `cyril-netizen.github.io/toolpailot`
4. Google te donnera un code `<script>` à ajouter dans le `<head>` de `index.html`
5. Remplace le commentaire `<!-- Google AdSense: uncomment after approval -->` par le vrai code
6. Redéploie sur Netlify
7. Attends l'approbation (quelques jours à 2 semaines)

---

## Récapitulatif de ce qui a été fait

| Action | Statut |
|--------|--------|
| Site construit (8 outils) | ✅ |
| Déployé sur Netlify | ✅ |
| Google Search Console | ✅ Vérifié + sitemap |
| SEO on-page (meta, canonical, JSON-LD) | ✅ |
| GEO (FAQ Schema sur toutes les pages) | ✅ |
| Contenu SEO long-tail | ✅ |
| Product Hunt | ✅ Soumis |
| AlternativeTo | ⏳ Compte créé, attendre 3 avril |
| DevHunt | ❌ Payant ($49), skip |
| Reddit (3 subreddits) | 📋 Textes prêts ci-dessus |
| Redéploiement SEO | 📋 Fichiers prêts, à glisser sur Netlify |
| AdSense | ⏳ Attendre indexation (2-4 sem.) |
