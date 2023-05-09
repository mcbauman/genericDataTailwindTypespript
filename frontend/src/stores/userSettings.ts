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
  const allUsers=ref<UserInterface[]>()

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
        user.value = data;
        localStorage.setItem("activeUser", JSON.stringify(data));
      });
  }

  function getAllUsers(){
    fetch("http://localhost:9000/user/getAllUsers",{
      method:"GET",
      headers: {
        "content-Type": "application/json",
        Authorization: user.value.token!,
      },
    })
    .then((response)=>response.json())
    .then((data:UserInterface[])=>{
      allUsers.value=data
    })
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

  function deleteUser(uid:string){
    fetch("http://localhost:9000/user/deleteUser",{
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: user.value.token!,
      },
      body: JSON.stringify({_id:uid}),
    })
    .then(()=>{
      console.log("User Deleted");
      getAllUsers()
    })
  }

  function logout() {
    user.value=emptyUser
    allUsers.value=undefined
    localStorage.removeItem("activeUser");
  }

  return {
    user,
    allUsers,
    login,
    getAllUsers,
    deleteUser,
    resetColors,
    logout,
    create,
    update,
  };
});
