<script setup lang="ts">
const props=defineProps(['date'])
</script>

<template>
    <time datetime="dd-mm-yyy">
        {{ props.date.split("T")[0] }}
    </time>
</template>