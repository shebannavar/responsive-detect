<script lang="ts">
  import { useBreakpoint } from 'responsive-detect'

  const breakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  }

  const current = useBreakpoint(breakpoints)
</script>

<div style="padding: 20px;">
  <h1>Responsive Detect - Svelte</h1>
  <p>Current breakpoint: <strong>{$current}</strong></p>
</div>