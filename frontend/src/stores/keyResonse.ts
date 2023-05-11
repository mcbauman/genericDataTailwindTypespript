import { defineStore } from "pinia";
import { ref } from "vue";
import {userStore} from "./userSettings"
import type KeysInterface from "../interfaces/KeyInterface"

export const useKeyResponseStore = defineStore("keyResponse", () => {
  const user=userStore()
  const Keys = ref<KeysInterface[]>([])

  function requestKeyes() {
    fetch("http://localhost:9000/key/requestKeys",{
      headers:{
        "content-Type": "application/json",
        "authorization":user.user.token! 
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message=="jwt expired"){
          localStorage.removeItem("token")
          user.user.token=null
        }
        else{
        Keys.value = data;}
        console.log("KEYS= ",data);
        
      })
      .catch(error => {
        if(error){console.log(error)}
    })
  }

  function storeNewKey(newKeys:KeysInterface) {
    fetch("http://localhost:9000/key/postKeys", {
      method: "POST",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.user.token!},
      body: JSON.stringify(newKeys),
    }).then(() => {
      requestKeyes();
    });
  }

  function deleteKey(filter:any) {
    fetch("http://localhost:9000/key/removeKey", {
      method: "Delete",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.user.token!},
      body: JSON.stringify(filter),
    }).then(() => {
      requestKeyes();
    });
  }

  function updateKey(_id:string,update:Object) {
    console.log("UpdateKey",update);
    
    fetch("http://localhost:9000/key/updateKey", {
      method: "Put",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.user.token!},
      body: JSON.stringify({_id,update}),
    }).then(() => {
      console.log("KEYS Sortet BE");
    });
  }

  function moveItemToIndex(itemIndex:number, newIndex:number, _id:string) {
    const cutted = Keys.value!.splice(itemIndex, 1);
    Keys.value!.splice(newIndex, 0, cutted[0]);
    Keys.value!.forEach((e:any)=>e.index = Keys.value!.findIndex((x:any)=>x._id === e._id))
    Keys.value!.forEach((element:any)=>{
      updateKey(element._id,{index:element.index})
    })
  }

  return { Keys, requestKeyes, storeNewKey, deleteKey, moveItemToIndex, updateKey };
});
