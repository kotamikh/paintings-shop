import { createApp } from 'vue'
import App    from "@/App.vue";
import router from "@/router/router.js";
import { createPinia } from 'pinia'

import '@/assets/styles/styles.css'
import '@/assets/styles/reset.css'
import { createHead } from "@vueuse/head";

const pinia = createPinia()
const head = createHead()

createApp(App).use(router).use(pinia).use(head).mount('#app')
