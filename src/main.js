import { createApp } from 'vue'
import App    from "@/App.vue";
import router from "@/router/router.js";

import '@/assets/styles/styles.css'
import '@/assets/styles/reset.css'

createApp(App).use(router).mount('#app')
