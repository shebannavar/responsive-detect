"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpoints = void 0;
exports.getBreakpoint = getBreakpoint;
exports.breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};
function getBreakpoint(width, bp = exports.breakpoints) {
    const entries = Object.entries(bp).sort((a, b) => a[1] - b[1]);
    let result = entries[0][0];
    for (const [key, minWidth] of entries) {
        if (width >= minWidth)
            result = key;
    }
    return result;
}
