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

<style>
  *{
    --inputs:white;
    --maincolor:v-bind(user.user.maincolor);
    --maincontrast:v-bind(user.user.maincontrast);
    --danger:rgb(200, 30, 30);
    --warning:rgb(179, 129, 36);
    --submit:rgb(113, 155, 29);
    --background:rgb(20,20,20,0.2);
  }
  body{
    background-image: url("./assets/pic1.jpg");
    background-size: cover;
    background-color: var(--background);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  section{
    background-color: var(--maincontrast);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  nav{
    background-color: var(--maincontrast);
    color: var(--maincolor);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .entryWrapper{
    background-color: var(--maincolor);
    color: var(--maincontrast);
  }

  .router-link-active{
    color:white
  }

  label{
    color:black
  }


  .callToAction:hover{
    color: black;
  }

  .danger:hover{
    background-color: var(--danger);
    color: var(--maincolor);
  }

  .warning:hover{
    background-color: var(--warning);
    color: var(--maincolor);
  }

  .submit:hover{
    background-color: var(--submit);
    color: var(--maincolor);
  }

  .entryWrapper, button, a{
    transition: 0.5s;
  }

</style>
