<script setup  lang="ts">
import { userStore } from "../stores/userSettings";
import UserManagement from "@/components/UserManagement.vue";
import DefineListView from "@/components/DefineListView.vue";

const userStr = userStore();

function LogTheCurrentColors() {
  userStr.user.maincolor!.length<8?userStr.user.maincolor+="D3":""
  userStr.user.maincontrast!.length<8?userStr.user.maincontrast+="B3":""
  userStr.update({maincontrast:userStr.user.maincontrast, maincolor:userStr.user.maincolor})
}
</script>

<template>
  <section>
    <form class="bg-maincolor">
      <div>
        <span>ContrastColor</span>
        <input type="color" v-model="userStr.user.maincontrast" />
      </div>
      <div>
        <span>MainColor</span>
        <input type="color" v-model="userStr.user.maincolor" />
      </div>
      <button @click.prevent="userStr.resetColors()" class="text-danger">Reset Colors</button>
      <button @click.prevent="LogTheCurrentColors" class="bg-submit text-maincolor">
        log Colors
      </button>
    </form>
  </section>
  <UserManagement />
  <DefineListView />
  <section>
    <button @click="userStr.logout" class="text-danger">Logout</button>
  </section>
</template>

<style scoped></style>
