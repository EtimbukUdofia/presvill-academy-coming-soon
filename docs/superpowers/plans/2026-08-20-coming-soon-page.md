# Presvill Academy Coming Soon Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create, style, and build a standalone, production-ready Coming Soon / Under Construction web application for Presvill Academy with full branding, 2026/2027 admissions advisory, direct parent contact channels (WhatsApp, Phone, Email, Google Maps), and Cloudflare Pages deployment configuration.

**Architecture:** A lightweight React + TypeScript application bundled with Vite and styled with Tailwind CSS. Centralized typed configuration stores school contact details, campus address, and admissions state, while dedicated accessible components render a high-contrast institutional hero and interactive action grid.

**Tech Stack:** React 19 / 18, Vite, TypeScript, Tailwind CSS, Lucide React, Cloudflare Pages static output.

**Spec:** `docs/superpowers/specs/2026-08-20-coming-soon-page-design.md`

## Global Constraints

- Root workspace: `/home/hazzel/Documents/dev/presvill-coming-soon`
- Target domain: `https://presvillacademy.com`
- Primary brand orange: `#FF6A00`
- Physical address: `18 Abel Damina Way, Uyo 520102, Akwa Ibom, Nigeria`
- Primary phone: `0708 223 8794`
- Alternate phone: `0818 284 2919`
- Email: `presvillacademy@gmail.com`
- WhatsApp: `+234 708 223 8794`
- Current academic session: `2026/2027`
- TypeScript: strict mode (`tsc -b`), zero build warnings
- Zero fabricated school content; unconfirmed data must not be invented

---

### Task 1: Project Scaffolding & Configuration

**Files:**

- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/index.css`
- Create: `public/_headers`
- Create: `public/robots.txt`
- Copy: `public/logo.png` and `public/og-image.png` from `../presvill-academy/public/`

**Interfaces:**

- Produces: Base Vite + React + Tailwind toolchain with Cloudflare Pages headers and public brand assets.

- [ ] **Step 1: Create `package.json` and install dependencies**

```json
{
  "name": "presvill-academy-coming-soon",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^1.16.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.0.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/node": "^22.13.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.3",
    "vite": "^6.1.0",
    "vitest": "^3.0.5"
  }
}
```

- [ ] **Step 2: Create TypeScript configurations (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`) and `vite.config.ts`**

Configure strict TypeScript and `@tailwindcss/vite` plugin.

- [ ] **Step 3: Create `index.html` with OpenGraph meta tags, Google Fonts (Plus Jakarta Sans & Outfit), and Schema.org JSON-LD**

Include viewport, canonical link, social tags, and structured data.

- [ ] **Step 4: Create `src/index.css` and `public/` assets (`_headers`, `robots.txt`, `logo.png`, `og-image.png`)**

Copy brand logo and og-image from the main academy project. Configure Cloudflare security headers.

- [ ] **Step 5: Run `npm install` and verify Vite environment runs**

Run: `npm install && npx vite --version`
Expected: Dependencies installed cleanly.

- [ ] **Step 6: Commit**

```bash
git add package.json tsconfig*.json vite.config.ts index.html src/index.css public/
git commit -m "chore: scaffold vite react tailwind project with assets and configuration"
```

---

### Task 2: Data Models, Centralized Constants & Contact Normalization

**Files:**

- Create: `src/types/index.ts`
- Create: `src/lib/contact.ts`
- Create: `src/lib/contact.test.ts`
- Create: `src/data/school.ts`

**Interfaces:**

- Produces: `SchoolInfo` type interface, `school` constant object, `formatE164Phone(raw: string): string`, `buildWhatsAppUrl(phone: string, text?: string): string`.

- [ ] **Step 1: Write failing test in `src/lib/contact.test.ts`**

