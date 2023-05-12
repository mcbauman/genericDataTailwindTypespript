<script setup lang="ts">
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";

const newKey= ref<any> ({});
const props=defineProps(["varialbeToWrite"])
const response = useKeyResponseStore();
const helper = ref<any>(1);
const array = ref([]);
const object = ref([]);
const varToWrite=ref<any>({})

console.log("beforeIf",props.varialbeToWrite);

if(props.varialbeToWrite){
  console.log("IF");
  const addition=props.varialbeToWrite
  console.log("addition", addition);
  varToWrite.value[addition]={name:123}
  varToWrite.value= varToWrite.value[addition]
}else{
  console.log("ELSE");
  varToWrite.value=newKey.value
}
console.log("afterIf",varToWrite.value);


// props.varialbeToWrite ? varToWrite.value= varToWrite.props.varialbeToWrite.slice() : varToWrite.value=newKey.value

// newKey
// newKey.(newKey.name)
// newKey.(newKey.name).(newKey.name)
//...

function storeNewKey() {
  console.log("Variable to declare",props.varialbeToWrite);
  console.log("VarToLock",varToWrite.value);
  
  console.log("NewKEy",newKey.value);
  
  response.storeNewKey({...newKey.value, arrayOption: array.value});
  helper.value = null;
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
    <div v-if="varToWrite.name && varToWrite.type === 'Object'">
      <input type="number" placeholder="Anzahl Subtypen" v-model="helper" />
      <DefineFields-DefineKeys v-for="number in helper" id="InnerLoop" :varialbeToWrite="varToWrite.name.slice()"/>
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
