<script setup lang="ts">
import { useBreakpoint } from 'responsive-detect'

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024
}

const current = useBreakpoint(breakpoints)
</script>

<template>
  <div style="padding: 20px;">
    <h1>Responsive Detect - Vue 3</h1>
    <p>Current breakpoint: <strong>{{ current }}</strong></p>
  </div>
</template>