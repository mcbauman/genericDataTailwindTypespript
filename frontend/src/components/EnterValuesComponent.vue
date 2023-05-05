<script setup lang="ts">
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
import BindDataToForm from "../helpers/BindDataToForm.vue";
import type KeysInterface from "../interfaces/KeyInterface"

const Values = useValueStore();
const response = useKeyResponseStore();

function SubmitFunction() {
  let childObjectKey:any =response.Keys.find((El:KeysInterface) => El.type == "Object").name;
  Values.Values[childObjectKey] = Values.Array;
  console.log("EnterVAlues/Submit/Values.Array", Values.Array);
  console.log("EnterValues/Values.Values", Values.Values);
  Values.storeNewValue();
  Values.Array = [];
  Values.Values = {};
}

response.requestKeyes();
</script>

<template>
  <form>
    <BindDataToForm :variableToDeclare="Values.Values" />
    <button type="submit" @click.prevent="SubmitFunction" class="bg-submit text-maincolor">
      <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wholeW {
  flex-direction: column;
  border-radius: 10px;
}
span {
  margin-left: 10px;
}
</style>
