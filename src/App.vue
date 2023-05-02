<script setup lang="ts">
import {userStore} from "./stores/userSettings.js"
import TheStartPage from "./components/TheStartPage.vue"
import TheLogin from "./components/TheLogin.vue"

const user=userStore()
</script>

<template>
  <TheStartPage v-if="user.token"/>
  <TheLogin v-else/>
</template>

<style>
  *{
    --inputs:white;
    --maincolor:v-bind(user.maincolor);
    --maincontrast:v-bind(user.maincontrast);
    --danger:rgb(200, 30, 30);
    --warning:rgb(179, 129, 36);
    --submit:rgb(113, 155, 29);
    --background:rgb(20,20,20,0.2);
  }
  body{
    margin: 0 auto;
    max-width: 1200px;
    background-image: url("./assets/pic1.jpg");
    background-size: cover;
    background-color: var(--background);
    font-size: 1.2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  /* input, select, button, fieldset{
    @apply p-2 m-1 border-none
    padding:10px;
    margin: 5px;
    font-size: 1.2rem;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  } */

  /* input, select, fieldset{
    border-radius: 10px;
    background-color: var(--inputs);
  } */
  /* header{
    background-color: var(--maincontrast);
    color: var(--maincolor);
  } */
  /* nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
  } */
  /* header>nav>a{
    padding: 20px;
    color: var(--maincolor);
  } */
  .router-link-active{
    color:white
  }

  /* section{
    background-color: var(--maincolor);
    color: var(--maincontrast);
    padding: 10px;
  } */

  label{
    color:black
  }

  /* .entryWrapper{
    background-color: var(--maincolor);
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 0 5px black;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
  } */

  .fieldWrapper{
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
  .row{
    display: flex;
    flex-direction: row;
  }
  span, label{
    font-size: 0.7rem;
  }
  button{
    margin-left: 20px;
    border-radius: 45px;
    height: 45px;
    min-width: 45px;
    width: fit-content;
  }

  .danger{
    color: var(--danger);
  }
  .warning{
    color: var(--warning);
  }
  .submit{
    color: var(--submit);
  }
  .callToAction{
    background-color: var(--submit);
    color: var(--maincolor);
  }

  .entryWrapper:hover, button:hover, a:hover{
    box-shadow: 0 2px 3px black inset;
  }

  .callToAction:hover{
    color: black;
    /* background-color: var(--maincolor); */
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

  /* .logBody{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  /* .logWindow{
    width: 50%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .logWindow > form{
    display: flex;
    flex-direction: column;
  } */
</style>
