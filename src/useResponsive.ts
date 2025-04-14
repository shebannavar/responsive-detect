import { useEffect, useState } from "react";
import { getBreakpoint } from "./breakpoints";

export function useResponsive() {
  const isClient = typeof window !== "undefined";

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

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
