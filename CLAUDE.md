# Arise Credit Pro website — working notes for Claude

Target live site: https://www.arisecreditpro.com (GitHub Pages, deployed from
`main`). See README.md for the stack, deploy workflow, required files and DNS.

## Owner

- The owner is not a developer: explain things in plain language, no jargon.

## How the business runs (owner's system)

- Site path: Pricing → "Book Your Free Consultation" ($120 Restoration
  Program) → GoHighLevel form → GoHighLevel calendar → automated pipeline.
  Keep this path; the site doesn't take payment.
- Contract signing and billing happen after the call, outside the site:
  billing runs through Authorize.net (invoice and/or recurring subscription).
- The owner chose not to state billing timing ("billed at month end",
  "nothing charged at signup") on the site. Don't add it.
- Arise is Level 1 of the 7Band map; Levels 2–3 go to East Consulting LLC.
  There is a higher-level system behind all the sites; ask the owner before
  restructuring funnels.

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
