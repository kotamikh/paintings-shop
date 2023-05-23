import { createRouter, createWebHistory } from 'vue-router'
import Contacts from "@/pages/Contacts.vue";
import HomePage from "@/pages/HomePage.vue";
import Catalog from "@/pages/Catalog.vue";
import AboutArtist from "@/pages/AboutArtist.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import Categories from "@/pages/Categories.vue";
import ForwardView from "@/components/common/ForwardView.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: HomePage
            },
            {
                path: 'contacts',
                name: 'Contacts',
                component: Contacts
            },
            {
                path: 'about',
                name: 'About',
                component: AboutArtist
            },
            {
                path: 'paintings',
                redirect: {
                    name: 'Categories'
                },
                component: ForwardView,
                children: [
                    {
                        path: 'categories',
                        name: 'Categories',
                        component: Categories
                    },
                    {
                        path: 'catalog',
                        name: 'Catalog',
                        component: Catalog
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router