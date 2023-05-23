import { createApp } from 'vue'
import App    from "@/App.vue";
import router from "@/router/router.js";
import { createPinia } from 'pinia'

import '@/assets/styles/styles.css'
import '@/assets/styles/reset.css'

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
