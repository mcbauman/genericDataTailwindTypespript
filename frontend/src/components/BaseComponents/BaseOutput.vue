<script setup lang="ts">
const props = defineProps(["itemValue","itemKey","readonly","disabled"]);
</script>

<template>
  <div>
    <div v-for="(value,key) in itemKey">
      <span>{{ key }}</span>
<!-- Recursion if Type Object -->
      <BaseOutput v-if="typeof value=='object'" :itemKey="itemKey[key]"/>
<!-- Type string -->
      <input v-else-if="(typeof value=='string')" type="text" :placeholder="value">
<!-- Type number -->
      <input v-else-if="(typeof value=='number')" type="Number" :value="value">
<!-- Type bool -->
      <input v-else-if="(typeof value=='date')" type="date" :value="value">
<!-- Type Array -->
      <select v-else-if="(Array.isArray(value))" type="text" :value="value">
        IS ARRAY
      </select>
    </div>
  </div>
</template>