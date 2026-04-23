# Vercel Launch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the `playlab-regional-ecosystems` Next.js 16 marketing site to production on Vercel via a GitHub-connected project, with OG image, Twitter card, `metadataBase`, and Vercel Analytics/Speed Insights in place.

**Architecture:** Vercel auto-detected Next.js preset (no `vercel.json`), GitHub repo at `playlab-ai/playlab-regional-ecosystems` (public), Vercel project under the Playlab team. Production URL is a `.vercel.app` for now; `NEXT_PUBLIC_SITE_URL` env var drives `metadataBase` so a custom domain can be swapped in later without code changes.

**Tech Stack:** Next.js 16.2.4 (App Router, Turbopack), React 19.2.4, TypeScript, Tailwind v4, `next/og` `ImageResponse`, `@vercel/analytics`, `@vercel/speed-insights`, GitHub CLI (`gh`), Vercel CLI (`vercel`).

**Spec:** `docs/superpowers/specs/2026-04-22-vercel-launch-design.md`

**Working directory for every step below:** `/Users/wymankhuu/Desktop/Projects/playlab-regional-ecosystems`

**Verification model:** This project has no test suite. "Tests" for each code change are: (a) `npm run build` passes cleanly, and (b) `npm run dev` renders the affected element correctly when checked in a browser. Frequent commits between tasks, clean history.

**Important constraint (from `AGENTS.md`):** Next.js 16 has breaking changes. All Next API calls in this plan were verified against `node_modules/next/dist/docs/` on 2026-04-22 (see `01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md` and `01-app/03-api-reference/04-functions/generate-metadata.md`). If anything in this plan contradicts the installed docs, trust the installed docs.

---

## File Structure

**New files:**
- `app/opengraph-image.tsx`: renders 1200×630 OG image at build time via `next/og` `ImageResponse`.
- `app/fonts/Livvic-Black.ttf`: vendored font file used by `ImageResponse` (read from filesystem at build time).

**Modified files:**
- `app/layout.tsx`: add `metadataBase`, `twitter` metadata, and mount `<Analytics />` + `<SpeedInsights />`.
- `package.json` / `package-lock.json`: add `@vercel/analytics` and `@vercel/speed-insights` dependencies.

**Unchanged:**
- `next.config.ts`, `components/**/*`, `app/page.tsx`, `app/globals.css`, `public/**/*`.

---

## Phase 1: Pre-flight and initial commit

### Task 1: Verify local tooling

**Files:** (none)

- [ ] **Step 1: Verify Node and npm versions**

Run: `node -v && npm -v`
Expected: Node 20+ and npm 10+ (any recent LTS is fine; Next 16 requires Node 20+).

- [ ] **Step 2: Verify `gh` is installed and authenticated**

Run: `gh --version && gh auth status`
Expected: `gh` prints its version and shows "Logged in to github.com as <user>". If not authenticated, run `gh auth login` before proceeding.

- [ ] **Step 3: Verify Playlab org membership**

Run: `gh api user/orgs --jq '.[].login'`
Expected: Output includes `playlab-ai` (or the exact org slug for Playlab). If the org is missing, stop and request membership before continuing, since `gh repo create playlab-ai/...` will fail without it.

- [ ] **Step 4: Verify `vercel` CLI is installed and authenticated**

Run: `vercel --version && vercel whoami`
Expected: Version prints and `whoami` returns your Vercel username. If not installed: `npm i -g vercel`. If not authenticated: `vercel login`.

- [ ] **Step 5: Verify Playlab Vercel team is accessible**

Run: `vercel teams ls`
Expected: Output lists the Playlab team slug. Note the exact slug; it's needed in Task 12. If not visible, stop and request team access before continuing.

---

### Task 2: Clean-build sanity check on current WIP

**Files:** (none; read-only verification)

- [ ] **Step 1: Check what's uncommitted**

Run: `git status --short`
Expected: A list including modifications to `app/favicon.ico`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `next.config.ts`, the untracked `components/` directory, and new `public/` assets.

