import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { AdmissionsCard } from "./AdmissionsCard";
import { school } from "../data/school";
import { buildWhatsAppUrl } from "../lib/contact";

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
      // Ensure the href contains the expected wa.me URL
      expect(html).toContain(`href="${expectedUrl.replace(/&/g, "&amp;")}"`);
      expect(html).toContain(school.whatsapp.display);
    });
  });
});
