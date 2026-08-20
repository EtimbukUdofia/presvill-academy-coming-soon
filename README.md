# Presvill Academy — Official Coming Soon Portal

[![Production Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-blue.svg)]()
[![Testing Suite](https://img.shields.io/badge/tests-30%20passed-success.svg)]()
[![Cloudflare Pages](https://img.shields.io/badge/deploy-Cloudflare%20Pages-orange.svg)]()

The official, production-ready **Coming Soon** web portal for **Presvill Academy**, a premier private co-educational institution located in Uyo, Akwa Ibom State, Nigeria.

This portal announces the upcoming launch of the school's digital home, publicizes active enrollment for the **2026/2027 Academic Session**, and provides verified direct communication channels for prospective parents and guardians across Creche, Pre-School, Grade School, and High School levels.

---

## 🌟 Features & Highlights

- **Admissions Spotlight**: Clear enrollment callout for the 2026/2027 academic year with pre-filled WhatsApp inquiry integration.
- **Direct Multi-Channel Contact Grid**:
  - **WhatsApp Chat**: One-click direct messaging to the admissions desk (`0708 223 8793`).
  - **Direct Telephone Lines**: Click-to-call links for both Primary (`0708 223 8793`) and Alternate (`0818 284 2919`) administrative lines.
  - **Official Email Desk**: Direct `mailto:` link with pre-populated inquiry subject (`presvillacademy@gmail.com`).
  - **Campus Navigation**: Direct Google Maps geolocation link to `18 Abel Damina Way, Uyo, Akwa Ibom State`.
- **Institutional Design System**: Polished dark theme built on Tailwind CSS v4, featuring brand orange accents (`#FF6A00`), subtle radial gradients, frosted glassmorphism, and responsive typography (Outfit + Plus Jakarta Sans).
- **SEO & Social Discovery**:
  - OpenGraph 1200x630 sharing card (`og-image.png`) with title, description, and canonical URL.
  - Twitter Card (`summary_large_image`) meta tags.
  - Schema.org `EducationalOrganization` JSON-LD structured data for search engines.
  - Public `robots.txt` crawler indexing policy.
- **Enterprise Security & Cloudflare Optimizations**:
  - `public/_headers` defining strict HSTS (`Strict-Transport-Security`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and asset caching headers.
- **Accessibility (WCAG 2.1 AA)**:
  - Skip-to-content anchor navigation (`#main-content`).
  - Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`).
  - Screen reader announcements (`aria-label`, `(opens in a new tab)` hints, `role="status"` for the construction badge).
  - High contrast text combinations meeting accessibility standards.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component-driven UI architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict) | Full static type safety and contract enforcement |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible SVG iconography |
| **Testing** | [Vitest](https://vitest.dev/) | Fast unit and component test runner with server-side rendering |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global edge static hosting with instant SSL and custom headers |

---

## 📁 Project Structure

```
presvill-coming-soon/
├── .github/                      # CI/CD and repository workflows
├── public/                       # Static public assets (copied directly to dist/)
│   ├── _headers                  # Cloudflare Pages security & caching headers
│   ├── logo.png                  # Presvill Academy crest logo
│   ├── og-image.png              # Social sharing preview banner (1200x630)
│   └── robots.txt                # Search engine crawler directives
├── src/
│   ├── components/               # UI components
│   │   ├── AdmissionsCard.tsx    # Admissions announcement & WhatsApp CTA
│   │   ├── ContactGrid.tsx       # 4-card interactive contact channel grid
│   │   ├── Footer.tsx            # Semantic footer with brand & legal details
│   │   ├── Header.tsx            # Header with crest and live status badge
│   │   ├── Hero.tsx              # Primary mission headline & academic tier badges
│   │   └── components.test.tsx   # Component rendering and accessibility tests
│   ├── data/
│   │   └── school.ts             # Central source of truth for school contact & info
│   ├── lib/
│   │   ├── contact.ts            # URL builders (WhatsApp, tel, mailto, maps)
│   │   ├── contact.test.ts       # Contact sanitization and link builder unit tests
│   │   ├── utils.ts              # Class name composition utility (clsx + tailwind-merge)
│   │   └── utils.test.ts         # Utility function unit tests
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces for school data contracts
│   ├── App.tsx                   # Main application layout with skip link
│   ├── index.css                 # Global CSS and Tailwind font/color utilities
│   └── main.tsx                  # React DOM client entrypoint
├── dist/                         # Production build output (generated)
├── index.html                    # HTML entry point with meta tags & JSON-LD
├── package.json                  # Dependencies and project scripts
├── tsconfig.json                 # Strict TypeScript configuration
└── vite.config.ts                # Vite build and Vitest test runner configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher; LTS recommended)
- [npm](https://www.npmjs.com/) (version `9.0.0` or higher)

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/EtimbukUdofia/presvill-academy-coming-soon.git
cd presvill-academy-coming-soon
npm install
```

### 2. Local Development Server

Start the local Vite development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### 3. Running Tests

Run the complete Vitest test suite covering contact link sanitizers, UI component rendering, and accessibility semantics:

```bash
# Run tests once
npm run test

# Run tests in watch mode
npx vitest

# Run tests with UI coverage
npx vitest --coverage
```

### 4. Type Checking & Production Build

Verify TypeScript strict types and produce a production-ready bundle in the `dist/` directory:

```bash
# Type check and build
npm run build

# Preview the production build locally
npm run preview
```

The build output in `dist/` will contain minified, fingerprinted static assets ready for deployment.

---

## 🌐 Cloudflare Pages Deployment

This project is configured for deployment on **Cloudflare Pages**.

### Cloudflare Pages Build Configuration

When connecting your Git repository to Cloudflare Pages, configure the following build settings:

| Setting | Recommended Value |
| :--- | :--- |
| **Framework preset** | `Vite` (or `None`) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty or default) |
| **Node.js Version** | `20.x` (or `18.x`) via Environment Variable `NODE_VERSION = 20` |

### Static Artifacts Deployed

The build process automatically outputs all necessary Cloudflare assets:
1. `dist/_headers`: Configures HTTP response headers on Cloudflare's edge:
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
   - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
   - Cache policies for `/logo.png`, `/og-image.png`, and `/robots.txt`.
2. `dist/robots.txt`: Search crawler directives allowing full indexing.
3. `dist/logo.png` & `dist/og-image.png`: High-resolution branding and social cards.
4. `dist/index.html`: Fully rendered document with Schema.org JSON-LD structured data.

---

## 🏫 Official School Contact Information

| Channel | Detail | Note |
| :--- | :--- | :--- |
| **Institution** | Presvill Academy | Co-educational (Creche to High School) |
| **Academic Session** | 2026/2027 | Admissions inquiries actively open |
| **Primary Phone & WhatsApp** | `+234 708 223 8793` (`0708 223 8793`) | Direct Admissions Line |
| **Alternate Phone** | `+234 818 284 2919` (`0818 284 2919`) | Administrative Office |
| **Official Email** | `presvillacademy@gmail.com` | Official Admissions Desk |
| **Campus Address** | 18 Abel Damina Way, Uyo 520102, Akwa Ibom State, Nigeria | [Google Maps Directions](https://maps.google.com/?q=18+Abel+Damina+Way,+Uyo,+Akwa+Ibom+State,+Nigeria) |

---

## 📄 License & Copyright

Copyright &copy; 2026 **Presvill Academy**. All rights reserved.

