import { describe, it, expect } from "vitest";
import {
  formatE164Phone,
  buildWhatsAppUrl,
  buildTelUrl,
  buildMailtoUrl,
} from "./contact";

describe("Contact Utilities", () => {
  describe("formatE164Phone", () => {
    it("formats Nigerian local mobile number to E.164", () => {
      expect(formatE164Phone("0708 223 8793")).toBe("+2347082238793");
      expect(formatE164Phone("08182842919")).toBe("+2348182842919");
      expect(formatE164Phone("+234 708 223 8793")).toBe("+2347082238793");
    });

    it("handles digits with special characters, parentheses, and dashes", () => {
      expect(formatE164Phone("(0708) 223-8793")).toBe("+2347082238793");
      expect(formatE164Phone("+234-818-284-2919")).toBe("+2348182842919");
    });

    it("handles bare international country code prefix", () => {
      expect(formatE164Phone("2347082238793")).toBe("+2347082238793");
    });

    it("returns empty string when given empty or non-numeric input", () => {
      expect(formatE164Phone("")).toBe("");
      expect(formatE164Phone("abc")).toBe("");
    });
  });

  describe("buildWhatsAppUrl", () => {
    it("builds valid WhatsApp direct chat URL with encoded text", () => {
      const url = buildWhatsAppUrl(
        "+2347082238793",
        "Hello Presvill Academy, I would like to inquire about admissions."
      );
      expect(url).toBe(
        "https://wa.me/2347082238793?text=Hello%20Presvill%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
      );
    });

    it("builds valid WhatsApp direct chat URL without prefilled text", () => {
      const url = buildWhatsAppUrl("+2347082238793");
      expect(url).toBe("https://wa.me/2347082238793");
    });

    it("normalizes local phone number input automatically", () => {
      const url = buildWhatsAppUrl("0708 223 8793");
      expect(url).toBe("https://wa.me/2347082238793");
    });

    it("ignores whitespace-only message parameter", () => {
      const url = buildWhatsAppUrl("+2347082238793", "   ");
      expect(url).toBe("https://wa.me/2347082238793");
    });
  });

  describe("buildTelUrl", () => {
    it("generates telephone URI formatted to E.164", () => {
      expect(buildTelUrl("0708 223 8793")).toBe("tel:+2347082238793");
      expect(buildTelUrl("0818 284 2919")).toBe("tel:+2348182842919");
      expect(buildTelUrl("+234 708 223 8793")).toBe("tel:+2347082238793");
    });
  });

  describe("buildMailtoUrl", () => {
    it("generates standard mailto URI without subject", () => {
      expect(buildMailtoUrl("presvillacademy@gmail.com")).toBe(
        "mailto:presvillacademy@gmail.com"
      );
    });

    it("generates mailto URI with encoded subject parameter", () => {
      expect(
        buildMailtoUrl(
          "presvillacademy@gmail.com",
          "Admissions Inquiry 2026/2027"
        )
      ).toBe(
        "mailto:presvillacademy@gmail.com?subject=Admissions%20Inquiry%202026%2F2027"
      );
    });
  });
});
