<script setup lang="ts">
import { ref } from "vue";
import Recursive from "../components/BaseComponents/RecursivFunction.vue";
import { useKeyResponseStore } from "@/stores/keyResonse";
import type KeysInterface from "@/interfaces/KeyInterface";
import { useValueStore } from "@/stores/ValueStore";

const keys = useKeyResponseStore();
const value = useValueStore();
const newValue = ref({})

function setDefaults(){
  keys.Keys.forEach(key=>{
  if(key.type==="Object"){
    console.log("if")
    key.objectEntries.forEach(objectEntrie=>{
      newValue.value[key.name][objectEntrie.name]=""
    })
  }else{
  newValue.value[key.name]=""
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

    <button @click="storenNewValue">SAVE</button>
  </section>
  <div class="text-white">SHOWVALUES</div>
  <section id="ShowValues">SHWOW-VALUES</section>
</template>
<!-- JUST CA COMMENT -->
