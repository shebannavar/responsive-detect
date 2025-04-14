import { writable, derived } from "svelte/store";
import { getBreakpoint } from "./breakpoints";

const width = writable(window.innerWidth);
const height = writable(window.innerHeight);

function update() {
  width.set(window.innerWidth);
  height.set(window.innerHeight);
}

if (typeof window !== "undefined") {
  window.addEventListener("resize", update);
}

export const breakpoint = derived(width, ($width) => getBreakpoint($width));
export const orientation = derived(
  [width, height],
  ([$width, $height]) => ($width > $height ? "landscape" : "portrait")
);

export const isMobile = derived(width, ($w) => $w < 768);
export const isTablet = derived(width, ($w) => $w >= 768 && $w < 992);
export const isDesktop = derived(width, ($w) => $w >= 992);

export { width, height };
