# Publishing your website — a beginner's guide to GitHub Pages

No coding or command-line tools required. Everything below happens in your browser, using drag-and-drop. Total time: about 15 minutes.

## What you're aiming for

GitHub Pages is a free hosting service: you give it a folder of HTML/CSS files (which you already have, in `v3/`), and it publishes them at a public URL. No server to manage, no cost.

## Step 1 — Create a GitHub account

1. Go to [github.com/join](https://github.com/join).
2. Sign up with your email (`irenemj@gmail.com` or your TU Delft address — either works).
3. Choose a **username**. This matters slightly: if you later want the cleanest possible web address (see Step 2), your username becomes part of it. Something like `irenemartinez` or `imartinezjosem` works well. It can't be changed easily later, so take a moment on this.
4. Verify your email when GitHub asks.

## Step 2 — Decide your site's web address

You have two options for the *repository* (GitHub's word for a project folder) you're about to create:

- **Option A — clean URL:** name the repository exactly `<your-username>.github.io` (e.g. `irenemartinez.github.io`). Your site then lives at `https://irenemartinez.github.io/` — nothing else after the slash. This only works for one repository per account, so it's meant for exactly this kind of personal site. **Recommended.**
- **Option B — any other name:** e.g. `academic-website`. Your site lives at `https://<username>.github.io/academic-website/`. Slightly longer, but the repo name can be anything and you can have as many as you like.

Pick Option A unless you already know you'll want multiple GitHub-hosted sites.

## Step 3 — Create the repository

1. Once logged in, click the **+** icon top-right → **New repository**.
2. **Repository name:** exactly as decided in Step 2.
3. Set it to **Public** (Pages needs this on a free account).
4. Leave "Add a README", "Add .gitignore", and "Choose a license" all **unchecked** — you already have your own README.
5. Click **Create repository**.

## Step 4 — Upload your website files

You'll now see an empty repository page with an "uploading an existing file" link (or a **Add file → Upload files** button).

1. Click **Add file → Upload files**.
2. Open the `v3` folder I shared with you in Finder.
3. Select **everything inside `v3`** (all the `.html` files, `README.md`, and the `css`, `js`, `images` folders) — select all with Cmd+A, then drag the whole selection into the browser window.
   - Important: drag the *contents* of `v3`, not the `v3` folder itself — GitHub needs `index.html` at the top level of the repository, not inside a subfolder.
4. Wait for the upload bar to finish (there are 25 files, ~11 MB total — well within GitHub's limits, but the upload may take a minute depending on your connection).
5. Scroll down, add a short commit message like "Initial site upload", and click **Commit changes**.

## Step 5 — Turn on GitHub Pages

- If you used **Option A** (`<username>.github.io`), GitHub usually publishes it automatically within a minute or two — you can skip to Step 6 and just wait.
- If nothing appears after a few minutes, or you used **Option B**, turn it on manually:
  1. In your repository, go to **Settings** (top menu) → **Pages** (left sidebar).
  2. Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
  3. **Branch:** `main`, **Folder:** `/ (root)`. Click **Save**.

## Step 6 — Visit your live site

GitHub will show you the URL at the top of the Pages settings screen once it's ready (usually 1–2 minutes after Step 4 or 5). Open it and click through every page — Home, Research, UrbanMOVES, Teaching, Supervision, Positions, Scientific Events & Outreach — to confirm everything looks right, including the dropdown menus and your photo.

## Publishing future updates

Whenever I send you an updated file (or a whole new version):

1. Go to your repository on github.com.
2. Click **Add file → Upload files** again.
3. Drag in just the file(s) that changed — GitHub automatically overwrites the old version of any file with the same name and path.
4. Commit changes. The live site updates within about a minute.

## A few practical notes

- **Your photo** (`22_Headshot IMJ.JPG`) is 9.4 MB — GitHub will accept it fine (the limit is 25 MB per file via drag-and-drop), but it's large for a webpage and will load slowly on mobile connections. If you'd like, I can compress it to a smaller file size with no visible quality loss before you publish — just ask.
- **`dissemination.html`** is no longer linked from anywhere on the site (we folded that content into the Research page). You can upload it anyway with no harm — nobody will reach it — or leave it out of the upload entirely. Your call.
- You can always come back to me with new edits; once the site is live, I'll just tell you which specific files changed so you only need to re-upload those.

## Optional, for later: a custom domain

If down the line you'd like something like `irenemartinez.nl` instead of the `github.io` address, that involves buying a domain name and adding a `CNAME` file plus a couple of DNS settings — happy to walk you through that whenever you're ready, but it's entirely optional and the `github.io` address works perfectly well on its own.
