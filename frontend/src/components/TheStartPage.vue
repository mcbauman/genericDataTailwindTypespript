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
      <nav class="flex justify-between">
        <RouterLink class="p-5 text-maincolor" to="/">Define Fields</RouterLink>
        <RouterLink class="p-5 text-maincolor" to="/about">Enter Values</RouterLink>
        <RouterLink class="p-5 text-maincolor" to="/ShowValues">Show Values</RouterLink>
        <RouterLink class="p-5 text-maincolor" to="/settings">Settings</RouterLink>
        <RouterLink class="p-5 text-maincolor" to="/main">Main</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
