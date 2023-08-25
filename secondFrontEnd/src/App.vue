<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/initial">Initial</RouterLink>
        <RouterLink to="/config">Config</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>