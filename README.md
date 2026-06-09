# Personal Developer Portfolio — PRJ-01

The public face of a 12-project, 6-month full-stack build. A single-page portfolio presenting my transition from 8+ years of GMP pharmaceutical engineering into full-stack and AI-integrated web development, targeting roles in Ireland.

**Live demo:** _[add Vercel URL after deployment]_

![Screenshot placeholder](./docs/screenshot.png)

## Tech Stack

- **React 18 + TypeScript** — component architecture with strict typing
- **Vite** — build tooling and dev server
- **Tailwind CSS** — utility-first styling with a custom design-token theme
- **Framer Motion** — orchestrated page-load and scroll-reveal animations (respects `prefers-reduced-motion`)
- **Formspree** (optional) — contact form backend, with a `mailto:` fallback when unconfigured
- **Vercel** — deployment

## Features

- "Validation record" project cards: each of the 12 roadmap projects rendered with a record ID (PRJ-01…12), live status chip, stack tags and repo link
- Status filtering of the build log (all / in progress / planned)
- Batch-record style spec strip in the hero — a nod to pharma documentation
- Fully responsive, keyboard-accessible, reduced-motion friendly

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) configure the contact form
cp .env.example .env
# then set VITE_FORMSPREE_ENDPOINT to your Formspree form URL

# 3. Run the dev server
npm run dev

# 4. Production build
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/      # Navbar, Hero, About, Projects, ProjectCard, Skills, Experience, Contact, Footer
├── data/            # projects.ts (12-project roadmap), skills.ts (skill groups)
├── lib/             # motion.ts — shared Framer Motion variants
├── App.tsx
├── main.tsx
└── index.css        # Tailwind layers + base styles
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vite is auto-detected.
3. Add `VITE_FORMSPREE_ENDPOINT` under Project → Settings → Environment Variables (optional).
4. Deploy. Every push to `main` redeploys automatically.

## Customisation Checklist

- [ ] Replace `your.email@gmail.com` in `src/components/Contact.tsx`
- [ ] Update repo URLs in `src/data/projects.ts` as each project goes live
- [ ] Add a real screenshot to `docs/screenshot.png`
- [ ] Set the live demo URL above after first deploy

---

**Md. Sazed Ul Karim** · [github.com/jinx71](https://github.com/jinx71) · [linkedin.com/in/sazed-ul-karim](https://linkedin.com/in/sazed-ul-karim)
