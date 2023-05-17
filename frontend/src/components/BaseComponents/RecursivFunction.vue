<script setup lang="ts">
import BaseForm from "./BaseForm.vue";
import { useValueStore } from "@/stores/ValueStore";
const props = defineProps(["keyDiscription"]);
</script>

<template>
  <div class="m-4">
    <div v-if="props.keyDiscription.type == 'Object'">
      <div>{{ props.keyDiscription.name }}</div>
      <RecursivFunction
        v-for="objectEntries in props.keyDiscription.objectEntries"
        class="m-4"
        :item="objectEntries"
      />
      <button>Add</button>
    </div>
    <BaseForm v-else :keyDiscription="props.keyDiscription" />
  </div>
</template>
