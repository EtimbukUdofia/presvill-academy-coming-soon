const NIGERIA_DIALLING_CODE = "234";

/**
 * Normalizes a phone number to standard international E.164 format (+234...).
 *
 * Handles:
 * - Local Nigerian format: "0708 223 8794" -> "+2347082238794"
 * - Compact local format: "08182842919" -> "+2348182842919"
 * - International with spaces/symbols: "+234 708 223 8794" -> "+2347082238794"
 * - International with trunk zero: "+234 (0) 708 223 8794" -> "+2347082238794"
 * - Clean international digits: "2347082238794" -> "+2347082238794"
 */
export function formatE164Phone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";

  if (digits.startsWith(`${NIGERIA_DIALLING_CODE}0`)) {
    return `+${NIGERIA_DIALLING_CODE}${digits.slice(NIGERIA_DIALLING_CODE.length + 1)}`;
  }
  if (digits.startsWith(NIGERIA_DIALLING_CODE)) {
    return `+${digits}`;
  }
  if (digits.startsWith("0")) {
    return `+${NIGERIA_DIALLING_CODE}${digits.slice(1)}`;
  }
  return `+${digits}`;
}

/**
 * Builds a direct WhatsApp chat URL with optional pre-filled message text.
 * wa.me requires international digits without the leading '+' sign.
 */
export function buildWhatsAppUrl(phone: string, text?: string): string {
  const e164 = formatE164Phone(phone);
  const cleanDigits = e164.replace(/^\+/, "");
  const baseUrl = `https://wa.me/${cleanDigits}`;

  if (text && text.trim().length > 0) {
    return `${baseUrl}?text=${encodeURIComponent(text.trim())}`;
  }

  return baseUrl;
}

/**
 * Builds a telephone URI for one-tap calling.
 */
export function buildTelUrl(phone: string): string {
  return `tel:${formatE164Phone(phone)}`;
}

/**
 * Builds a mailto URI with optional pre-filled subject line.
 */
export function buildMailtoUrl(email: string, subject?: string): string {
  const base = `mailto:${email.trim()}`;
  if (subject && subject.trim().length > 0) {
    return `${base}?subject=${encodeURIComponent(subject.trim())}`;
  }
  return base;
}
