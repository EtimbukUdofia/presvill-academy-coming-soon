import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    expect(cn("px-2 py-1", "bg-red-500")).toBe("px-2 py-1 bg-red-500");
  });

  it("handles conditional class names", () => {
    expect(cn("px-2", false && "bg-red-500", true && "text-white")).toBe(
      "px-2 text-white"
    );
  });

  it("resolves Tailwind class conflicts", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});
