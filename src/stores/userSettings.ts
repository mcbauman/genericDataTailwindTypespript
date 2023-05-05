import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import type UserInterface from "@/interfaces/UserInterface";

export const userStore = defineStore("userStore", () => {
  const user:Ref<UserInterface> = ref({});
  const tokenFromLS = localStorage.getItem("token");
  const tokenDefault = tokenFromLS ? tokenFromLS : null;
  const token = ref(tokenDefault);

  const maincolorFromLS=localStorage.getItem("maincolor")
  const defaultMaincolor=maincolorFromLS? maincolorFromLS: "#e2dfdbB3"
  const maincolor = ref(defaultMaincolor);
  const maincontrastFromLS= localStorage.getItem("maincontrast")
  const defaultMaincontrast=maincontrastFromLS? maincontrastFromLS: "#002868B3"
  const maincontrast = ref(defaultMaincontrast);
  
  const superUserFromLS=localStorage.getItem("superUser")
  const superUserDefault=superUserFromLS? superUserFromLS:{maincolor:"#e2dfdbB3",maincontrast:"#002868B3"}
  const superUser=ref(superUserDefault)
  //{maincolor,maincontrast,name,password,role}
  
  function resetColors() {
    maincolor.value = "#e2dfdbB3";
    maincontrast.value = "#002868B3";
    superUser.value = {maincolor:"#e2dfdbB3",maincontrast:"#002868B3"};
  }

  function login(user:UserInterface) {
    fetch("http://localhost:9000/user/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        token.value = data.token;
        localStorage.setItem("token", data.token);
        maincolor.value=data.user.maincolor
        localStorage.setItem("maincolor",data.user.maincolor)
        maincontrast.value=data.user.maincontrast
        localStorage.setItem("maincontrast",data.user.maincontrast)
        // superUser.value=data.user
        // localStorage.setItem("superUser",JSON.stringify(data.user))
        // console.log("SUPERUSER",superUser.value);
      });
  }

  function create(user:UserInterface){
    fetch("http://localhost:9000/user/createUser", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => console.log("userCreated"))
  }

  function update(user:UserInterface){
    localStorage.setItem("maincolor",maincolor.value)
    localStorage.setItem("maincontrast",maincontrast.value)
    fetch("http://localhost:9000/updateUser", {
      method: "PUT",
      headers: { 
        "content-Type": "application/json",
        Authorization:token.value!
      },
      body: JSON.stringify(user),
    })
      .then(() => console.log("Changes Stored"))
  }

  function logout() {
    token.value = null;
    localStorage.removeItem("token");
    superUser.value={maincolor:"#e2dfdbB3",maincontrast:"#002868B3"}
    localStorage.removeItem("superUser");
  }

  return { user, maincolor, maincontrast, login, resetColors, token, logout, create, update };
});
