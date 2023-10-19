import { createApp } from 'vue'
import App    from "@/App.vue";
import router from "@/router/router.js";
import { createPinia } from 'pinia'

import '@/assets/styles/styles.css'
import '@/assets/styles/reset.css'
import { createHead } from "@vueuse/head";
import VueEasyLightbox from "vue-easy-lightbox";

const pinia = createPinia()
const head = createHead()

createApp(App).use(router).use(pinia).use(head).use(VueEasyLightbox).mount('#app')
