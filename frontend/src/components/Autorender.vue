<script setup lang="ts">
const props=defineProps(["item"])

</script>

<template>
    <div>{{ props.item.name }}</div>
    <div v-if="props.item.children" class="m-4">
        <Autorender v-for="child in props.item.children" :item="child" />
    </div>
</template>