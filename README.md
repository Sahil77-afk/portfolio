# Sahil Patil - Portfolio

Next.js (App Router) + React portfolio. Dark-only, no UI dependencies, CSS animations only.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Update content
All content lives in `data/portfolio.js`:
- **Links**: replace the `YOUR-GITHUB-USERNAME` / `YOUR-LINKEDIN-ID` placeholders and `site.url`.
- **Projects**: edit the `projects` array (first item is the featured one). Set `code` / `live` URLs to show buttons.
- **Resume**: drop your PDF at `public/resume.pdf`.

## Deploy
Push to GitHub, import the repo in Vercel, and deploy with defaults. No environment variables needed.
