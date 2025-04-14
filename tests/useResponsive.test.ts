import { describe, it, expect } from "vitest";
import { getBreakpoint } from "../src/breakpoints";

describe("getBreakpoint", () => {
  it("returns correct breakpoint for various widths", () => {
    expect(getBreakpoint(400)).toBe("xs");
    expect(getBreakpoint(600)).toBe("sm");
    expect(getBreakpoint(800)).toBe("md");
    expect(getBreakpoint(1000)).toBe("lg");
    expect(getBreakpoint(1300)).toBe("xl");
  });
});
