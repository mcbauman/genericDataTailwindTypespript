import { defineStore } from "pinia";
import { ref } from "vue";
import {userStore} from "./userSettings"

export const useKeyResponseStore = defineStore("keyResponse", () => {
  const user=userStore()
  const Keys = ref([])

  function requestKeyes() {
    fetch("http://localhost:9000/key/requestKeys",{
      headers:{
        "content-Type": "application/json",
        "authorization":user.token 
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message=="jwt expired"){
          localStorage.removeItem("token")
          user.token=false
        }
        else{
        Keys.value = data;}
      })
      .catch(error => {
        if(error){console.log(error)}
    })
  }

  function storeNewKey(newKeys) {
    fetch("http://localhost:9000/key/postKeys", {
      method: "POST",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.token},
      body: JSON.stringify(newKeys),
    }).then(() => {
      requestKeyes();
    });
  }

  function deleteKey(filter) {
    fetch("http://localhost:9000/key/removeKey", {
      method: "Delete",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.token},
      body: JSON.stringify(filter),
    }).then(() => {
      requestKeyes();
    });
  }

  function updateKey(_id,index) {
    fetch("http://localhost:9000/key/updateKey", {
      method: "Put",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.token},
      body: JSON.stringify({_id,index}),
    }).then(() => {
      console.log("KEYS Sortet BE");
    });
  }

  function moveItemToIndex(itemIndex, newIndex, _id) {
    const cutted = Keys.value.splice(itemIndex, 1);
    Keys.value.splice(newIndex, 0, cutted[0]);
    Keys.value.forEach((e)=>e.index = Keys.value.findIndex((x)=>x._id === e._id))
    Keys.value.forEach((element)=>{
      updateKey(element._id,element.index)
    })
  }

  return { Keys, requestKeyes, storeNewKey, deleteKey, moveItemToIndex };
});
