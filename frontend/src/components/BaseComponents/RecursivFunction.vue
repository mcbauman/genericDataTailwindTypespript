<script setup lang="ts">
import BaseForm from './BaseForm.vue';
const props=defineProps(["item"])

</script>

<template>
    <div class="m-4">
        <!-- <div v-if="props.item.objectEntries.length!=0"> -->
        <div v-if="props.item.type!='Object'">
            <div>
                {{ props.item.name }}
            </div>
            <RecursivFunction v-for="objectEntries in props.item.objectEntries" class="m-4" :item="objectEntries"/>
        </div>
        <BaseForm v-else :item="props.item" />
    </div>
</template>