import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import type UserInterface from "@/interfaces/UserInterface";
import type UserLoginCreateInterface from "@/interfaces/UserLoginCreateInterface";

export const userStore = defineStore("userStore", () => {
  const userFromLS: string | null = localStorage.getItem("activeUser");
  const emptyUser:UserInterface={
    token: null,
    name: null,
    password: null,
    role: "admin",
    Keys:[],
    Values:[],
    maincolor: "#e2dfdbE3",
    maincontrast: "#002868B3",
  }
  const defaultUser = userFromLS ? JSON.parse(userFromLS) : emptyUser;
  const user: Ref<UserInterface> = ref(defaultUser);

  function resetColors() {
    user.value.maincolor = "#e2dfdbE3";
    user.value.maincontrast = "#002868B3";
  }

  function login(userLoginData: UserLoginCreateInterface) {
    fetch("http://localhost:9000/user/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
    })
      .then((response) => response.json())
      .then((data: any) => {
        console.log("DATA", data);
        user.value = data;
        localStorage.setItem("activeUser", JSON.stringify(data));
      });
  }

  function create(userLoginData: UserLoginCreateInterface) {
    fetch("http://localhost:9000/user/createUser", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
    }).then(() => console.log("userCreated"));
  }

  function update(profileChanges: any) {
    localStorage.setItem("activeUser", JSON.stringify(user.value));
    fetch("http://localhost:9000/user/updateUser", {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        Authorization: user.value.token!,
      },
      body: JSON.stringify(profileChanges),
    }).then(() => console.log("Changes Stored"));
  }

  function logout() {
    user.value=emptyUser
    localStorage.removeItem("activeUser");
  }

  return {
    user,
    login,
    resetColors,
    logout,
    create,
    update,
  };
});
