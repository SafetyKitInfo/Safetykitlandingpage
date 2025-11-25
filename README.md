# SafetyKit Landing Page (Next.js + Tailwind)

This repository contains a minimal, modern landing page scaffold for SafetyKit built with Next.js and Tailwind CSS. It's ready to customize and deploy to Vercel.

## What’s included

- `pages/` - Next.js pages (home and API stub)
- `components/` - `Hero`, `Features`, `ContactForm`
- `styles/` - Tailwind global stylesheet
- `public/logo.svg` - simple SVG logo placeholder
- `vercel.json` - Vercel build config

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
# open http://localhost:3000
```

3. Build for production

```bash
npm run build
npm start
```

## Customize content

- Replace `public/logo.svg` with your official logo.
- Edit hero text in `components/Hero.js`.
- Update features in `components/Features.js` (an array at the top).
- Update contact behaviour in `components/ContactForm.js`. The form submits to `/api/contact` which currently logs submissions to the server console. Replace `pages/api/contact.js` with a real integration (SendGrid, Mailgun, Postmark, or a serverless email provider).

## Deploy to Vercel

1. Install the Vercel CLI (optional) or use the Vercel web UI

```bash
npm i -g vercel
vercel login
vercel
```

2. Or push to a GitHub repo and import the project in Vercel. The `vercel.json` file is included to make builds straightforward.

## Generating a QR code for your deployed site

Option A — Use the `qrencode` CLI (Linux)

```bash
sudo apt install qrencode
qrencode -o qrcode.png "https://your-site.vercel.app" -s 10
```

Option B — Use Node locally

```bash
npm install -g qrcode-terminal
node -e "require('qrcode-terminal').generate('https://your-site.vercel.app', {small: true})"
```

Option C — Use an online generator

Use any trusted QR code generator (e.g. https://www.qr-code-generator.com/) and paste your site URL.

## Next steps / Recommendations

- Hook up the contact API to a transactional email provider.
- Add analytics and a cookie/privacy banner if needed.
- Add screenshots and a hero background or illustrations to match your brand.

If you want, I can:
- Wire up a real email provider for the contact form.
- Add SEO (meta tags) and Open Graph images.
- Create a GitHub Action for automatic Vercel deployments.
