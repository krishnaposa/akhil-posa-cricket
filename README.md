# Akhil Posa — Cricket journey site

React (JavaScript) + Vite. Edit copy and media in `src/content.js`. Static assets go in `public/gallery/` and `public/sponsors/`.

## Local development

```bash
npm install
npm run dev
```

## GitHub: push this repo

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## GitHub Pages (auto-deploy)

1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. The workflow `.github/workflows/deploy.yml` builds on every push to `main` or `master`.
3. First run: **Actions** may ask you to approve the `github-pages` environment once.

### Asset paths (`VITE_BASE`)

- **Project site** (`https://USER.github.io/REPO/`): the workflow sets `VITE_BASE` to `/REPO/` automatically.
- **User/org site** (repo named `USER.github.io`): base is `/` automatically.
- **Custom domain on a project repo** (site loads at `https://yourdomain.com/` with paths at root): add a repository variable **`VITE_BASE`** with value **`/`** ( **Settings → Secrets and variables → Actions → Variables** ).

## Custom domain

1. Add a file **`public/CNAME`** containing a single line: your hostname (e.g. `www.example.com`). Vite copies it into `dist` on build.
2. In **Settings → Pages**, set the same **Custom domain** and follow GitHub’s DNS instructions (A/AAAA or CNAME).
3. If you use a project repo + custom domain, set **`VITE_BASE`** to **`/`** as above, then redeploy.

See `public/CNAME.example` for a short reminder.
