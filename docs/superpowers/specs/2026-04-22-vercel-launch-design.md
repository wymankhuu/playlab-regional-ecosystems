# Vercel Launch Design: playlab-regional-ecosystems

**Date:** 2026-04-22
**Status:** Approved, ready for implementation plan
**Owner:** Wyman Khuu (wyman@playlab.ai)

## Purpose

Ship the current Next.js 16 marketing site (`playlab-regional-ecosystems`) to Vercel so it is publicly reachable at a `.vercel.app` URL, with the pre-launch polish needed for link previews and basic traffic analytics. Custom domain and SEO boilerplate (robots/sitemap) are explicitly deferred.

## Project context

- **Stack:** Next.js 16.2.4, React 19.2.4, Tailwind v4, TypeScript, Turbopack.
- **Shape:** Single-page marketing site. Only route is `/`, composed from ~10 section components under `components/` (hero, what-is-ecosystem, why-playlab, building-your-ecosystem, opportunity, components-grid, app-collection-callout, cta-bar, final-cta, footer).
- **Runtime needs:** No API routes, no dynamic routes, no data fetching, no env vars. Fully static under Vercel's default Next.js preset.
- **Git state:** Local repo on `main`, one initial commit, no remote, and a large pile of uncommitted WIP that constitutes the actual site build.
- **Important constraint (per `AGENTS.md`):** Next.js 16 has breaking changes from older docs. Any Next-specific API used here (`metadataBase`, `opengraph-image.tsx`, `ImageResponse`, Analytics/Speed Insights wiring) must be verified against `node_modules/next/dist/docs/` before implementation, not against training-data memory.

## Decisions

| # | Decision | Choice |
|---|---|---|
| 1 | Deploy wiring | GitHub → Vercel integration (preview on PR, production on `main`) |
| 2 | GitHub repo | `playlab-ai/playlab-regional-ecosystems`, public |
| 3 | Vercel scope | Playlab team |
| 4 | Launch domain | Vercel-assigned `.vercel.app` URL. Custom domain deferred. |
| 5 | WIP commit | One squashed "initial site build" commit, then a follow-up polish commit |
| 6 | Pre-launch polish | OG image, Twitter card, `metadataBase`, Vercel Analytics, Vercel Speed Insights |
| 7 | Deferred | Custom domain, `robots.ts`, `sitemap.ts`, preview password protection |

## Architecture

Vercel auto-detects the Next.js preset. No `vercel.json`, no `output: 'export'`, no `basePath`, no custom headers, no rewrites. Build: `next build`. Output: `.next/`. Served from Vercel's edge cache.

`next.config.ts` stays as-is (only sets `turbopack.root`). No additional runtime config is needed for this launch.

## Code changes

All changes land in `app/` and `package.json`. No changes to the `components/` directory for this launch.

### 1. `metadataBase` in `app/layout.tsx`

Add `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")` to the existing `metadata` export. Set `NEXT_PUBLIC_SITE_URL` in Vercel project env vars to the production `.vercel.app` URL once known. Without `metadataBase`, OG image URLs resolve as relative paths and break in Slack and LinkedIn previews.

When a custom domain is added later, update `NEXT_PUBLIC_SITE_URL`; no code change needed.

### 2. OG image at `app/opengraph-image.tsx`

Use Next 16's file convention to render a 1200×630 branded card via `ImageResponse`. Use the Livvic/Montserrat typography from the site and the headline "Regional AI Innovation Ecosystems" on a Playlab-branded background.

**Fallback:** If `ImageResponse` typography does not render cleanly (font loading, weight rendering, or CSS subset issues), swap to a static PNG at `app/opengraph-image.png`. Decision point is visual: if the rendered image looks off, fall back.

### 3. Twitter card metadata

Extend the `metadata` export in `app/layout.tsx`:

```ts
twitter: {
  card: "summary_large_image",
  title: "Regional AI Innovation Ecosystems — Playlab",
  description: "...", // reuse openGraph.description
  images: ["/opengraph-image"], // reuses the OG image
}
```

### 4. Vercel Analytics and Speed Insights

- `npm install @vercel/analytics @vercel/speed-insights`.
- In `app/layout.tsx`, mount `<Analytics />` and `<SpeedInsights />` inside `<body>`, after `{children}`.
- No additional config. They auto-connect once the project is deployed on Vercel.

## Deployment flow

1. **Local pre-flight.** Run `npm run build` against current WIP to confirm a clean build before any push.
2. **Commit current WIP.** One squashed commit: `initial site build`.
3. **Apply polish.** Make the four changes above. Run `npm run build` again. Commit as a second commit on top.
4. **Create GitHub repo.** Verify `gh auth status` and `playlab-ai` org membership first, then `gh repo create playlab-ai/playlab-regional-ecosystems --public --source=. --remote=origin --push`.
5. **Link Vercel project.** `vercel link` under the Playlab team scope. First preview deploy via `vercel`.
6. **Connect GitHub.** Link the GitHub repo to the Vercel project (dashboard or `vercel git connect`) so future pushes auto-deploy: previews on branches/PRs, production on `main`.
7. **Set env var.** Add `NEXT_PUBLIC_SITE_URL` in Vercel project settings for Production (and Preview, if desired) pointing at the production `.vercel.app` URL. Redeploy if the env var changes after initial deploy.
8. **Promote to production.** `vercel --prod` (or merge to `main` once GitHub is connected).

## Post-launch smoke test

- Production URL loads without error.
- Livvic and Montserrat fonts render correctly.
- All 10 section components are present in order.
- OG preview renders correctly (verify with a link-preview debugger such as `opengraph.xyz/url/<prod-url>`).
- Twitter/X card preview renders.
- Vercel Analytics shows at least one pageview after loading the site.
- Speed Insights page populates within ~15 minutes of first traffic.

## Rollback

Vercel Instant Rollback: a single click in the dashboard reverts the production alias to any previous deployment. No config or code required.

## Deferred work (not in this spec)

- **Custom domain.** When ready, add a DNS CNAME to `cname.vercel-dns.com` for the chosen subdomain (e.g., `regional-ecosystems.playlab.ai`), attach the domain in Vercel, and update `NEXT_PUBLIC_SITE_URL`.
- **`robots.ts` and `sitemap.ts`.** Worth adding once the site grows past one page.
- **Preview password protection.** Available from Vercel project settings if preview deploys need to be gated.

## Open risks

- **`ImageResponse` rendering quality with custom Google Fonts.** Mitigated by the static PNG fallback noted above.
- **`playlab-ai` org repo-create permissions.** Verified via `gh api user/orgs` before running `gh repo create`. If missing, fall back to creating the repo via the GitHub web UI and pushing to the remote manually.
- **Vercel team membership.** Verified via `vercel teams ls` before linking. If the Playlab team is not visible, request access before linking.
