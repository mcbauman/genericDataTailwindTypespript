import {userStore} from "../stores/userSettings";

function putRequest(token,endpoint,varialbeToDefine){
  const user=userStore()
    fetch(`http://localhost:9000${endpoint}`,{
      headers:{
        "content-Type": "application/json",
        "authorization":token 
      }
    })
}

export {putRequest}