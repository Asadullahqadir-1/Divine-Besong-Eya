# Divine Besong Eya Frontend (Next.js)

Production-ready App Router frontend for the personal branding website.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Sanity integration with fallback content for local preview

## Local Development

```bash
npm install
npm run dev -- -p 3000
```

Open: http://localhost:3000

## Build Check

```bash
npm run build
```

## Optional Sanity Environment Variables

If these are not set, the app automatically uses built-in fallback content.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-23
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
SANITY_STUDIO_PREVIEW_SECRET=replace-with-random-secret
ADMIN_PASSWORD=replace-with-strong-password
ADMIN_SESSION_SECRET=replace-with-long-random-secret
NEXT_PUBLIC_SHOW_ADMIN_LINK=true
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Contact form email delivery (Resend)
CONTACT_TO_EMAIL=div@theleadersmindset.net
CONTACT_FROM_EMAIL=no-reply@theleadersmindset.net
RESEND_API_KEY=your_resend_api_key
```

If `SANITY_API_WRITE_TOKEN` is missing, admin book management automatically uses a local JSON backend:

- Data file: `src/data/local-books.json`
- Uploaded images: `public/uploads/books/*`

This lets you use the admin panel without knowing or configuring Sanity.

## Vercel Deployment

1. Import the `web` folder as the project root in Vercel.
2. Add required environment variables in Vercel Project Settings.
3. Deploy.

Required for production admin create/update/delete and uploads on Vercel:

```bash
SANITY_API_WRITE_TOKEN=your_write_token
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-23
```

Recommended for correct sitemap/canonical URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Contact form email delivery in production requires:

```bash
CONTACT_TO_EMAIL=div@theleadersmindset.net
CONTACT_FROM_EMAIL=no-reply@theleadersmindset.net
RESEND_API_KEY=your_resend_api_key
```

Note: Local JSON/file uploads are development-only fallback. On Vercel, admin write/upload operations require Sanity write configuration.

## Routes

- /
- /about
- /books
- /mentorship-learning
- /services
- /contact
- /admin/login
- /admin
