"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.height = exports.width = exports.isDesktop = exports.isTablet = exports.isMobile = exports.orientation = exports.breakpoint = void 0;
const store_1 = require("svelte/store");
const breakpoints_1 = require("./breakpoints");
const width = (0, store_1.writable)(window.innerWidth);
exports.width = width;
const height = (0, store_1.writable)(window.innerHeight);
exports.height = height;
function update() {
    width.set(window.innerWidth);
    height.set(window.innerHeight);
}
if (typeof window !== "undefined") {
    window.addEventListener("resize", update);
}
exports.breakpoint = (0, store_1.derived)(width, ($width) => (0, breakpoints_1.getBreakpoint)($width));
exports.orientation = (0, store_1.derived)([width, height], ([$width, $height]) => ($width > $height ? "landscape" : "portrait"));
exports.isMobile = (0, store_1.derived)(width, ($w) => $w < 768);
exports.isTablet = (0, store_1.derived)(width, ($w) => $w >= 768 && $w < 992);
exports.isDesktop = (0, store_1.derived)(width, ($w) => $w >= 992);
