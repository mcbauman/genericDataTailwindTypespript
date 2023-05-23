<script setup lang="ts">
import BaseForm from "./BaseForm.vue";
import { useValueStore } from "@/stores/ValueStore";
const props = defineProps(["itemValue"]);

</script>

<template>
  <div class="m-4">
    <div v-if="props.itemValue.type == 'Object'">
      <div>{{ props.itemValue.name }}</div>
      <RecursivFunction
        v-for="objectEntries in props.itemValue.objectEntries"
        class="m-4"
        :keyDiscription="objectEntries"
        v-model="props.itemValue[props.itemValue.name]"
      />
      <button>Add</button>
    </div>
    <BaseForm v-else :itemValue="props.itemValue" />
  </div>
</template>

