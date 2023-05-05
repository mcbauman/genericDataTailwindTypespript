<script setup lang="ts">
import { useValueStore } from "../stores/ValueStore";
import BindDataToForm from "../helpers/BindDataToForm.vue";
import { useKeyResponseStore } from "../stores/keyResonse";

const Values = useValueStore();
const response = useKeyResponseStore();

function deleteFunction(){
  Values.deleteValue({ _id: Values.modal._id })
  Values.modal=false
}

function logIt() {
  console.log("Modal", Values.modal);
  console.log("newVAriable", Values.changedValues);
  let childObjectKey = response.Keys.find((El) => El.type == "Object").name;
  console.log(childObjectKey);
  Values.changedValues[childObjectKey]=Values.Array
  Values.updateValue();
  Values.modal=false
}
</script>

<template>
  <div class="modal mx-auto">
    <div class="modalContent">
      <div class="modalHeader">
        DETAILANSICHT
        <button @click="Values.modal = false">X</button>
      </div>
      <div class="modalMain">
        <BindDataToForm :variableToDeclare="Values.changedValues" />
        <button
          class="text-danger"
          @click="deleteFunction"
        >
          <font-awesome-icon icon="trash" />
        </button>
        <button @click="logIt" class="bg-submit text-maincolor">
          <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  /* margin: 0 auto; */
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(10px);
}
.modalContent{
  max-width: 1000px;
}
.modalHeader {
  background-color: var(--maincontrast);
  color: var(--maincolor);
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.modalMain {
  background-color:var(--maincontrast);
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}
</style>