- [ ] **Step 2: Install dependencies**

Run: `npm ci`
Expected: Clean install completes without errors, matching `package-lock.json`.

- [ ] **Step 3: Run the production build against current WIP**

Run: `npm run build`
Expected: `next build` completes with no TypeScript errors and no React/render errors. Output should show a single route `○ /` (static) under the Route table. If build fails, fix the underlying issue before proceeding. Do not continue into Phase 2 on top of a broken build.

---

### Task 3: Squash current WIP into "initial site build" commit

**Files:** (stage all currently uncommitted files except the already-committed `docs/superpowers/specs/2026-04-22-vercel-launch-design.md`)

- [ ] **Step 1: Stage the WIP**

Run:
```bash
git add \
  app/favicon.ico \
  app/globals.css \
  app/layout.tsx \
  app/page.tsx \
  next.config.ts \
  components \
  public/color-bar.svg \
  public/playlab-logo.png
git rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```
Expected: Staged changes match the WIP listed in Task 2, Step 1. Boilerplate SVGs from `create-next-app` are removed.

- [ ] **Step 2: Verify the staged diff**

Run: `git diff --cached --stat`
Expected: Summary shows the site's section components added, the default boilerplate SVGs deleted, and `app/*` and `next.config.ts` updated.

- [ ] **Step 3: Commit**

Run:
```bash
git commit -m "feat: initial site build"
```
Expected: Single commit created on `main` with all site code.

- [ ] **Step 4: Confirm tree is clean (aside from the existing spec commit)**

Run: `git status && git log --oneline`
Expected: Working tree clean. Log shows three commits: `Initial commit from Create Next App`, `docs: add Vercel launch design spec`, `feat: initial site build`.

---

## Phase 2: Pre-launch polish

### Task 4: Add `metadataBase` and extend metadata in `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update the `metadata` export**

Replace the existing `export const metadata` block in `app/layout.tsx` with:

```ts
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Regional AI Innovation Ecosystems — Playlab",
  description:
    "Building infrastructure for education systems to cultivate AI agency, impact, and innovation. A funder partnership opportunity from Playlab.",
  openGraph: {
    title: "Regional AI Innovation Ecosystems — Playlab",
    description:
      "Networks of schools, districts, and local partners collaborating to build AI capacity together. Six modular components, $50K to $5M+ investment paths.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional AI Innovation Ecosystems — Playlab",
    description:
      "Networks of schools, districts, and local partners collaborating to build AI capacity together. Six modular components, $50K to $5M+ investment paths.",
    images: ["/opengraph-image"],
  },
};
```

Notes:
- `metadataBase` uses `new URL(...)` because Next requires a `URL` instance here (confirmed in `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md:392`).
- `twitter.images` is set to `/opengraph-image` so the Twitter card reuses the same image generated by Task 6. The relative path is resolved against `metadataBase`. (The `opengraph-image` file convention only sets `og:*` meta tags by default; we must explicitly reference the image in `twitter.images` to get a `twitter:image` tag.)
- If Task 6a (static PNG fallback) is used instead of the generated route, change this to `images: ["/opengraph-image.png"]`.

- [ ] **Step 2: Verify typecheck still passes**

Run: `npx tsc --noEmit`
Expected: Exit 0, no type errors.

- [ ] **Step 3: Commit**

Run:
```bash
git add app/layout.tsx
git commit -m "feat: add metadataBase and twitter card"
```
Expected: Commit created.

---

### Task 5: Vendor the Livvic Black font for `ImageResponse`

**Files:**
- Create: `app/fonts/Livvic-Black.ttf`

Context: `ImageResponse` cannot use `next/font/google` at render time. Per the Next docs, fonts for `ImageResponse` are loaded via `fs.readFile` from the filesystem. We vendor the single weight needed for the OG image headline.

- [ ] **Step 1: Create the fonts directory**

Run: `mkdir -p app/fonts`
Expected: Directory created.

