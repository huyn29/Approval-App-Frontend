import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView/HomeView.vue'
import Login from '../views/LoginView/LoginView.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router;