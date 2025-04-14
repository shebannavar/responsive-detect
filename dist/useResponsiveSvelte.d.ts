declare const width: import("svelte/store").Writable<number>;
declare const height: import("svelte/store").Writable<number>;
export declare const breakpoint: import("svelte/store").Readable<string>;
export declare const orientation: import("svelte/store").Readable<"landscape" | "portrait">;
export declare const isMobile: import("svelte/store").Readable<boolean>;
export declare const isTablet: import("svelte/store").Readable<boolean>;
export declare const isDesktop: import("svelte/store").Readable<boolean>;
export { width, height };
