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
      expect(formatE164Phone("0708 223 8794")).toBe("+2347082238794");
      expect(formatE164Phone("08182842919")).toBe("+2348182842919");
      expect(formatE164Phone("+234 708 223 8794")).toBe("+2347082238794");
    });

    it("handles digits with special characters, parentheses, and dashes", () => {
      expect(formatE164Phone("(0708) 223-8794")).toBe("+2347082238794");
      expect(formatE164Phone("+234-818-284-2919")).toBe("+2348182842919");
    });

    it("handles trunk zero notation in international format", () => {
      expect(formatE164Phone("+234 (0) 708 223 8794")).toBe("+2347082238794");
      expect(formatE164Phone("+234(0)8182842919")).toBe("+2348182842919");
    });

    it("handles bare international country code prefix", () => {
      expect(formatE164Phone("2347082238794")).toBe("+2347082238794");
    });

    it("returns empty string when given empty or non-numeric input", () => {
      expect(formatE164Phone("")).toBe("");
      expect(formatE164Phone("abc")).toBe("");
    });
  });

  describe("buildWhatsAppUrl", () => {
    it("builds valid WhatsApp direct chat URL with encoded text", () => {
      const url = buildWhatsAppUrl(
        "+2347082238794",
        "Hello Presvill Academy, I would like to inquire about admissions.",
      );
      expect(url).toBe(
        "https://wa.me/2347082238794?text=Hello%20Presvill%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20admissions.",
      );
    });

    it("builds valid WhatsApp direct chat URL without prefilled text", () => {
      const url = buildWhatsAppUrl("+2347082238794");
      expect(url).toBe("https://wa.me/2347082238794");
    });

    it("normalizes local phone number input automatically", () => {
      const url = buildWhatsAppUrl("0708 223 8794");
      expect(url).toBe("https://wa.me/2347082238794");
    });

    it("ignores whitespace-only message parameter", () => {
      const url = buildWhatsAppUrl("+2347082238794", "   ");
      expect(url).toBe("https://wa.me/2347082238794");
    });
  });

  describe("buildTelUrl", () => {
    it("generates telephone URI formatted to E.164", () => {
      expect(buildTelUrl("0708 223 8794")).toBe("tel:+2347082238794");
      expect(buildTelUrl("0818 284 2919")).toBe("tel:+2348182842919");
      expect(buildTelUrl("+234 708 223 8794")).toBe("tel:+2347082238794");
    });
  });

  describe("buildMailtoUrl", () => {
    it("generates standard mailto URI without subject", () => {
      expect(buildMailtoUrl("presvillacademy@gmail.com")).toBe(
        "mailto:presvillacademy@gmail.com",
      );
    });

    it("generates mailto URI with encoded subject parameter", () => {
      expect(
        buildMailtoUrl(
          "presvillacademy@gmail.com",
          "Admissions Inquiry 2026/2027",
        ),
      ).toBe(
        "mailto:presvillacademy@gmail.com?subject=Admissions%20Inquiry%202026%2F2027",
      );
    });
  });
});
