<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { userStore } from "../stores/userSettings";
import type UserLoginCreateInterface from "@/interfaces/UserLoginCreateInterface";

const loginData: Ref<UserLoginCreateInterface> = ref({
  name: null,
  password: null,
});
const createData = ref<UserLoginCreateInterface>();
const logCreate = ref(true);
const user = userStore();
</script>

<template>
  <main class="w-screen flex justify-center items-center h-screen">
    <section
      v-if="logCreate"
      class="width-1/2 h-fit backdrop-blur flex flex-col rounded-xl p-6"
    >
      <form class="flex flex-col">
        <input
          type="text"
          v-model="loginData.name"
          placeholder="UserName"
          class="m-4"
        />
        <input
          type="password"
          v-model="loginData!.password"
          placeholder="***"
          class="m-4"
        />
        <div class="flex justify-between">
          <button
            type="submit"
            @click.prevent="user.login(loginData)"
            class="bg-submit text-maincolor m-4"
          >
            LogIn
          </button>
          <button class="text-warning m-5" @click="logCreate = false">
            Create User
          </button>
        </div>
      </form>
    </section>
    <section v-else class="width-1/2 backdrop-blur flex flex-col rounded">
      <form class="flex flex-col">
        <input type="text" v-model="createData!.name" placeholder="UserName" />
        <input
          type="password"
          v-model="createData!.password"
          placeholder="***"
        />
        <div>
          <button
            type="submit"
            @click.prevent="user.create(createData!)"
            class="bg-submit text-maincolor"
          >
            Create User
          </button>
          <button class="text-warning" @click="logCreate = true">log in</button>
        </div>
      </form>
    </section>
  </main>
</template>
