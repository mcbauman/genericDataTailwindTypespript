<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { userStore } from "../stores/userSettings";
import type UserLoginCreateInterface from "@/interfaces/UserLoginCreateInterface";

const loginData: Ref<UserLoginCreateInterface> = ref({
  name: null,
  password: null,
});
const createData = ref<UserLoginCreateInterface>({
  name: null,
  password: null,
  role:"user",
  maincolor: "#e2dfdbE3",
  maincontrast: "#002868B3",
});
const logOrCreate = ref(true);
const user = userStore();
</script>

<template>
  <main class="w-full flex justify-center items-center h-screen">
<!-- LOGIN -->
    <section
      v-if="logOrCreate"
      class="width-1/2 h-fit backdrop-blur flex flex-col rounded-xl p-6"
    >
      <form class="flex flex-col">
      <header class="text-white">Login</header>
        <input
          type="text"
          v-model="loginData.name"
          placeholder="UserName"
          class="m-4"
        />
        <input
          type="password"
          v-model="loginData.password"
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
          <button class="text-warning m-5" @click.prevent="logOrCreate=false">
            Create User
          </button>
        </div>
      </form>
    </section>

<!-- SIGN UP -->
    <section v-else class="width-1/2 backdrop-blur flex flex-col rounded p-6">
      <form class="flex flex-col">
        <header class="text-white">Create Account</header>
        <input type="text" v-model="createData.name" placeholder="UserName" class="m-4" />
        <input
          type="password"
          v-model="createData.password"
          placeholder="***"
          class="m-4"
        />
        <div>
          <button
            type="submit"
            @click.prevent="user.create(createData)"
            class="bg-submit text-maincolor m-4"
          >
            Create User
          </button>
          <button class="text-warning m-5" @click.prevent="logOrCreate = true">log in</button>
        </div>
      </form>
    </section>
  </main>
</template>
