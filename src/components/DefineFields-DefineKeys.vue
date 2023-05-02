<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";

const response = useKeyResponseStore();
const newKey = ref({});
const helper = ref();
const array = ref([]);
const object = ref([]);

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
    <input type="text" placeholder="name" v-model="newKey.name" />
    <select v-model="newKey.type">
      <option value="String">String</option>
      <option value="Number">Number</option>
      <option value="Date">Date</option>
      <option value="Boolean">Ja/Nein</option>
      <option value="Array">Liste</option>
      <option value="Object">strukturierte Liste</option>
    </select>
    <div v-if="newKey.type === 'Number'">
      <input type="Number" placeholder="min" v-model="newKey.minRange" />
      <input type="Number" placeholder="max" v-model="newKey.maxRange" />
    </div>
    <div v-if="newKey.type === 'Array'">
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
    <div v-if="newKey.type === 'Object'">
      <input type="number" placeholder="Anzahl Subtypen" v-model="helper" />
      <input
        type="text"
        v-for="(n, index) in helper"
        v-model="object[index]"
        placeholder=""
      />
    </div>
    <button class="submit" type="submit" @click.prevent="storeNewKey">
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
