"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsive = useResponsive;
const react_1 = require("react");
const breakpoints_1 = require("./breakpoints");
function useResponsive() {
    const [width, setWidth] = (0, react_1.useState)(window.innerWidth);
    const [height, setHeight] = (0, react_1.useState)(window.innerHeight);
    (0, react_1.useEffect)(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const breakpoint = (0, breakpoints_1.getBreakpoint)(width);
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 992;
    const isDesktop = width >= 992;
    const orientation = width > height ? "landscape" : "portrait";
    return {
        width,
        height,
        breakpoint,
        orientation,
        isMobile,
        isTablet,
        isDesktop,
    };
}
