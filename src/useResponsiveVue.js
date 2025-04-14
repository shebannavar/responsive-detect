"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsiveVue = useResponsiveVue;
const vue_1 = require("vue");
const breakpoints_1 = require("./breakpoints");
function useResponsiveVue() {
    const width = (0, vue_1.ref)(window.innerWidth);
    const height = (0, vue_1.ref)(window.innerHeight);
    const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    };
    (0, vue_1.onMounted)(() => window.addEventListener("resize", update));
    (0, vue_1.onUnmounted)(() => window.removeEventListener("resize", update));
    const breakpoint = (0, vue_1.computed)(() => (0, breakpoints_1.getBreakpoint)(width.value));
    const orientation = (0, vue_1.computed)(() => width.value > height.value ? "landscape" : "portrait");
    return {
        width,
        height,
        breakpoint,
        orientation,
        isMobile: (0, vue_1.computed)(() => width.value < 768),
        isTablet: (0, vue_1.computed)(() => width.value >= 768 && width.value < 992),
        isDesktop: (0, vue_1.computed)(() => width.value >= 992),
    };
}
