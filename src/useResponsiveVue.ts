import { ref, onMounted, onUnmounted, computed } from "vue";
import { getBreakpoint, breakpoints } from "./breakpoints";

export function useResponsiveVue() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => window.addEventListener("resize", update));
  onUnmounted(() => window.removeEventListener("resize", update));

  const breakpoint = computed(() => getBreakpoint(width.value));
  const orientation = computed(() =>
    width.value > height.value ? "landscape" : "portrait"
  );

  return {
    width,
    height,
    breakpoint,
    orientation,
    isMobile: computed(() => width.value < 768),
    isTablet: computed(() => width.value >= 768 && width.value < 992),
    isDesktop: computed(() => width.value >= 992),
  };
}
