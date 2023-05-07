<script setup lang="ts">
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
import BindDataObjectHelper from "../helpers/BindDataObjectHelper.vue"

const props = defineProps(["variableToDeclare"]);
const Values = useValueStore();
const response = useKeyResponseStore();

</script>

<template>
  <div v-for="item in response.Keys" class="entryWrapper">
    <div class="fieldWrapper">
      <span>{{ item.name }}</span>
<!-- AddOn To Key if Type== Number -->
      <span v-if="item.type == 'Number'"
        >{{ item.minRange }} - {{ item.maxRange }}</span
      >

<!-- For Input Type String or Date -->
      <input
        v-if="item.type == 'String' || item.type == 'Date'"
        :type="item.type"
        v-model="props.variableToDeclare[item.name]"
        :placeholder="Values.modal[item.name]"
        class="aThird"
      />

<!-- For Input Type Number -->
      <input
        v-if="item.type == 'Number'"
        type="Number"
        :min="item.minRange"
        :max="item.maxRange"
        v-model="props.variableToDeclare[item.name]"
        :placeholder="Values.modal[item.name]"
        class="aThird"
      />
<!-- For Input Type Boolean -->
      <input
        v-if="item.type == 'Boolean'"
        type="checkbox"
        v-model="props.variableToDeclare[item.name]"
        :placeholder="Values.modal[item.name]"
        class="aThird"
      />
<!-- For Input Type Array -->
      <fieldset v-if="item.type == 'Array'" class="aThird">
        <div v-for="(element, index) in item.arrayOption">
          <input
            type="radio"
            :id="index"
            :name="item.arrayOption"
            :value="element"
            v-model="props.variableToDeclare[item.name]"
            :placeholder="Values.modal[item.name]"
          />
          <label :for="index">{{ element }}</label>
        </div>
      </fieldset>
<!-- For Input Type Object -->
      <form v-if="item.type == 'Object'" class="wholeW">
        <BindDataObjectHelper :responseKeys="item"/>
      </form>
    </div>
  </div>
</template>
