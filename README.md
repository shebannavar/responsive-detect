# responsive-detect

📱 A tiny utility to detect responsive breakpoints in any modern JavaScript framework (React, Vue, Svelte, etc.).

---

## Table of Contents

- [📦 Installation](#-installation)
- [🛠️ Usage](#️-usage)
  - [React](#react)
  - [Vue 3 (Composition API)](#vue-3-composition-api)
  - [Svelte](#svelte)
- [⚙️ API](#️-api)
- [📄 License](#-license)

---

## 📦 Installation

```bash
npm install responsive-detect
```

or

```bash
yarn add responsive-detect
```

---

## 🛠️ Usage

### React

```tsx
import { useBreakpoint } from 'responsive-detect'

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024
}

export default function App() {
  const current = useBreakpoint(breakpoints)

  return (
    <div>
      <h1>Current: {current}</h1>
    </div>
  )
}
```

---

### Vue 3 (Composition API)

```ts
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
  <div>Current: {{ current }}</div>
</template>
```

---

### Svelte

```svelte
<script lang="ts">
  import { useBreakpoint } from 'responsive-detect'

  const breakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  }

  const current = useBreakpoint(breakpoints)
</script>

<h1>Current: {$current}</h1>
```

---

## ⚙️ API

### `useBreakpoint(breakpoints)`

A lightweight utility hook that returns the current active breakpoint.

#### Parameters

| Name        | Type                      | Description                                 |
|-------------|---------------------------|---------------------------------------------|
| breakpoints | `Record<string, number>`  | Object with named breakpoints in pixels     |

#### Returns

A reactive value with the current breakpoint label (e.g., "mobile", "tablet", "desktop").

---

## 📄 License

MIT © 2025 YourName