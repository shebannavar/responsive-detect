import { useEffect, useState } from "react";
import { getBreakpoint } from "./breakpoints";
export function useResponsive() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const breakpoint = getBreakpoint(width);
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
