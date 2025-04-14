import React from 'react';
import { useResponsive } from 'responsive-detect';

export default function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Responsive-Detect Test</h1>
      <ul>
        <li>isMobile: {isMobile ? '✅' : '❌'}</li>
        <li>isTablet: {isTablet ? '✅' : '❌'}</li>
        <li>isDesktop: {isDesktop ? '✅' : '❌'}</li>
      </ul>
    </div>
  );
}
