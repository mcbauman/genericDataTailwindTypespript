<script setup>
import { ref } from "vue";
import { userStore } from "../stores/userSettings";

const loginData = ref({});
const createData = ref({ role: "user" });
const logCreate = ref(true);
const user = userStore();
</script>

<template>
  <main class="w-screen h-screen flex justify-center align-middle">
    <section v-if="logCreate" class="width-1/2 h-auto backdrop-blur flex flex-col rounded">
      <form class="flex flex-col">
        <input type="text" v-model="loginData.name" placeholder="UserName" />
        <input type="password" v-model="loginData.password" placeholder="***" />
        <div>
          <button
            type="submit"
            @click.prevent="user.login(loginData)"
            class="callToAction"
          >
            LogIn
          </button>
          <button class="warning" @click="logCreate = false">
            Create User
          </button>
        </div>
      </form>
    </section>
    <section v-else class="width-1/2 backdrop-blur flex flex-col rounded">
      <form class="flex flex-col">
        <input type="text" v-model="createData.name" placeholder="UserName" />
        <input
          type="password"
          v-model="createData.password"
          placeholder="***"
        />
        <div>
          <button
            type="submit"
            @click.prevent="user.create(createData)"
            class="callToAction"
          >
            Create User
          </button>
          <button class="warning" @click="logCreate = true">log in</button>
        </div>
      </form>
    </section>
  </main>
</template>
