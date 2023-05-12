<script setup lang="ts">
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";

const newKey= ref<any> ({});
const props=defineProps(["varialbeToWrite"])
const response = useKeyResponseStore();
const helper = ref<any>(1);
const array = ref([]);
const object = ref([]);
const variableToWrite=ref()

!props.varialbeToWrite? variableToWrite.value=newKey.value:variableToWrite.value=newKey.value
// newKey
// newKey.(newKey.name)
// newKey.(newKey.name).(newKey.name)
//...

function storeNewKey() {
  response.storeNewKey({
    ...newKey.value,
    arrayOption: array.value,
    objectEntries: object.value,
  });
  helper.value = null;
}
</script>

<template>
  <form class="entryWrapper">
    <input type="text" placeholder="name" v-model="variableToWrite.name" />
    <select v-model="variableToWrite.type">
      <option value="String">String</option>
      <option value="Number">Number</option>
      <option value="Date">Date</option>
      <option value="Boolean">Ja/Nein</option>
      <option value="Array">Liste</option>
      <option value="Object">strukturierte Liste</option>
    </select>
    <div v-if="variableToWrite.type === 'Number'">
      <input type="Number" placeholder="min" v-model="variableToWrite.minRange" />
      <input type="Number" placeholder="max" v-model="variableToWrite.maxRange" />
    </div>
    <div v-if="variableToWrite.type === 'Array'">
      <input
        type="number"
        placeholder="Anzahl Listen-Elemente"
        v-model="helper"
      />
      <input
        type="text"
        v-for="(n, index) in helper"
        v-model="array[index]"
        placeholder="Auswahl-Option"
      />
    </div>
    <div v-if="variableToWrite.type === 'Object'">
      <input type="number" placeholder="Anzahl Subtypen" v-model="helper" />
      <DefineFields-DefineKeys v-for="number in helper" :variableToWrite="variableToWrite[variableToWrite.name]"/>
    </div>
    <!-- <div v-if="variableToWrite.type === 'Object'">
      <input type="number" placeholder="Anzahl Subtypen" v-model="helper" />
      <input
        type="text"
        v-for="(n, index) in helper"
        v-model="object[index]"
        placeholder=""
      />
    </div> -->
    <button class="text-submit" type="submit" @click.prevent="storeNewKey">
      <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
    </button>
  </form>
</template>

<style scoped>
.entryWrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
