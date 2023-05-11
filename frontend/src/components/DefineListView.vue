<script setup lang="ts">
import { useKeyResponseStore } from '@/stores/keyResonse';

const keys=useKeyResponseStore()

function submitfunction(id:string,value:any){
    console.log("id: ",id);
    console.log("value", value);
    keys.updateKey(id,{index2:value})
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
                    <input type="number" @input="event=>submitfunction(key._id,event.target.value)" />
                </td>
            </tr>
            <p>changesHelper</p>
        </table>
        <!-- <button class="submit" @click="submitfunction">Safe</button> -->
    </section>
</template>