"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const breakpoints_1 = require("../src/breakpoints");
(0, vitest_1.describe)("getBreakpoint", () => {
    (0, vitest_1.it)("returns correct breakpoint for various widths", () => {
        (0, vitest_1.expect)((0, breakpoints_1.getBreakpoint)(400)).toBe("xs");
        (0, vitest_1.expect)((0, breakpoints_1.getBreakpoint)(600)).toBe("sm");
        (0, vitest_1.expect)((0, breakpoints_1.getBreakpoint)(800)).toBe("md");
        (0, vitest_1.expect)((0, breakpoints_1.getBreakpoint)(1000)).toBe("lg");
        (0, vitest_1.expect)((0, breakpoints_1.getBreakpoint)(1300)).toBe("xl");
    });
});
