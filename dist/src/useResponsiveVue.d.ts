export declare function useResponsiveVue(): {
    width: import("vue").Ref<number, number>;
    height: import("vue").Ref<number, number>;
    breakpoint: import("vue").ComputedRef<string>;
    orientation: import("vue").ComputedRef<"landscape" | "portrait">;
    isMobile: import("vue").ComputedRef<boolean>;
    isTablet: import("vue").ComputedRef<boolean>;
    isDesktop: import("vue").ComputedRef<boolean>;
};
