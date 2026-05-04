# Oumar— Portfolio React

Portfolio personnel développé avec **React + Vite**.

## Structure du projet

```
oumar-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── data.js          ← ✏️ Modifier ici pour personnaliser le contenu
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Lancer en local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Personnalisation

Tout le contenu est dans `src/data.js` : nom, bio, projets, compétences, expériences, liens.

---

## 🚀 Déploiement gratuit

### Option 1 — Netlify (recommandé, le plus simple)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Dans le dashboard, cliquer **"Add new site" → "Import an existing project"**
3. Connecter GitHub et sélectionner ce repo, **OU** glisser-déposer le dossier `dist/`
4. Paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Cliquer **Deploy** → ton site est en ligne en 1 minute !

**Déploiement via CLI (optionnel) :**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

### Option 2 — Vercel

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Cliquer **"New Project"** → importer depuis GitHub
3. Vercel détecte automatiquement Vite, tout est configuré
4. Cliquer **Deploy**

**Déploiement via CLI :**
```bash
npm install -g vercel
npm run build
vercel --prod
```

---

### Option 3 — GitHub Pages

1. Dans `vite.config.js`, ajouter :
```js
export default defineConfig({
  plugins: [react()],
  base: '/oumar-portfolio/',  // nom de ton repo
})
```

2. Installer `gh-pages` :
```bash
npm install --save-dev gh-pages
```

3. Dans `package.json`, ajouter dans `"scripts"` :
```json
"deploy": "npm run build && gh-pages -d dist"
```

4. Lancer :
```bash
npm run deploy
```

5. Dans les paramètres du repo GitHub → **Pages** → Source : branche `gh-pages`

---

## Domaine personnalisé

Sur Netlify ou Vercel, va dans les paramètres du site → **"Domain settings"** → ajouter ton domaine.

Configure ensuite chez ton registrar un enregistrement CNAME pointant vers l'URL Netlify/Vercel.
