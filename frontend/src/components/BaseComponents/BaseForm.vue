<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<template>
  <span>{{ props.item.name }}</span>
  <select v-if="props.item.type == 'Array'">
    <option v-for="option in props.item.arrayOption" :value="option">
      {{ option }}
    </option>
  </select>
  <input v-else :type="props.item.type" :placeholder="props.item.name" />
</template>
