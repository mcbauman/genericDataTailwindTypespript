<script setup lang="ts">
import { useValueStore } from "../stores/ValueStore";
import BindDataToForm from "../helpers/BindDataToForm.vue";

const Values = useValueStore();

function SubmitFunction() {
  console.log(Values.Array);
  Object.assign(Values.Values,Values.Array)
  Values.storeNewValue();
  Values.Array = {};
  Values.Values = {};
}

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
