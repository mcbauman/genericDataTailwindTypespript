import { defineStore } from "pinia";
import { ref } from "vue";
import {userStore} from "./userSettings"

export const useValueStore = defineStore("valueStore", () => {
  const user=userStore()

    const Values = ref({}) 
    const Array=ref<any>({})
    const Response = ref("HERE IT IS")
    const modal=ref<any>(false)
    const changedValues = ref({})

    function requestValues() {
      fetch("http://localhost:9000/value/getValues",{
        headers:{"authorization":user.user.token!}
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.message=="jwt expired"){
            localStorage.removeItem("token")
            user.user.token=null
          }
          else{
            Response.value = data;
            console.log("Response.Value= ",data); 
          }
        })
        .catch(error => {
          if(error){console.log(error)}
      })
    }
  
    function storeNewValue() {
      fetch("http://localhost:9000/value/addValues", {
        method: "POST",
        headers: { 
          "content-Type": "application/json",
          "authorization":user.user.token!},
        body: JSON.stringify(Values.value),
      }).then(() => {
        requestValues();
      });
    }
  
    function deleteValue(id:any) {
      fetch("http://localhost:9000/value/deleteValue", {
        method: "Delete",
        headers: { 
          "content-Type": "application/json",
          "authorization":user.user.token!},
        body: JSON.stringify(id),
      }).then(() => {
        requestValues();
      });
    }

    function updateValue(){
      let objectToSend={...changedValues.value,_id:modal.value._id}
      fetch("http://localhost:9000/value/updateValue", {
        method: "Put",
        headers: { 
          "content-Type": "application/json",
          "authorization":user.user.token!},
        body: JSON.stringify(objectToSend),
      }).then(() => {
        requestValues();
      });
    }

    return { Values, Array: Array, Response, modal, changedValues, requestValues, storeNewValue, deleteValue, updateValue };
  });