- [ ] **Step 2: Download Livvic Black (900) from Google Fonts' open-source repo**

Run:
```bash
curl -fsSL \
  "https://github.com/google/fonts/raw/main/ofl/livvic/Livvic-Black.ttf" \
  -o app/fonts/Livvic-Black.ttf
```
Expected: File downloads successfully, approximately 40–80 KB.

- [ ] **Step 3: Sanity check the file**

Run: `file app/fonts/Livvic-Black.ttf && ls -la app/fonts/Livvic-Black.ttf`
Expected: `file` reports it as "TrueType Font data" (or similar); size is > 0 bytes. If the download returned HTML (GitHub error page) or a 404, stop and find the correct upstream URL before proceeding.

- [ ] **Step 4: Commit**

Run:
```bash
git add app/fonts/Livvic-Black.ttf
git commit -m "chore: vendor Livvic Black for OG image"
```
Expected: Commit created with the font file.

---

### Task 6: Create `app/opengraph-image.tsx`

**Files:**
- Create: `app/opengraph-image.tsx`

- [ ] **Step 1: Write the OG image route**

Create `app/opengraph-image.tsx` with the following contents:

```tsx
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Regional AI Innovation Ecosystems — Playlab";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const livvicBlack = await readFile(
    join(process.cwd(), "app/fonts/Livvic-Black.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#e1e7d9",
          fontFamily: "Livvic",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 110,
            fontWeight: 900,
            lineHeight: 0.95,
            color: "#1a311d",
          }}
        >
          <span>REGIONAL AI</span>
          <span>INNOVATION</span>
          <span>ECOSYSTEMS</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 900,
            color: "#122134",
            letterSpacing: "0.02em",
          }}
        >
          POWERED BY PLAYLAB
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Livvic",
          data: livvicBlack,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
```

Notes:
- Palette pulls from `app/globals.css`: sage background (`#e1e7d9`), dark-green headline (`#1a311d`), playlab-blue footer (`#122134`). Matches the live hero.
- The footer text is plain text, not an `<Image>`, because embedding PNGs in `ImageResponse` adds build complexity and the logo file isn't strictly needed for the OG card.
- Signature (`alt`, `size`, `contentType`, default async `Image()`) follows the Next 16 file convention exactly (verified in `opengraph-image.md:78-150`).

- [ ] **Step 2: Build and confirm the OG route is generated**

Run: `npm run build`
Expected: Build succeeds. Output's Route table includes an entry like `/opengraph-image` (or similar) alongside `/`. No ImageResponse errors in output.

- [ ] **Step 3: Spot-check the rendered image locally**

Run: `npm run dev` (keep it running in another terminal)
Then visit: `http://localhost:3000/opengraph-image`
Expected: Browser renders the 1200×630 card with the three-line headline and footer, Livvic Black weight, sage background. If typography looks off (fallback font rendered, blown-up characters, wrong weights), apply the fallback from Task 6a below.

- [ ] **Step 4: Stop the dev server once verified**

Hit `Ctrl+C` in the `npm run dev` terminal.

- [ ] **Step 5: Commit**

Run:
```bash
git add app/opengraph-image.tsx
git commit -m "feat: add OG image via next/og ImageResponse"
```
Expected: Commit created.

---

### Task 6a: (Fallback) Static PNG OG image, only if Task 6 Step 3 looks wrong

**Skip this task entirely if the ImageResponse image looked correct.**

**Files:**
- Delete: `app/opengraph-image.tsx`
- Delete: `app/fonts/Livvic-Black.ttf` (no longer needed)
- Create: `app/opengraph-image.png` (static 1200×630 PNG)

- [ ] **Step 1: Generate or export a static 1200×630 PNG**

Options:
- Export from Figma using the existing hero design.
- Take a 1200×630 screenshot of the hero at `http://localhost:3000` using a headless browser.
- Design a simple branded card in any tool.

Save it to `app/opengraph-image.png`. Next will auto-serve it as the OG image based on the filename convention.

