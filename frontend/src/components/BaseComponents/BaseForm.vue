<script setup>
import { useValueStore } from '@/stores/ValueStore';
import { text } from '@fortawesome/fontawesome-svg-core';
const props = defineProps(["itemValue"]);
const value= useValueStore()
</script>

<template>
  <div class="fieldWrapper">
    <span>{{ props.itemValue.name }}</span>

<!-- If Object, then Recursion -->
    <BaseForm 
      v-if="(typeof props.itemValue == 'object')"
      v-for="child in props.itemValue"
      :itemValue="child"
    />

<!-- AddOn To Key if Type== Number -->
  <span v-if="props.itemValue.type == 'Number'"
          >{{ props.itemValue.minRange }} - {{ props.itemValue.maxRange }}</span
        >

<!-- For Input Type String or Date -->
    <input
      v-if="typeof props.itemValue == 'string' || props.itemValue.type == 'Date'"
      type="text"
      class="aThird"
      v-model="props.itemValue"
    />

<!-- For Input Type Number -->
    <input
      v-if="props.itemValue.type == 'Number'"
      type="Number"
      :min="props.itemValue.minRange"
      :max="props.itemValue.maxRange"
      class="aThird"
      v-model="props.itemValue"
    />
<!-- For Input Type Boolean -->
    <input
      v-if="props.itemValue.type == 'Boolean'"
      type="checkbox"
      class="aThird"
      v-model="props.itemValue"
    />
    
<!-- For Input Type Array -->
    <select v-if="props.itemValue.type == 'Array'" v-model="props.itemValue">
      <option v-for="option in props.itemValue.arrayOption" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
