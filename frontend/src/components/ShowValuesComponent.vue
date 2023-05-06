<script setup lang="ts">
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
import showDetails from "./ShowValues-DetailsModal.vue";
import ShowDate from "@/helpers/ShowDate.vue";

const response = useKeyResponseStore();
const Values = useValueStore();
</script>

<template>
  <showDetails v-if="Values.modal" />
  <table>
    <tr>
      <th v-for="item in response.Keys">{{ item.name }}</th>
    </tr>
    <tr v-for="element in Values.Response">
      <td v-for="content in response.Keys" @click="Values.modal = element">
        <div
          v-if="Array.isArray(element[content.name])"
          v-for="obj in element[content.name]"
        >
          <div v-for="(value, key) in obj">
            <span>{{ key }}</span>
            {{ value }}
          </div>
        </div>
        <ShowDate v-else-if="content.type=='Date' && element[content.name]" :date="element[content.name]"/>
        <!-- <time v-else-if="content.type=='Date'&& element[content.name]" datetime="dd-mm-yyyy">{{ element[content.name].split("T")[0] }}</time> -->
        <div v-else>{{ element[content.name] }}</div>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  background-color: var(--maincolor);
  margin-top: 20px;
  border-collapse: collapse;
}
th {
  background-color: var(--maincontrast);
  color: var(--maincolor);
  padding: 10px;
}
td {
  padding: 10px;
  border: 2px solid white;
}

tr:hover {
  background-color: var(--maincontrast);
  color: var(--maincolor);
}

p {
  display: flex;
  margin-block: 0;
}
</style>
