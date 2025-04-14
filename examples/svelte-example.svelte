<script lang="ts">
  import { onMount } from 'svelte';
  import { useResponsive } from 'responsive-detect';

  let isMobile = false;
  let isTablet = false;
  let isDesktop = false;

  onMount(() => {
    const {
      isMobile: mobile,
      isTablet: tablet,
      isDesktop: desktop
    } = useResponsive();

    isMobile = mobile;
    isTablet = tablet;
    isDesktop = desktop;
  });
</script>

<main style="padding: 2rem; font-family: sans-serif;">
  <h1>Responsive-Detect Test</h1>
  <ul>
    <li>isMobile: {isMobile ? '✅' : '❌'}</li>
    <li>isTablet: {isTablet ? '✅' : '❌'}</li>
    <li>isDesktop: {isDesktop ? '✅' : '❌'}</li>
  </ul>
</main>
