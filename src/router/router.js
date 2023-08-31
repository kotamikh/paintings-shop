import { createRouter, createWebHistory } from 'vue-router'
import Contacts from "../../pages/Contacts.vue";
import HomePage from "../../pages/HomePage.vue";
import Catalog from "../../pages/Catalog.vue";
import AboutArtist from "../../pages/AboutArtist.vue";
import MainLayout from "../../layouts/MainLayout.vue";
import AuthorizationPage from "../../components/AuthorizationPage.vue";

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
                name: 'Catalog',
                component: Catalog
            },
            {
                path: 'authorization',
                name: 'Authorization',
                component: AuthorizationPage
            }
        ]
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router