# Presvill Academy — Coming Soon / Under Construction Web Project Design

**Date:** 2026-08-20  
**Target Repository:** `/home/hazzel/Documents/dev/presvill-coming-soon`  
**Target Domain:** `https://presvillacademy.com`  
**Deployment Platform:** Cloudflare Pages  

---

## 1. Executive Summary & Purpose

Presvill Academy is a premier private institution located at **18 Abel Damina Way, Uyo, Akwa Ibom, Nigeria**, providing education across Creche, Pre-School, Grade School, and High School levels.

While the comprehensive institutional website is under construction, this standalone "Coming Soon / Under Construction" web project will be deployed immediately to `https://presvillacademy.com`. It provides:
1. An authoritative institutional placeholder that confirms the school's official digital presence.
2. A direct conversion hub for prospective parents to contact admissions for the **2026/2027 Academic Session**.
3. Instant one-tap access to WhatsApp, phone calls, email, and Google Maps directions to the physical campus.
4. Comprehensive SEO, OpenGraph social sharing preview, and LocalBusiness / EducationalOrganization structured data.

---

## 2. Technical Stack & Architecture

- **Runtime & Bundler:** Vite with React 19 + TypeScript (Strict Mode).
- **Styling:** Tailwind CSS with custom theme extensions for Presvill brand colors.
  - Primary Brand Orange: `#FF6A00`
  - Base Dark Neutrals: Slate-950 (`#020617`), Slate-900 (`#0f172a`), Slate-800 (`#1e293b`)
  - Accent / Text Neutrals: Slate-100, Slate-300, Slate-400
- **Icons:** `lucide-react` (Accessible SVG icons for phone, chat, location, email, school, external links).
- **SEO & Social Share:** HTML5 semantic tags, OpenGraph protocol, Twitter Cards, Schema.org `EducationalOrganization` JSON-LD.
- **Production Build:** `npm run build` targeting `dist/` for Cloudflare Pages zero-configuration deployment.

---

## 3. Directory Layout

```text
/home/hazzel/Documents/dev/presvill-coming-soon/
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-08-20-coming-soon-page-design.md
├── public/
│   ├── _headers            # Cloudflare Pages HTTP security & caching headers
│   ├── favicon.ico
│   ├── logo.png            # Official Presvill Academy crest
│   ├── og-image.png        # Social share banner (1200x630)
│   └── robots.txt          # Search engine crawler permissions
├── src/
│   ├── components/
│   │   ├── Header.tsx      # School crest and "Website Under Construction" badge
│   │   ├── Hero.tsx        # Institution headline, mission statement, academic tiers
│   │   ├── AdmissionsCard.tsx # 2026/2027 session status & WhatsApp fast-action
│   │   ├── ContactGrid.tsx # Interactive action cards (WhatsApp, Call, Email, Maps)
│   │   └── Footer.tsx      # Physical address summary, copyright, and disclaimers
│   ├── data/
│   │   └── school.ts       # Centralized, typed institutional constants
│   ├── lib/
│   │   └── contact.ts      # E.164 phone and WhatsApp URI formatters
│   ├── types/
│   │   └── index.ts        # TypeScript data definitions
│   ├── App.tsx             # Main page container and visual background glows
│   ├── index.css           # Tailwind CSS directives and custom styling
│   └── main.tsx            # React application entrypoint
├── index.html              # HTML shell with meta tags & Schema.org JSON-LD
├── package.json            # Scripts, React, Tailwind & Vite dependencies
├── tsconfig.json           # Strict TypeScript configuration
├── tsconfig.app.json       # App TypeScript configuration
├── tsconfig.node.json      # Node/Vite TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 4. UI Components & Content Details

### 4.1 Header (`Header.tsx`)
- Displays the official Presvill Academy crest (`/logo.png`) with responsive dimensions.
- Displays a status pill badge with a subtle pulsing orange glow: `"Official Website Under Construction • Opening Soon"`.

### 4.2 Hero Section (`Hero.tsx`)
- Headline: *"Excellence in Education. Shaping Tomorrow's Leaders."*
- Subheading: *"Presvill Academy is currently preparing our comprehensive digital home. In the meantime, our campus is open and our admissions team is ready to assist you."*
- Academic Levels Badge Row:
  - Creche
  - Pre-School
  - Grade School (Grades 1 – 6)
  - High School (JSS 1 – JSS 2)

### 4.3 Admissions Advisory (`AdmissionsCard.tsx`)
- Highlights the **2026/2027 Academic Session**.
- Clearly states: *"Admissions and enrollment inquiries are currently open for new students."*
- Primary CTA Button: Direct WhatsApp chat with admissions (`+234 708 223 8793`) preloaded with an inquiry message.

### 4.4 Quick-Action Contact Grid (`ContactGrid.tsx`)
Four high-contrast, mobile-first cards:
1. **WhatsApp Chat:** One-click launch to WhatsApp on mobile or web with international E.164 format.
2. **Telephone Lines:** Direct call links to `0708 223 8793` and `0818 284 2919`.
3. **Email Inquiry:** Mailto link to `presvillacademy@gmail.com`.
4. **Campus Location:** Displays `18 Abel Damina Way, Uyo 520102, Akwa Ibom, Nigeria` linking directly to the Google Maps place listing.

### 4.5 Footer (`Footer.tsx`)
- Copyright notice: `© 2026 Presvill Academy. All rights reserved.`
- Address & accreditation note.

---

## 5. Centralized Data Architecture (`src/data/school.ts`)

```typescript
export interface SchoolInfo {
  name: string;
  shortName: string;
  domain: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
  mapsUrl: string;
  phone: { value: string };
  phoneAlt: { value: string };
  email: { value: string };
  whatsapp: { value: string; display: string };
  session: string;
  academicLevels: string[];
}
```

---

## 6. Verification and Quality Assurance Plan

1. **TypeScript Compilation:** `npx tsc --noEmit` must pass with zero errors.
2. **Build Output:** `npm run build` must produce a production-ready `dist/` directory with clean assets.
3. **Mobile & Desktop Responsiveness:** Verify layout fluidity across 360px (mobile), 768px (tablet), and 1280px+ (desktop).
4. **Link Normalization:** Verify that `tel:`, `mailto:`, `https://wa.me/`, and Google Maps links fire valid protocols.
5. **SEO & Accessibility:** Proper heading hierarchy (`h1`, `h2`, `h3`), alt tags on images, semantic `<header>`, `<main>`, `<section>`, `<footer>` elements.
