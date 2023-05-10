<script setup lang="ts">
import { useKeyResponseStore } from '@/stores/keyResonse';
import { ref } from 'vue';
const keys=useKeyResponseStore()
const changesHelper=ref([])

const test =ref()

function submitfunction(id:string,value:any){
    changesHelper.value.push(value)
    console.log(changesHelper.value);
    //changesHelper.value.forEach((e) => console.log(Object.keys(e)))
    // changesHelper.value.forEach((e) => keys.updateKey(Object.keys(e)[0],{index2:Object.values(e)[0]}))
}
</script>

<template>
    <section>
    <h3>Index = an welcher Position soll die Spalte angezeigt werden</h3>
        <table class="bg-maincolor">
            <tr>
                <th>Bezeichung</th>
                <th>Value-Typ</th>
                <th>Index</th>
            </tr>
            <tr v-for="key in keys.Keys">
                <td>{{ key.name }}</td>
                <td>{{ key.type }}</td>
                <td>
                    <input type="number" v-model="changesHelper[key._id]" @change="submitfunction(key._id, changesHelper[key._id])">
                </td>
            </tr>
            <p>{{ changesHelper }}</p>
            <p v-for="item in changesHelper"><strong> {{item}} </strong></p>
        </table>
        <!-- <button class="submit" @click="submitfunction">Safe</button> -->
    </section>
</template>