<script setup lang="ts">
import { userStore } from "../stores/userSettings";
const user=userStore()

user.getAllUsers()
</script>

<template>
    <section>
        USERMANAGEMENT
        <table class="bg-maincolor">
        <tr>
        </tr>
        <tr>
        </tr>
        </table>
    </section>
</template>