<script setup lang="ts">
const props=defineProps(['date'])
const innerDate=props.date
let dateToShow:string
typeof(innerDate)=="string"? dateToShow=innerDate.split("T")[0]:dateToShow=""
</script>

<template>
    <time datetime="dd-mm-yyy">
        {{ dateToShow}}
    </time>
</template>