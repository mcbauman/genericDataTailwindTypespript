<script setup lang="ts">
import { useKeyResponseStore } from "../stores/keyResonse";

function dropEvent(event, newIndex) {
  const passedV = event.dataTransfer.getData("index");
  const passedID = event.dataTransfer.getData("_id");
  console.log("Dropped", passedV, newIndex, passedID);
  response.moveItemToIndex(passedV, newIndex, passedID);
}
function dragEvent(event, data, data2) {
  event.dataTransfer.setData("index", data);
  event.dataTransfer.setData("_id", data2);
  console.log("DRAGGED", data, data2);
}

const response = useKeyResponseStore();
</script>

<template>
  <article
    v-for="(object, index) in response.Keys"
    @drop="dropEvent($event, index)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      class="entryWrapper"
      draggable="true"
      @dragstart="dragEvent($event, index, object._id)"
    >
      <div class="fieldWrapper gridName">
        <span>name:</span>{{ object.name }}
      </div>
      <div class="fieldWrapper gridType">
        <span>type:</span>{{ object.type }}
      </div>
      <div v-if="object.type === 'Number'" class="fieldWrapper gridOptions">
        <span>range:</span>{{ object.minRange }} - {{ object.maxRange }}
      </div>
      <div v-if="object.type === 'Array'" class="fieldWrapper gridOptions">
        <span>Options:</span>
        <div class="row">
          <div v-for="field in object.arrayOption">{{ field }} /</div>
        </div>
      </div>
      <div v-if="object.type === 'Object'" class="fieldWrapper gridOptions">
        <span>Kategorie:</span>
        <div class="row">
          <div v-for="field in object.objectEntries">
            <span>Name</span>
            {{ field.name }}: 
            <span>Type</span>
            {{ field.type }} /
          </div>
        </div>
      </div>
      <button @click="response.deleteKey(object)" class="text-danger gridButton">
        <font-awesome-icon icon="trash" />
      </button>
    </div>
  </article>
</template>

<style scoped>
.entryWrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 12fr 1fr;
  grid-template-areas: "name type options button";
}
.gridName {
  grid-area: name;
}
.gridType {
  grid-area: type;
}
.gridOptions {
  grid-area: options;
}

.gridButton {
  grid-area: button;
  align-items: end;
}
</style>
