
<script setup lang="ts">
import {userStore} from "./stores/userSettings.js"
import TheStartPage from "./components/TheStartPage.vue"
import TheLogin from "./components/TheLogin.vue"

const user=userStore()
</script>

<template>
  <TheStartPage v-if="user.user.token"/>
  <TheLogin v-else/>
</template>