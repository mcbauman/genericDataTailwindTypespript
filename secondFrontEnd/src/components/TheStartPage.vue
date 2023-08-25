<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"

const response = useKeyResponseStore();
const Values=useValueStore()

response.requestKeyes();
Values.requestValues();
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