import React from 'react'
import { useBreakpoint } from 'responsive-detect'

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024
}

export default function App() {
  const current = useBreakpoint(breakpoints)

  return (
    <div style={{ padding: 20 }}>
      <h1>Responsive Detect - React</h1>
      <p>Current breakpoint: <strong>{current}</strong></p>
    </div>
  )
}