<script setup lang="ts">
import { ref } from "vue";
import Recursive from "../components/BaseComponents/RecursivFunction.vue"
import { useKeyResponseStore } from "@/stores/keyResonse";
import type KeysInterface from "@/interfaces/KeyInterface";
import { useValueStore } from "@/stores/ValueStore";

const keys=useKeyResponseStore()
const value=useValueStore()
// const newKey=ref<KeysInterface>()
</script>

<template>
    <section id="DefineKeys">
        DEFINE KEYS
    </section>
    <section id="EnterValues">
        <Recursive v-for="item in keys.Keys" :keyDiscription="item" />
    </section>
    <section id="ShowValues">
        SHWOW-VALUES
    </section>
</template>«