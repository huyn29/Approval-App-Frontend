import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView/HomeView.vue'
import Login from '../views/LoginView/LoginView.vue'
import Register from '../views/RegisterView/RegisterView.vue'
import BeenTogether from '../views/BeenTogether/BeenTogetherView.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/',
            name: 'home',
            meta: { isRequireAuth: true },
            component: Home
        },
        {
            path: '/count-date',
            name: 'count',
            // meta: { isRequireAuth: true },
            component: BeenTogether
        },
    ]
})

export default router;