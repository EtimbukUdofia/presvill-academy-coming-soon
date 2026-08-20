import type { SchoolInfo } from "../types";

/**
 * Centralized Presvill Academy institution metadata and verified contact details.
 *
 * All contact information is confirmed and strictly adheres to official school records.
 * Numbers are stored in their familiar local/display format, while link normalization
 * helpers in `src/lib/contact.ts` handle international E.164 and WhatsApp protocols.
 */
export const school: SchoolInfo = {
  name: "Presvill Academy",
  shortName: "Presvill",
  domain: "https://presvillacademy.com",
  address: {
    street: "18 Abel Damina Way",
    city: "Uyo",
    postalCode: "520102",
    state: "Akwa Ibom",
    country: "Nigeria",
  },
  mapsUrl:
    "https://maps.google.com/?cid=9788194298875879912&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
  phone: {
    value: "0708 223 8793",
    display: "0708 223 8793",
  },
  phoneAlt: {
    value: "0818 284 2919",
    display: "0818 284 2919",
  },
  email: {
    value: "presvillacademy@gmail.com",
    display: "presvillacademy@gmail.com",
  },
  whatsapp: {
    value: "+234 708 223 8793",
    display: "+234 708 223 8793",
  },
  session: "2026/2027",
  academicLevels: [
    "Creche",
    "Pre-School",
    "Grade School (Grades 1 – 6)",
    "High School (JSS 1 – JSS 2)",
  ],
};
