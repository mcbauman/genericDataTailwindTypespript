<script setup lang="ts">
import { ref } from "vue";
import Recursive from "../components/BaseComponents/RecursivFunction.vue";
import { useKeyResponseStore } from "@/stores/keyResonse";
import type KeysInterface from "@/interfaces/KeyInterface";
import { useValueStore } from "@/stores/ValueStore";

const keys = useKeyResponseStore();
const value = useValueStore();

function storenNewValue(){
    console.log(value.Values);
}
</script>

<template>
  <section id="DefineKeys">DEFINE KEYS</section>
  <section id="EnterValues">
    <Recursive
      v-for="item in keys.Keys"
      :keyDiscription="item"
      :newValue="value.Values"
    />
    <button @click="storenNewValue">SAVE</button>
  </section>
  <section id="ShowValues">SHWOW-VALUES</section>
</template>
«
