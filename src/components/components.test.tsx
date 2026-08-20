import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { AdmissionsCard } from "./AdmissionsCard";
import { ContactGrid } from "./ContactGrid";
import { Footer } from "./Footer";
import App from "../App";
import { school } from "../data/school";
import { buildWhatsAppUrl, buildTelUrl } from "../lib/contact";

describe("UI Components", () => {
  describe("Header component", () => {
    it("renders the school name and crest logo", () => {
      const html = renderToString(<Header />);
      expect(html).toContain(school.name);
      expect(html).toContain('src="/logo.png"');
      expect(html).toContain('alt="Presvill Academy Crest"');
    });

    it("renders the under construction status badge with accessible role", () => {
      const html = renderToString(<Header />);
      expect(html).toContain("Website Under Construction");
      expect(html).toContain("Opening Soon");
      expect(html).toContain('role="status"');
    });
  });

  describe("Hero component", () => {
    it("renders the primary headline and mission narrative", () => {
      const html = renderToString(<Hero />);
      expect(html).toContain("Excellence in Education.");
      expect(html).toContain("Shaping Tomorrow&#x27;s Leaders.");
      expect(html).toContain("Presvill Academy is currently preparing our comprehensive digital home.");
    });

    it("renders all academic level badges from school data", () => {
      const html = renderToString(<Hero />);
      for (const level of school.academicLevels) {
        expect(html).toContain(level);
      }
    });
  });

  describe("AdmissionsCard component", () => {
    it("renders the current academic session badge and headline", () => {
      const html = renderToString(<AdmissionsCard />);
      expect(html).toContain(`${school.session} Academic Session`);
      expect(html).toContain("Admissions &amp; Enrollment Inquiries Are Open");
    });

    it("renders the direct WhatsApp link with prefilled inquiry message and display number", () => {
      const html = renderToString(<AdmissionsCard />);
      const expectedUrl = buildWhatsAppUrl(
        school.whatsapp.value,
        `Hello ${school.name}, I would like to make an inquiry regarding admissions for the ${school.session} academic session.`
      );
      expect(html).toContain(`href="${expectedUrl.replace(/&/g, "&amp;")}"`);
      expect(html).toContain(school.whatsapp.display);
    });

    it("includes accessible aria-label with new tab indicator", () => {
      const html = renderToString(<AdmissionsCard />);
      expect(html).toContain(`aria-label="Inquire on WhatsApp with admissions (${school.whatsapp.display}) (opens in a new tab)"`);
    });

    it("includes the 'group' class on the CTA link for hover micro-interaction", () => {
      const html = renderToString(<AdmissionsCard />);
      expect(html).toContain("group ");
    });
  });

  describe("ContactGrid component", () => {
    it("renders all 4 contact cards", () => {
      const html = renderToString(<ContactGrid />);
      expect(html).toContain("WhatsApp Chat");
      expect(html).toContain("Direct Phone Lines");
      expect(html).toContain("Email Inquiry");
      expect(html).toContain("Campus Location");
    });

    it("renders WhatsApp link with valid wa.me URI and display phone and new tab accessibility hint", () => {
      const html = renderToString(<ContactGrid />);
      expect(html).toContain("https://wa.me/2347082238793");
      expect(html).toContain(school.whatsapp.display);
      expect(html).toContain(`aria-label="Chat with Presvill Academy Admissions on WhatsApp at ${school.whatsapp.display} (opens in a new tab)"`);
    });

    it("renders both primary and alternate phone numbers with tel: URIs and labels", () => {
      const html = renderToString(<ContactGrid />);
      const primaryTel = buildTelUrl(school.phone.value);
      const altTel = buildTelUrl(school.phoneAlt.value);
      expect(html).toContain(`href="${primaryTel}"`);
      expect(html).toContain(school.phone.display);
      expect(html).toContain(`aria-label="Call primary phone line: ${school.phone.display}"`);
      expect(html).toContain(`href="${altTel}"`);
      expect(html).toContain(school.phoneAlt.display);
      expect(html).toContain(`aria-label="Call alternate phone line: ${school.phoneAlt.display}"`);
    });

    it("renders direct email mailto link and label", () => {
      const html = renderToString(<ContactGrid />);
      expect(html).toContain(`href="mailto:${school.email.value}`);
      expect(html).toContain(school.email.display);
      expect(html).toContain('aria-label="Send email to presvillacademy@gmail.com"');
    });

    it("renders Google Maps external link with new tab indicator and physical address", () => {
      const html = renderToString(<ContactGrid />);
      expect(html).toContain(school.address.street);
      expect(html).toContain(school.address.city);
      expect(html).toContain(school.address.state);
      expect(html).toContain(school.address.postalCode);
      expect(html).toContain(school.address.country);
      expect(html).toContain(`href="${school.mapsUrl.replace(/&/g, "&amp;")}"`);
      expect(html).toContain('target="_blank"');
      expect(html).toContain('aria-label="View Presvill Academy campus location on Google Maps (opens in a new tab)"');
    });
  });

  describe("Footer component", () => {
    it("renders semantic footer with copyright and full school details", () => {
      const html = renderToString(<Footer />);
      expect(html).toContain("<footer");
      expect(html).toContain("© 2026");
      expect(html).toContain(school.name);
      expect(html).toContain("All rights reserved");
      expect(html).toContain(school.address.street);
      expect(html).toContain(school.address.city);
      expect(html).toContain(school.address.state);
      expect(html).toContain(school.address.country);
    });
  });

  describe("App integration", () => {
    it("renders complete integrated landing page with landmarks and skip link", () => {
      const html = renderToString(<App />);
      expect(html).toContain("Skip to main content");
      expect(html).toContain('href="#main-content"');
      expect(html).toContain('<main id="main-content"');
      expect(html).toContain("<header");
      expect(html).toContain("<footer");
      expect(html).toContain(school.name);
      expect(html).toContain("Excellence in Education.");
      expect(html).toContain("Admissions &amp; Enrollment Inquiries Are Open");
      expect(html).toContain("Direct Contact &amp; Campus Access");
    });
  });
});
