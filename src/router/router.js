import { createRouter, createWebHistory } from 'vue-router'
import Contacts                           from "@/pages/Contacts.vue";
import HomePage                           from "@/pages/HomePage.vue";
import Paintings                          from "@/pages/Paintings.vue";
import AboutArtist from "@/pages/AboutArtist.vue";
import MainLayout          from "@/layouts/MainLayout.vue";
import pagesLayout         from "@/layouts/PaintingsLayout.vue";
import PaintingsCategories from "@/pages/PaintingsCategories.vue";
import PaintingPage                       from "@/components/common/PaintingPage.vue";


const routes = [
    {
        path: '/',
        component: MainLayout,
        redirect: '/home',
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
            },
            {
                path: '/paintingpage',
                name: 'Paintingpage',
                component: PaintingPage
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