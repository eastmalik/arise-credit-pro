# Arise Credit Pro website — working notes for Claude

Target live site: https://www.arisecreditpro.com (GitHub Pages, deployed from
`main`). See README.md for the stack, deploy workflow, required files and DNS.

## Owner

- The owner is not a developer: explain things in plain language, no jargon.

## Before merging any change

- `pnpm check` and `pnpm build` must pass.
- Look at the affected pages in a browser at desktop and phone width
  (no JavaScript errors, no sideways scroll on phones).

## Rules

- Every image or file the site shows lives in `client/public/manus-storage/`
  (historical folder name). Never link to images hosted on another platform.
- The lead form is GoHighLevel's own hosted form. Never replace it with a
  form the site processes itself (GitHub Pages can't receive submissions),
  and never collect SSNs, dates of birth or full credit details on this site.
- Credit repair marketing is regulated (Credit Repair Organizations Act):
  flag anything that reads as a guarantee of results or specific score
  increases instead of quietly leaving or adding it.
- Free GitHub Pages requires the repository to be public.
- Never advise changing Hostinger email DNS records (MX, hostingermail,
  mailgun, leadconnectorhq, autodiscover, autoconfig, DKIM, SPF, DMARC).
- Don't add GitHub's four A records at Hostinger if an ALIAS record for `@`
  is available — use `ALIAS @ -> eastmalik.github.io`.
