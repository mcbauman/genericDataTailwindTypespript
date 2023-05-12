<script setup lang="ts">
import { ref } from "vue";
import Recursive from "../components/BaseComponents/RecursivFunction.vue"
import { useKeyResponseStore } from "@/stores/keyResonse";
import type KeysInterface from "@/interfaces/KeyInterface";

const keys=useKeyResponseStore()
const newKey=ref<KeysInterface>()
const testObject=ref([
  {
    _id: "6456328b9e36ac8d9795542d",
    name: "Firma",
    type: "String",
    arrayOption: [],
    objectEntries: [],
    index: 0,
    index2: 1
  },
  {
    _id: "645632a49e36ac8d97955432",
    name: "Mitarbeiter",
    type: "Object",
    arrayOption: [],
    objectEntries: [],
    index: 1,
    index2: 1
  },
  {
    _id: "645633fc9e36ac8d9795544c",
    name: "Unterfirmen",
    type: "Object",
    arrayOption: [],
    objectEntries: [
        {
        name:"Geschäftszeweig",
        type: "String",
        arrayOption: [],
        objectEntries: [
            {
                _id: "645632a49e36ac8d97955432",
                name: "ChildChild",
                type: "Object",
                arrayOption: [],
                objectEntries: [],
                index: 1,
                index2: 1
            },
        ]
        },
      {
        name:"Name",
        type: "String",
        arrayOption: [],
        objectEntries: []
    }
    ],
    index: 2,
    index2: -1
  },
  {
    _id: "6457c0e5216b35d73b983774",
    name: "Branche",
    type: "Array",
    arrayOption: [
      "IT",
      "Produktion",
      "Dienstleistung"
    ],
    objectEntries: [],
    index: 3,
    index2: 2
  }
])
</script>

<template>
    <section id="DefineKeys">
        DefineKeys
    </section>
    <section id="EnterValues">
        <Recursive v-for="item in testObject" :item="item"/>
    </section>
    <section id="ShowValues">
        SHWOW-VALUES
    </section>
</template>