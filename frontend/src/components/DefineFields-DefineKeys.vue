<script setup lang="ts">
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";

const newKey= ref<any> ({});
const props=defineProps(["varialbeToWrite","helperInfo"])
const response = useKeyResponseStore();
const helper = ref<number>(1);
const array = ref([]);
const varToWrite=ref<any>({})

// In Recursion Case:
if(props.varialbeToWrite){
  const addition=props.varialbeToWrite
  varToWrite.value[addition]={name:[]}
  varToWrite.value= varToWrite.value[addition]
// In Direct Case:
}else{
  varToWrite.value=newKey.value
}

function addOjbect(){
  newKey.value.type='Object'
  newKey.value.name=props.varialbeToWrite
  response.objectEntries.push(varToWrite.value)
  console.log(response.objectEntries);
}

function storeNewKey() {
  response.storeNewKey({...newKey.value, arrayOption: array.value})
  helper.value = 1;
}

function storeWithRecursion(){
  response.storeNewKey({...newKey.value, objectEntries:response.objectEntries})
}
</script>

<template>
  <form class="entryWrapper">
    <input type="text" placeholder="name" v-model="varToWrite.name" />
    <select v-model="varToWrite.type">
      <option value="String">String</option>
      <option value="Number">Number</option>
      <option value="Date">Date</option>
      <option value="Boolean">Ja/Nein</option>
      <option value="Array">Liste</option>
      <option value="Object">strukturierte Liste</option>
    </select>
    <div v-if="varToWrite.type === 'Number'">
      <input type="Number" placeholder="min" v-model="varToWrite.minRange" />
      <input type="Number" placeholder="max" v-model="varToWrite.maxRange" />
    </div>
    <div v-if="varToWrite.type === 'Array'">
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
<!-- RECURSION CASE -->
    <div v-if="varToWrite.name && varToWrite.type === 'Object'">
      <input type="number" placeholder="Anzahl Subtypen" v-model="helper" />
      <DefineFields-DefineKeys v-for="number in helper" id="InnerLoop" :varialbeToWrite="varToWrite.name.slice()" :helperInfo="helper"/>
      <button @click.prevent="storeWithRecursion">SAFE</button>
    </div>
<!-- Button Direct -->
    <button v-if="varToWrite.type !== 'Object' && helperInfo<=1" class="text-submit" type="submit" @click.prevent="storeNewKey">
      <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
    </button>
<!-- Button in Recursion -->
    <button v-if="varToWrite.type !== 'Object' && helperInfo>=2" class="text-submit" type="submit" @click.prevent="addOjbect">
      <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />{{ helperInfo }}
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
