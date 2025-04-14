export declare const breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export type BreakpointMap = Record<string, number>;
export declare function getBreakpoint(width: number, bp?: BreakpointMap): string;
