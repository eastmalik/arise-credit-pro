# Arise Credit Pro website

React + Vite single-page app, deployed to GitHub Pages.

- **Deploy:** every push to `main` builds and publishes via
  `.github/workflows/deploy.yml` (includes the SPA fallback `404.html`).
- **Images/files:** `client/public/manus-storage/` (folder name is historical).
- **Custom domain:** `client/public/CNAME`.
- **Pages:** one file per page in `client/src/pages/`, routes in `client/src/App.tsx`.
- **Lead form:** GoHighLevel-hosted form, linked from `client/src/pages/Home.tsx`
  (`TYPEFORM_URL`, points at `api.leadconnectorhq.com`).

## Local development

```sh
pnpm install
pnpm dev      # dev server on :3000
pnpm check    # typecheck
pnpm build    # output in dist/public
```

## Files that must be in `client/public/manus-storage/`

These were stored on Manus and must be downloaded from the live site and
committed before the DNS switch:

- `hero_bg_4c30ca62.jpg` — homepage hero background
- `logo_icon_6cc3acb5.png` — logo (navbar and footer)
- `legal_reference_sheet_456e0e97.pdf`
- `CreditIsAccess_AriseCreditPro_7dae5a51.pdf`
- `BusinessStartUpGuide_AriseCreditPro_39a880d8.pdf`
- `Meta_Instagram_Ads_MODERN_43d7937c.pdf`

## DNS (Hostinger)

Only these records point at the website. Hostinger offers no ALIAS record
type for this domain, so the bare domain uses GitHub's four A records:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | eastmalik.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Do **not** touch MX, hostingermail, mailgun, leadconnectorhq, autodiscover,
autoconfig, DKIM, SPF or DMARC records — they run business email.

Rollback to Manus (pre-migration values, recorded 2026-10-02): CNAME www →
cname.manus.space, and a single A @ → 104.8.26.246 in place of the four
GitHub A records.
