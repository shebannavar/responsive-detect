<template>
  <div style="padding: 2rem; font-family: sans-serif;">
    <h1>Responsive-Detect Test</h1>
    <ul>
      <li>isMobile: {{ isMobile ? '✅' : '❌' }}</li>
      <li>isTablet: {{ isTablet ? '✅' : '❌' }}</li>
      <li>isDesktop: {{ isDesktop ? '✅' : '❌' }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useResponsive } from 'responsive-detect';

const isMobile = ref(false);
const isTablet = ref(false);
const isDesktop = ref(false);

onMounted(() => {
  const res = useResponsive();
  isMobile.value = res.isMobile;
  isTablet.value = res.isTablet;
  isDesktop.value = res.isDesktop;
});
</script>