```typescript
import { describe, it, expect } from "vitest";
import { formatE164Phone, buildWhatsAppUrl } from "./contact";

describe("Contact Utilities", () => {
  it("formats Nigerian local mobile number to E.164", () => {
    expect(formatE164Phone("0708 223 8794")).toBe("+2347082238794");
    expect(formatE164Phone("08182842919")).toBe("+2348182842919");
    expect(formatE164Phone("+234 708 223 8794")).toBe("+2347082238794");
  });

  it("builds valid WhatsApp direct chat URL with encoded text", () => {
    const url = buildWhatsAppUrl(
      "+2347082238794",
      "Hello Presvill Academy, I would like to inquire about admissions.",
    );
    expect(url).toContain("https://wa.me/2347082238794");
    expect(url).toContain("text=Hello%20Presvill%20Academy");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL with module/function not defined.

- [ ] **Step 3: Implement `src/types/index.ts`, `src/lib/contact.ts`, and `src/data/school.ts`**

Implement `formatE164Phone`, `buildWhatsAppUrl`, and centralized `school` data structure.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS (all tests green).

- [ ] **Step 5: Commit**

```bash
git add src/types/index.ts src/lib/contact.ts src/lib/contact.test.ts src/data/school.ts
git commit -m "feat: add school data models and contact link normalization utilities"
```

---

### Task 3: Header, Hero, and Admissions UI Components

**Files:**

- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/AdmissionsCard.tsx`

**Interfaces:**

- Consumes: `school` from `../data/school`, `buildWhatsAppUrl` from `../lib/contact`.
- Produces: `Header`, `Hero`, `AdmissionsCard` presentation components.

- [ ] **Step 1: Implement `src/components/Header.tsx`**

Render Presvill crest logo, school name, and "Website Under Construction • Opening Soon" pill badge with pulsing orange indicator.

- [ ] **Step 2: Implement `src/components/Hero.tsx`**

Render the primary mission headline, welcoming narrative, and badges for Creche, Pre-School, Grade School, and High School.

- [ ] **Step 3: Implement `src/components/AdmissionsCard.tsx`**

Render the 2026/2027 academic session banner, inquiry instructions, and direct WhatsApp inquiry button with Lucide icon.

- [ ] **Step 4: Verify type safety with TypeScript**

Run: `npx tsc --noEmit`
Expected: Zero type errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Hero.tsx src/components/AdmissionsCard.tsx
git commit -m "feat: add Header, Hero, and AdmissionsCard components"
```

---

### Task 4: Contact Grid, Footer, and App Page Integration

**Files:**

- Create: `src/components/ContactGrid.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/App.tsx`
- Create: `src/main.tsx`

**Interfaces:**

- Consumes: `Header`, `Hero`, `AdmissionsCard`, `school` data, `formatE164Phone`.
- Produces: Full interactive Coming Soon landing page.

- [ ] **Step 1: Implement `src/components/ContactGrid.tsx`**

Create 4 interactive action cards:

1. WhatsApp chat card with direct link
2. Direct phone call card with both primary and secondary phone lines
3. Direct email inquiry card
4. Physical campus location card with Google Maps link

- [ ] **Step 2: Implement `src/components/Footer.tsx`**

Create accessible footer with copyright year, physical address line, and official contact notice.

- [ ] **Step 3: Implement `src/App.tsx` and `src/main.tsx`**

Assemble components with radial brand orange background ambient glow effects, responsive padding, and container widths.

- [ ] **Step 4: Verify full application build**

Run: `npm run build`
Expected: Successful build producing `dist/`.

- [ ] **Step 5: Commit**

```bash
git add src/components/ContactGrid.tsx src/components/Footer.tsx src/App.tsx src/main.tsx
git commit -m "feat: assemble complete coming soon landing page with contact grid and footer"
```

---

### Task 5: Production Build Validation & Quality Verification

**Files:**

- Modify: `README.md` (Update project docs and local dev instructions)

- [ ] **Step 1: Run complete test suite and production build**

Run: `npm run test && npm run build`
Expected: Tests pass and `dist/` is generated cleanly without errors.

- [ ] **Step 2: Verify `dist/` artifacts and Cloudflare Pages compatibility**

Verify existence of `dist/index.html`, `dist/_headers`, `dist/robots.txt`, `dist/logo.png`, `dist/og-image.png`.

- [ ] **Step 3: Update `README.md` with build and deployment instructions**

- [ ] **Step 4: Commit and tag initial release**

```bash
git add README.md
git commit -m "docs: document coming soon project setup and deployment guidelines"
```
