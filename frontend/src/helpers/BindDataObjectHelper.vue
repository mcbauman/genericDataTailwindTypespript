<script setup lang="ts">
import { useValueStore } from '@/stores/ValueStore';
import { ref } from 'vue';

const props = defineProps(["responseKeys"]);
const addObjectIsOpen = ref<Boolean>(false);
const keyValuePairs = ref<any>({});
const Values = useValueStore();
const innerArrayHelper=ref<any>([])
const useCase=ref<"new"|"update">("new")

Values.modal? useCase.value="update": useCase.value="new"

function savefunction() {
    console.log("KEY-Value-Pairs",keyValuePairs.value);
    console.log("Values.Modal",Values.modal);

    Values.modal[props.responseKeys.name]?innerArrayHelper.value=(Values.modal[props.responseKeys.name]):null
    innerArrayHelper.value.push(keyValuePairs.value)
    console.log("InnerArrayHelper",innerArrayHelper.value);
// Override the Array with all innerArrayEntries
    Values.Array[props.responseKeys.name]=innerArrayHelper.value;
    console.log("Values.Array",Values.Array);
    keyValuePairs.value = {};
    addObjectIsOpen.value = false;
}
</script>

<template>
    <div>
<!-- xxx Hinzufügen Button -->
        <div>
          <button @click.prevent="addObjectIsOpen = true" class="text-submit">
            <font-awesome-icon icon="plus" title="Add Data to List" />
            {{ props.responseKeys.name }} hinzufügen
          </button>
        </div>
<!-- Neuer xxx Modal/Input -->
        <form class="entryWrapper flex-wrap" v-if="addObjectIsOpen">
          <div v-for="elem in props.responseKeys.objectEntries" class="fieldWrapper">
            <span>{{ elem }}</span>
            <input type="text" v-model="keyValuePairs[elem]" />
          </div>
          <button type="submit" @click.prevent="savefunction" class="text-submit">
            <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
          </button>
        </form>
<!-- ChildObject anzeigen -->
        <div v-if="useCase=='update'" 
            v-for="obj in Values.modal[props.responseKeys.name]">
          <div v-for="(value, key) in obj">
            <span>{{ key }}</span>
            {{ value }}
          </div>
        </div>
        <div v-else v-for="obj in Values.Array[props.responseKeys.name]">
          <div v-for="(value, key) in obj">
            <span>{{ key }}</span>
            {{ value }}
          </div>
        </div>
    </div>
</template>