import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFloppyDisk, faPlus, faRotateRight, faTrash, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from './App.vue'
import router from './router'
import './assets/main.css'

library.add(faRotateRight,faTrash, faFloppyDisk, faPlus, faMinus );

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
