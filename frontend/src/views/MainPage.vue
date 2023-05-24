<script setup lang="ts">
import BaseForm from "@/components/BaseComponents/BaseForm.vue";
import BaseOutput from "../components/BaseComponents/BaseOutput.vue"
import { useKeyResponseStore } from "@/stores/keyResonse";
import { useValueStore } from "@/stores/ValueStore";

const keys = useKeyResponseStore();
const value = useValueStore();

function storenNewValue(){
    console.log(value.Values);
    value.storeNewValue()
    value.Values={}
}
</script>

<template>
  <!-- <div class="text-white">DEFINE KEYS</div>
  <section id="DefineKeys">DEFINE KEYS
    <BaseOutput v-for="itemKey in keys.Keys" :itemKey="itemKey" :itemValue="value.changedValues" disabled />
  </section> -->

  <div class="text-white">ENTERVALUES</div>
  <section id="EnterValues">
    <BaseForm v-for="itemKey in keys.Keys" :itemKey="itemKey" :itemValue="value.Values"/>
    <button @click="storenNewValue">SAVE</button>
  </section>

  <div class="text-white">SHOWVALUES</div>
  <section id="ShowValues">SHWOW-VALUES
    <BaseOutput v-for="itemKey in value.Response" :itemKey="itemKey" :itemValue="value.changedValues" />
  </section>
</template>

