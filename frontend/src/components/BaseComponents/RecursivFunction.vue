<script setup lang="ts">
import BaseForm from './BaseForm.vue';
import { useValueStore } from '@/stores/ValueStore';
const props=defineProps(["item", "pathToVariableToDeclare"])
</script>

<template>
    <div class="m-4">
        <div>{{ props.pathToVariableToDeclare }}</div>
        <div v-if="props.item.type=='Object'">
            <div>
                {{ props.item.name }}
            </div>
            <RecursivFunction v-for="objectEntries in props.item.objectEntries" 
            :pathToVariableToDeclare="props.pathToVariableToDeclare[props.item.name]"
            class="m-4" :item="objectEntries"/>
            <button>Add</button>
        </div>
        <BaseForm v-else :item="props.item" />
    </div>
</template>