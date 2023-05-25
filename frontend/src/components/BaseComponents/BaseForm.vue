<script setup lang="ts">
const props = defineProps(["itemValue","itemKey"]);
</script>

<template>
  <div>
    <span>{{ props.itemKey.name }}</span>

<!-- If Object, then Recursion -->
    <BaseForm 
      class="bg-maincolor rounded-xl p-3"
      v-if="props.itemKey.type == 'Object'"
      v-for="child in props.itemKey.objectEntries"
      :itemKey="child"
      :itemValue="props.itemValue[props.itemKey.name]={}"
    />

<!-- AddOn To Key if Type== Number -->
  <span v-if="props.itemKey.type == 'Number'"
          >{{ props.itemKey.minRange }} - {{ props.itemKey.maxRange }}</span
        >

<!-- For Input Type String or Date -->
    <input
      v-if="props.itemKey.type == 'String' || props.itemKey.type == 'Date'"
      :type="props.itemKey.type"
      class="aThird"
      v-model="props.itemValue[props.itemKey.name]"
    />

<!-- For Input Type Number -->
    <input
      v-if="props.itemKey.type == 'Number'"
      type="Number"
      :min="props.itemKey.minRange"
      :max="props.itemKey.maxRange"
      class="aThird"
      v-model="props.itemValue[props.itemKey.name]"
    />

<!-- For Input Type Boolean -->
    <input
      v-if="props.itemKey.type == 'Boolean'"
      type="checkbox"
      class="aThird"
      v-model="props.itemValue[props.itemKey.name]"
    />
    
<!-- For Input Type Array -->
    <select v-if="props.itemKey.type == 'Array'" v-model="props.itemValue[props.itemKey.name]">
      <option v-for="option in props.itemKey.arrayOption" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
