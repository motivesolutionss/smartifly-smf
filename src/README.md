# Motive Solutions Frontend Directory Architecture

This directory contains the codebase for the official website of **Motive Solutions** (motivesolutions.uk). The project is built using Next.js, TypeScript, and Tailwind CSS.

---

## 🏗️ Directory Map

```text
src/
├── app/                        # Next.js App Router Page Layouts
│   ├── layout.tsx              # Global Layout (Header, Footer, Metadata)
│   ├── globals.css             # Tailwind v4 configuration + Light-Only Theme Variables
│   └── (site)/                 # Route Group for all public-facing site pages
│       ├── page.tsx            # Homepage
│       ├── services/           # Services section pages
│       ├── solutions/          # Solutions overview page
│       ├── platforms/          # Platforms overview page
│       ├── case-studies/       # Client project portfolios
│       ├── blog/               # Developer blog / media insights
│       └── contact/            # Request Quote / project forms
│
├── components/                 # Reusable UI building blocks (Clean, generic components)
│   ├── ui/                     # Atoms (Buttons, inputs, icons, indicators)
│   ├── common/                 # Molecules / compounds (Modals, animations, banners)
│   ├── layout/                 # Global navigation layout wrappers (Header, Footer)
│   ├── cards/                  # Componentized cards (Service cards, blog posts cards)
│   └── forms/                  # Componentized interactive forms
│
├── sections/                   # High-level page-specific sections
│   ├── home/                   # Hero, Features, CTA blocks specific to Home
│   ├── services/               # Large service page sections
│   ├── solutions/              # Large solutions page sections
│   ├── platforms/              # Platform detail sections
│   ├── case-studies/           # Case study breakdown blocks
│   └── contact/                # Contact and Map details sections
│
├── data/                       # Local data stores for hydration (JSON-style configs)
│   ├── navigation.ts           # Header, mobile menu, and footer link setups
│   ├── services.ts             # Service lists and feature breakdowns
│   ├── platforms.ts            # Supported TV/Mobile devices
│   ├── features.ts             # Global features list
│   ├── faqs.ts                 # Support FAQ lists
│   ├── case-studies.ts         # Portfolio list metadata
│   └── blog.ts                 # Blog post items
│
├── constants/                  # Constant configuration records
│   ├── site.ts                 # Brand details (URLs, contact, email, SEO defaults)
│   └── routes.ts               # Application routes dictionary (No hardcoded href strings)
│
├── lib/                        # Helpers, core API configurations
│   ├── utils.ts                # Class merging utility (cn helper)
│   └── seo.ts                  # Metadata wrapper generator
│
└── types/                      # Shared TypeScript interface models
    └── index.ts
```

---

## 🎨 Theme Rules

1. **Strictly Light Theme**: This application is built as a pure light-themed experience. 
2. **No dark classes**: Avoid using the `dark:` variant modifier.
3. **No toggles**: Do not implement theme switcher buttons, auto-detection from system preferences, or dark context wrappers.
4. **Color Tokens**: Utilize theme-extended CSS variables from `globals.css` (e.g. `bg-background`, `text-foreground`, `text-primary`, `border-border`).

---

## 📐 Coding Conventions

* **Page Sections**: Never write giant inline markup structures inside `app/(site)/**/page.tsx`. Break sections down into files under `sections/<page-name>/` and import them into the page.
* **Reusable UI**: Keep `components/` clean and completely separate from `sections/`. `components/` are generic and abstract (e.g., button wrappers, cards, form inputs) while `sections/` are structured layout blocks containing page copy.
* **Data Hydration**: Keep copy out of the TSX markups. Put lists, text copy, images paths, and FAQ answers into the files under `src/data/` so they can easily be ported to a CMS later.
* **SEO**: Every new route file under `app/` should export a `metadata` object using the `getMetadata` helper in `src/lib/seo.ts`.
