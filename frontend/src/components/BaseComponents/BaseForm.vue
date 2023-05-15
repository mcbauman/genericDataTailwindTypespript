<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<template>
  <div class="fieldWrapper">
    <span>{{ props.item.name }}</span>

<!-- AddOn To Key if Type== Number -->
  <span v-if="props.item.type == 'Number'"
          >{{ props.item.minRange }} - {{ props.item.maxRange }}</span
        >

<!-- For Input Type String or Date -->
    <input
      v-if="props.item.type == 'String' || props.item.type == 'Date'"
      :type="props.item.type"
      class="aThird"
    />

<!-- For Input Type Number -->
    <input
      v-if="props.item.type == 'Number'"
      type="Number"
      :min="props.item.minRange"
      :max="props.item.maxRange"
      class="aThird"
    />
<!-- For Input Type Boolean -->
    <input
      v-if="props.item.type == 'Boolean'"
      type="checkbox"
      class="aThird"
    />
    
<!-- For Input Type Array -->
    <select v-if="props.item.type == 'Array'">
      <option v-for="option in props.item.arrayOption" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
