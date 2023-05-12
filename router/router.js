import { createRouter, createWebHistory } from 'vue-router'
import Contacts from "@/pages/Contacts.vue";
import HomePage from "@/pages/HomePage.vue";
import Paintings from "@/pages/Paintings.vue";
import AboutArtist from "@/pages/AboutArtist.vue";
import mainLayout from "@/layouts/mainLayout.vue";
import pagesLayout from "@/layouts/paintingsLayout.vue";
import PaintingsCategories from "@/pages/PaintingsCategories.vue";


const routes = [
    {
        path: '/',
        component: mainLayout,
        redirect: { name: 'Home' },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: HomePage
            },
            {
                path: '/contacts',
                name: 'Contacts',
                component: Contacts
            },
            {
                path: '/about',
                name: 'About',
                component: AboutArtist
            },
            {
                path: '/categories',
                name: 'Categories',
                component: PaintingsCategories
            }
        ]
    },
    {
    component: pagesLayout,
    children: [
            {
                path: '/paintings',
                name: 'Paintings',
                component: Paintings
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router