- [ ] **Step 2: Remove the generated image route and vendored font**

Run:
```bash
git rm app/opengraph-image.tsx app/fonts/Livvic-Black.ttf
rmdir app/fonts
```
Expected: Files removed.

- [ ] **Step 3: Update Twitter image reference in `app/layout.tsx`**

Change `images: ["/opengraph-image"]` to `images: ["/opengraph-image.png"]` inside the `twitter` block of the `metadata` export.

- [ ] **Step 4: Build and verify**

Run: `npm run build`
Expected: Build succeeds. The PNG is served statically at `/opengraph-image.png`.

- [ ] **Step 5: Commit**

Run:
```bash
git add app/opengraph-image.png app/layout.tsx
git commit -m "feat: use static OG image"
```
Expected: Commit created.

---

### Task 7: Install and mount `@vercel/analytics`

**Files:**
- Modify: `app/layout.tsx`
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install the package**

Run: `npm install @vercel/analytics`
Expected: Package added to `dependencies`. `package-lock.json` updated.

- [ ] **Step 2: Import and mount `<Analytics />`**

In `app/layout.tsx`, add this import near the top with the other imports:

```ts
import { Analytics } from "@vercel/analytics/next";
```

Then, inside the root `<body>`, update the JSX so that `<Analytics />` renders after `{children}`:

```tsx
<body>
  {children}
  <Analytics />
</body>
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: Exit 0.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

Run:
```bash
git add app/layout.tsx package.json package-lock.json
git commit -m "feat: add Vercel Analytics"
```
Expected: Commit created.

---

### Task 8: Install and mount `@vercel/speed-insights`

**Files:**
- Modify: `app/layout.tsx`
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install the package**

Run: `npm install @vercel/speed-insights`
Expected: Package added to `dependencies`. `package-lock.json` updated.

- [ ] **Step 2: Import and mount `<SpeedInsights />`**

In `app/layout.tsx`, add this import alongside the Analytics import:

```ts
import { SpeedInsights } from "@vercel/speed-insights/next";
```

Then update the `<body>` JSX to include both components:

```tsx
<body>
  {children}
  <Analytics />
  <SpeedInsights />
</body>
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit && npm run build`
Expected: Both succeed.

- [ ] **Step 4: Commit**

Run:
```bash
git add app/layout.tsx package.json package-lock.json
git commit -m "feat: add Vercel Speed Insights"
```
Expected: Commit created.

---

### Task 9: Final Phase-2 build check

**Files:** (none)

- [ ] **Step 1: Clean rebuild from a cold cache**

Run:
```bash
rm -rf .next
npm run build
```
Expected: Build succeeds end-to-end, with `/` route static and `/opengraph-image` (or `/opengraph-image.png` if Task 6a was used) present.

- [ ] **Step 2: Confirm repository state**

Run: `git status && git log --oneline`
Expected: Working tree clean. History is a clean linear progression: initial commit → spec doc → `feat: initial site build` → `feat: add metadataBase and twitter card` → `chore: vendor Livvic Black for OG image` → `feat: add OG image via next/og ImageResponse` (or fallback) → `feat: add Vercel Analytics` → `feat: add Vercel Speed Insights`.

---

## Phase 3: GitHub and Vercel wiring

### Task 10: Create the GitHub repo and push

**Files:** (none)

- [ ] **Step 1: Confirm you're authed to the right GitHub user**

Run: `gh auth status`
Expected: Shows the GitHub account that has write access to the `playlab-ai` org.

- [ ] **Step 2: Create the public repo and push `main`**

Run:
```bash
gh repo create playlab-ai/playlab-regional-ecosystems \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Marketing site for Playlab's Regional AI Innovation Ecosystems funder partnership."
```
Expected: Repo is created under `playlab-ai`, `origin` remote is added locally, and `main` is pushed. Output includes the repo URL.

- [ ] **Step 3: Verify the push**

Run: `git remote -v && git branch -vv`
Expected: `origin` points at `https://github.com/playlab-ai/playlab-regional-ecosystems.git` (or `git@github.com:...`). `main` tracks `origin/main`.

