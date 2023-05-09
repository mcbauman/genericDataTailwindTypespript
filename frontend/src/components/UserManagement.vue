<script setup lang="ts">
import { userStore } from "../stores/userSettings";
const user=userStore()

user.getAllUsers()
</script>

<template>
    <section v-if="user.allUsers">
        USERMANAGEMENT
        <table class="bg-maincolor w-full">
        <th v-for="(value,key) in user.allUsers![0]">
            <td>{{key}}</td>
        </th>
        <tr v-for="aUser in user.allUsers">
            <td v-for="(value, key) in aUser">
                {{ value }}
            </td>
            <button class="text-danger" @click="user.deleteUser(aUser._id!)">
                <font-awesome-icon icon="trash" />
            </button>
        </tr>
        </table>
    </section>
</template>