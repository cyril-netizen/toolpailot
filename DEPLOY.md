# ToolPilot — Guide de Déploiement (Setup Unique)

## Temps estimé : 30-45 minutes

---

## Étape 1 : Acheter un domaine (~10€/an)

1. Va sur [Namecheap](https://namecheap.com) ou [OVH](https://ovh.com)
2. Cherche un domaine disponible. Suggestions :
   - `toolpilot.dev` / `toolpilot.io` / `toolpilot.tools`
   - `quicktoolbox.com` / `neattools.dev`
   - N'importe quel nom court et mémorable
3. Achète le domaine (~8-12€/an)

## Étape 2 : Remplacer YOUR_DOMAIN

Avant de déployer, remplace `YOUR_DOMAIN` par ton vrai domaine dans tous les fichiers :

**Sur Mac/Linux (terminal) :**
```bash
cd toolpilot
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" -o -name "*.js" \) -exec sed -i '' 's/YOUR_DOMAIN/toolpilot.dev/g' {} +
```

**Sur Windows (PowerShell) :**
```powershell
Get-ChildItem -Recurse -Include *.html,*.xml,*.txt,*.js | ForEach-Object {
    (Get-Content $_.FullName) -replace 'YOUR_DOMAIN','toolpilot.dev' | Set-Content $_.FullName
}
```

(Remplace `toolpilot.dev` par ton vrai domaine.)

## Étape 3 : Déployer sur Netlify (gratuit)

1. Va sur [netlify.com](https://netlify.com) et crée un compte (via GitHub ou email)
2. Depuis le dashboard, clique **"Add new site" → "Deploy manually"**
3. **Glisse-dépose le dossier `toolpilot/`** dans la zone de drop
4. Netlify va déployer le site en ~30 secondes
5. Configure ton domaine custom :
   - Va dans **Site settings → Domain management → Add custom domain**
   - Suis les instructions pour configurer les DNS chez ton registrar

**Alternative : Vercel**
1. Va sur [vercel.com](https://vercel.com), crée un compte
2. `npm i -g vercel && cd toolpilot && vercel`
3. Configure le domaine dans le dashboard

**Alternative : GitHub Pages**
1. Crée un repo GitHub, pousse le dossier toolpilot/
2. Settings → Pages → Source: main branch
3. Configure le domaine custom

## Étape 4 : Google AdSense (revenus)

1. Va sur [adsense.google.com](https://adsense.google.com)
2. Crée un compte avec le domaine de ton site
3. **Attends que le site ait du contenu indexé** (2-4 semaines après le déploiement)
4. Soumets ta demande AdSense
5. Une fois approuvé, récupère ton code AdSense (`ca-pub-XXXXXXX`)
6. Dans chaque fichier HTML, décommente la ligne AdSense dans le `<head>` :
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX" crossorigin="anonymous"></script>
   ```
7. Remplace les `<div class="ad-slot">` par de vrais blocs AdSense :
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot="YYYYYYYY"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```

## Étape 5 : Google Search Console (SEO)

1. Va sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoute ton domaine
3. Vérifie la propriété (DNS ou fichier HTML)
4. Soumets ton sitemap : `https://ton-domaine.com/sitemap.xml`
5. C'est tout — Google va commencer à indexer tes pages

## Étape 6 : Analytics (optionnel mais recommandé)

1. Va sur [analytics.google.com](https://analytics.google.com)
2. Crée une propriété GA4
3. Ajoute le tag dans le `<head>` de chaque page :
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXX');
   </script>
   ```

---

## C'est tout ! 🎉

Après ce setup initial (~30 min), le site tourne tout seul :
- Google indexe les pages automatiquement
- Les visiteurs arrivent via les recherches organiques
- AdSense affiche des pubs et génère des revenus
- **Tu n'as rien d'autre à faire**

## Timeline de revenus estimée

| Période | Trafic estimé | Revenus estimés |
|---------|---------------|-----------------|
| Mois 1-2 | 10-50 visites/jour | ~0€ (indexation) |
| Mois 3-6 | 50-200 visites/jour | 10-50€/mois |
| Mois 6-12 | 200-1000 visites/jour | 50-200€/mois |
| 12+ mois | 1000+ visites/jour | 200-500€+/mois |

## Pour booster le SEO (optionnel, 5 min)

- Soumets le site sur [Bing Webmaster Tools](https://www.bing.com/webmasters)
- Poste le lien sur quelques forums/Reddit pertinents (r/webdev, Hacker News, etc.)
- Ajoute le site sur des annuaires d'outils gratuits (alternativeto.net, etc.)
