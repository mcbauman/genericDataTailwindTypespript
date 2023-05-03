<script setup lang="ts">
console.log("LEARNING FILE EXEC");

interface UserSchema {
    name: string;
    id: number;
  }

const user: UserSchema = {
    name: "Cynthia",
    id: 0,
}

class UserClass{
  name:string;
  id:number;
  constructor(name:string, id:number){
    this.name=name;
    this.id=id;
  }
}

type color = "green" | "red" | "blue";


const secondUser= new UserClass("Matthias",2)

console.log(user);
console.log(secondUser);
console.log(UserClass);

</script>

<template>
  <main>
    <section>
      {{ user.name }}
      {{ user.id }}
    </section>
    <section>
      {{ secondUser.name }}
      {{ secondUser.id }}
    </section>
  </main>
</template>