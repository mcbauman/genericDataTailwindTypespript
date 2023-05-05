import {userStore} from "../stores/userSettings";

function putRequest(token,endpoint,varialbeToDefine){
  const user=userStore()
    fetch(`http://localhost:9000${endpoint}`,{
      headers:{
        "content-Type": "application/json",
        "authorization":token 
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message=="jwt expired"){
          localStorage.removeItem("token")
          user.token=false
        }
        else{
        varialbeToDefine = data;}
      })
      .catch(error => {
        if(error){console.log(error)}
    })
}

export {putRequest}