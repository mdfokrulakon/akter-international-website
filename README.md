# Akter International — Corporate Website

A static, responsive corporate website for **Akter International**, built with plain HTML5, CSS3, and vanilla JavaScript. No build step, backend, or database required — it can be hosted for free on GitHub Pages.

## Files

```
/
├── index.html          # All page content and sections
├── style.css           # Design system + responsive styles
├── script.js           # Mobile menu, quote form, mailto handling
├── logo-icon.svg        # Real logo mark, transparent background (header, favicon)
├── logo-icon-white-bg.svg # Real logo mark on a white tile (used on dark backgrounds, e.g. footer)
├── CNAME               # Custom domain for GitHub Pages
├── assets/
│   ├── images/         # Add photos (founder photo, og-cover.jpg, etc.) here
│   └── icons/          # Add any extra icon assets here
└── README.md
```

### About the logo files

The site uses your real Akter International "A" brand mark, in two variants:

- `logo-icon.svg` — transparent background, used in the header and as the favicon.
- `logo-icon-white-bg.svg` — the same mark on a white rounded tile, used in the footer so it stays visible against the dark navy background.

To update the logo later, replace these two files with the same filenames — no other changes are needed in `index.html`.

### Adding the founder photo

The Founder section currently uses a styled initials placeholder (`MFA`). To add a real photo:

1. Add the image to `assets/images/`, e.g. `assets/images/founder.jpg`.
2. In `index.html`, find the `<div class="founder-photo">` element and replace it with an `<img>` tag, e.g.:
   ```html
   <img class="founder-photo" src="assets/images/founder.jpg" alt="Md Fokrul Akon, Founder & Proprietor of Akter International">
   ```

### Adding portfolio projects later

The Portfolio section is intentionally an empty state ("Portfolio coming soon") because no confirmed project links were supplied. When you have real projects to show, edit the `portfolio-empty` block in `index.html` and add project cards with: project name, category, description, technologies used, live link, and a screenshot.

---

## 1. Create the GitHub repository

1. Go to [github.com](https://github.com) and sign in (create a free account if you don't have one).
2. Click **New repository**.
3. Name it, for example, `akter-international-website`.
4. Set visibility to **Public** (required for free GitHub Pages).
5. Do **not** initialize with a README (you already have one) — or, if you do, you'll merge these files in afterward.
6. Click **Create repository**.

## 2. Upload the files

**Option A — via the GitHub website (no command line needed):**

1. Open your new repository on GitHub.
2. Click **Add file → Upload files**.
3. Drag in all the files and folders from this project (`index.html`, `style.css`, `script.js`, `logo.svg`, `CNAME`, `assets/`, `README.md`).
4. Scroll down and click **Commit changes**.

**Option B — via Git command line:**

```bash
cd akter-international
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/akter-international-website.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
4. GitHub will build your site at a URL like `https://YOUR-USERNAME.github.io/akter-international-website/`. This can take a minute or two the first time.

## 4. Connect `akterinternational.com.bd`

This repository already includes a `CNAME` file containing `akterinternational.com.bd`, which tells GitHub Pages which custom domain to serve.

1. **At your domain registrar / DNS provider** (wherever `akterinternational.com.bd` is registered), add the following DNS records:

   - For the root domain (`akterinternational.com.bd`), add **A records** pointing to GitHub Pages' IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - If you also want `www.akterinternational.com.bd` to work, add a **CNAME record** for `www` pointing to `YOUR-USERNAME.github.io`.

   (Since this is a `.com.bd` domain, exact steps for adding DNS records depend on your registrar's control panel — look for a "DNS management" or "DNS records" section.)

2. **Back in GitHub**, go to **Settings → Pages**, and under **Custom domain**, enter `akterinternational.com.bd` and click **Save**. GitHub will verify the DNS records (this can take anywhere from a few minutes to 24 hours to propagate).

3. Once verified, check **Enforce HTTPS** so the site is served securely.

4. Visit `https://akterinternational.com.bd` to confirm the site loads.

## 5. Updating the website later

- **Small text/content changes:** edit `index.html` directly (via GitHub's web editor, or locally) and commit the change — GitHub Pages redeploys automatically within a minute or two.
- **Style changes:** edit `style.css`.
- **Behavior changes** (menu, form, etc.): edit `script.js`.
- **Adding images:** upload them into `assets/images/` and reference them from `index.html` with a relative path, e.g. `assets/images/your-file.jpg`.
- **Adding portfolio projects:** see "Adding portfolio projects later" above.

No build tools, npm install, or server restart is required — GitHub Pages serves the files as-is.

## Notes on content

All company, contact, product-category, division, founder, and client information in this site is drawn directly from the information provided by Akter International. No clients, projects, statistics, awards, certifications, or testimonials have been invented. The Portfolio section is left as an intentional "coming soon" empty state until real project details are available, and the En-Lac section is worded to reflect that HS Corporation — not Akter International — is the official importer of En-Lac.