- [ ] **Step 4: Load the repo in the browser as a sanity check**

Run: `gh repo view --web`
Expected: GitHub page opens showing the code, README, and the `docs/superpowers/` directory. Confirm the commit history is clean.

---

### Task 11: Link Vercel project under the Playlab team

**Files:** (none; this creates `.vercel/` locally, which is already gitignored by default in `.gitignore`)

- [ ] **Step 1: Confirm `.vercel/` is ignored**

Run: `grep -E '^\.vercel' .gitignore`
Expected: Output includes `.vercel`. If missing, append it before running `vercel link`:
```bash
echo ".vercel" >> .gitignore
git add .gitignore
git commit -m "chore: ignore .vercel project directory"
git push
```

- [ ] **Step 2: Run `vercel link` scoped to the Playlab team**

Run:
```bash
vercel link --yes \
  --scope <playlab-team-slug> \
  --project playlab-regional-ecosystems
```
Substitute `<playlab-team-slug>` with the exact slug from Task 1, Step 5.

Expected: Prompts answered non-interactively via `--yes`. A `.vercel/project.json` file is created locally. If the project doesn't exist yet on Vercel, `vercel link` creates it.

- [ ] **Step 3: Verify the linkage**

Run: `cat .vercel/project.json`
Expected: JSON contains `projectId` and `orgId`. `orgId` corresponds to the Playlab team.

---

### Task 12: First preview deploy

**Files:** (none)

- [ ] **Step 1: Deploy a preview**

Run: `vercel`
Expected: Vercel builds and deploys a preview. Output includes a preview URL like `https://playlab-regional-ecosystems-<hash>-<team>.vercel.app`. Note this URL.

- [ ] **Step 2: Smoke-test the preview**

Open the preview URL in a browser.
Expected:
- Page loads without error.
- Livvic (headings) and Montserrat (body) render correctly.
- All 10 section components are present, in the order from `app/page.tsx`.
- Images from `public/` (playlab-logo, color-bar) load.

- [ ] **Step 3: Check the OG image on the preview**

Visit `<preview-url>/opengraph-image` (or `<preview-url>/opengraph-image.png` if Task 6a was used).
Expected: The card renders as intended.

- [ ] **Step 4: Stop if anything above failed**

If any smoke test fails, debug on the preview before connecting GitHub or promoting to prod.

---

### Task 13: Connect the GitHub repo for auto-deploys

**Files:** (none)

- [ ] **Step 1: Connect the GitHub repo to the Vercel project**

Run: `vercel git connect`
Expected: The CLI detects the `origin` remote and links `playlab-ai/playlab-regional-ecosystems` to the Vercel project. Going forward, pushes to `main` trigger production deploys and pushes to any other branch trigger preview deploys.

- [ ] **Step 2: Verify in the Vercel dashboard**

Run: `vercel project inspect playlab-regional-ecosystems --scope <playlab-team-slug>`
Expected: Output shows the Git repository as connected.

---

### Task 14: Set `NEXT_PUBLIC_SITE_URL` environment variable

**Files:** (none)

Context: Vercel assigns a stable production URL at `<project-name>-<team>.vercel.app` the first time a project deploys to production. We need to know this URL before we set the env var, but we can't hit production until we set the env var. Solution: use the production alias that Vercel prints after the first production deploy, or use `vercel domains ls` to find it, then redeploy once with the env var set.

The simplest path: do the first production deploy with `NEXT_PUBLIC_SITE_URL` unset (it falls back to `http://localhost:3000`), read the assigned production URL from the deploy output, set the env var, trigger a new production deploy.

That's split across Task 14, 15, and 16 below.

- [ ] **Step 1: Deploy to production once to surface the assigned URL**

Run: `vercel --prod`
Expected: Production deploy succeeds. Output includes a URL like `https://playlab-regional-ecosystems.vercel.app` (or with a team suffix). Copy that exact URL.

