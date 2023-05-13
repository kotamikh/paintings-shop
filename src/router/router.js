import { createRouter, createWebHistory } from 'vue-router'
import Contacts                           from "@/pages/Contacts.vue";
import HomePage    from "@/pages/HomePage.vue";
import Catalog     from "@/pages/Catalog.vue";
import AboutArtist from "@/pages/AboutArtist.vue";
import MainLayout          from "@/layouts/MainLayout.vue";
import CatalogLayout       from "@/layouts/CatalogLayout.vue";
import PaintingsCategories from "@/pages/Categories.vue";
import PaintingPage        from "@/components/painting/PaintingPage.vue";


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
                path: '/painting-page',
                name: 'PaintingPage',
                component: PaintingPage
            }

        ]
    },
    {
        path: '/catalog',
        component: CatalogLayout,
        children: [
            {
                path: '/paintings',
                name: 'Catalog',
                component: Catalog
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router