<script setup lang="ts">
import { useValueStore } from '@/stores/ValueStore';
const props = defineProps(["keyDiscription","newValue"]);
const value= useValueStore()
</script>

<template>
  <div class="fieldWrapper">
    <span>{{ props.keyDiscription.name }}</span>

<!-- AddOn To Key if Type== Number -->
  <span v-if="props.keyDiscription.type == 'Number'"
          >{{ props.keyDiscription.minRange }} - {{ props.keyDiscription.maxRange }}</span
        >

<!-- For Input Type String or Date -->
    <input
      v-if="props.keyDiscription.type == 'String' || props.keyDiscription.type == 'Date'"
      :type="props.keyDiscription.type"
      class="aThird"
      v-model="props.newValue"
    />

<!-- For Input Type Number -->
    <input
      v-if="props.keyDiscription.type == 'Number'"
      type="Number"
      :min="props.keyDiscription.minRange"
      :max="props.keyDiscription.maxRange"
      class="aThird"
      v-model="props.newValue"
    />
<!-- For Input Type Boolean -->
    <input
      v-if="props.keyDiscription.type == 'Boolean'"
      type="checkbox"
      class="aThird"
      v-model="props.newValue"
    />
    
<!-- For Input Type Array -->
    <select v-if="props.keyDiscription.type == 'Array'" v-model="props.newValue">
      <option v-for="option in props.keyDiscription.arrayOption" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