- [ ] **Step 2: Add `NEXT_PUBLIC_SITE_URL` for Production**

Run:
```bash
vercel env add NEXT_PUBLIC_SITE_URL production
```
Paste the production URL from Step 1 (no trailing slash) when prompted.

- [ ] **Step 3: Add it for Preview as well**

Run:
```bash
vercel env add NEXT_PUBLIC_SITE_URL preview
```
Use the same production URL (preview deploys will use production as their `metadataBase` origin, which is fine for OG purposes; alternatively, you can skip this and accept `localhost:3000` fallback in previews).

- [ ] **Step 4: Verify env vars**

Run: `vercel env ls`
Expected: `NEXT_PUBLIC_SITE_URL` listed for `production` and `preview`.

---

### Task 15: Final production deploy with env var

**Files:** (none)

- [ ] **Step 1: Redeploy production**

Run: `vercel --prod`
Expected: Production deploy succeeds. This time, the build picks up `NEXT_PUBLIC_SITE_URL`, so `metadataBase` resolves to the production URL. OG and Twitter image URLs now emit as absolute URLs in HTML.

- [ ] **Step 2: Inspect emitted metadata**

Run: `curl -s https://<production-url>/ | grep -E 'og:|twitter:'`
Expected: `og:image` and `twitter:image` URLs are absolute (begin with `https://<production-url>/`), not relative paths. `twitter:card` is `summary_large_image`. `og:title`, `og:description`, `twitter:title`, `twitter:description` all match `app/layout.tsx`.

---

### Task 16: Post-launch smoke test

**Files:** (none)

- [ ] **Step 1: Load the production URL in a browser**

Expected: Page renders identical to the preview in Task 12.

- [ ] **Step 2: Check OG preview via an external debugger**

Open `https://www.opengraph.xyz/url/<url-encoded-production-url>`.
Expected: OG preview card renders with the headline, description, and image. No missing image placeholder.

- [ ] **Step 3: Check Twitter/X card**

Use any X card validator (e.g., paste the production URL into a DM to yourself on X and check the preview, or use `https://cards-dev.twitter.com/validator` if still available).
Expected: Large image summary card with image, title, and description.

- [ ] **Step 4: Verify Analytics is collecting**

Visit the Vercel dashboard → project → Analytics tab.
Expected: Within a minute of loading the production URL, a pageview appears in the dashboard. If nothing shows up after 10 minutes of traffic, confirm `<Analytics />` is still mounted in `app/layout.tsx` on the deployed code.

- [ ] **Step 5: Verify Speed Insights is collecting**

Vercel dashboard → project → Speed Insights tab.
Expected: Within ~15 minutes of first traffic, Core Web Vitals metrics begin populating. No config needed.

- [ ] **Step 6: Confirm rollback path**

Open the Vercel dashboard → project → Deployments tab.
Expected: The current production deploy is labeled "Production", with earlier deploys listed as "Preview" or "Ready". Right-click / three-dot menu → "Instant Rollback" is available as a sanity check (do not trigger it).

---

## Launch complete

At this point:
- `playlab-regional-ecosystems` is live on a Vercel `.vercel.app` URL.
- GitHub repo `playlab-ai/playlab-regional-ecosystems` is connected: pushes to `main` auto-deploy to production, branch pushes auto-deploy to preview.
- OG image and Twitter card preview correctly in social/link unfurlers.
- Vercel Analytics and Speed Insights are active.
- Instant Rollback is available if anything regresses.

**Deferred work (not part of this plan):**
- Custom domain (`regional-ecosystems.playlab.ai` or similar): attach in Vercel dashboard, add CNAME to `cname.vercel-dns.com`, update `NEXT_PUBLIC_SITE_URL` in the Vercel env vars, redeploy.
- `app/robots.ts` and `app/sitemap.ts`: worth adding once the site grows past one page.
- Preview password protection: available from Vercel project settings if preview deploys need gating.
