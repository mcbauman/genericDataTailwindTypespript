<script setup>
import { ref } from "vue";
import BaseForm from "@/components/BaseComponents/BaseForm.vue";
import Recursive from "../components/BaseComponents/RecursivFunction.vue";
import { useKeyResponseStore } from "@/stores/keyResonse";
// import type KeysInterface from "@/interfaces/KeyInterface";
import { useValueStore } from "@/stores/ValueStore";

const keys = useKeyResponseStore();
const value = useValueStore();
const newValue = ref({})

function setDefaults(){
  // MUST RUN AUTOMATICALLY AND GET RECURSIVE
  keys.Keys.forEach(key=>{
  if(key.type==="Object"){
    console.log("if")
    let helper={}
    key.objectEntries.forEach(objectEntrie=>{
    helper[objectEntrie.name]=""
    console.log(helper);
    })
    newValue.value[key.name]=helper
  }else{
  newValue.value[key.name]="placeholder"
  }
})
console.log("NEWVALUE",newValue.value);
}



function storenNewValue(){
    console.log(value.Values);
}
</script>

<template>
  <div class="text-white">DEFINE KEYS</div>
  <section id="DefineKeys">DEFINE KEYS
    <button @click="setDefaults">SET DEFAULT VALUES</button>
  </section>
  <div class="text-white">ENTERVALUES</div>
  <section id="EnterValues">
    <BaseForm v-for="itemValue in newValue" :itemValue="itemValue"/>
    <button @click="storenNewValue">SAVE</button>
  </section>
  <div class="text-white">SHOWVALUES</div>
  <section id="ShowValues">SHWOW-VALUES</section>
</template>
<!-- JUST CA COMMENT -->
