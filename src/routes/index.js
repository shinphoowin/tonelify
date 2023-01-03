import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue"
import Login from "../pages/Login.vue"
import Profile from "../pages/Profile.vue"
import Register from "../pages/Register.vue"
import ApplyingLoanII from "../components/ApplyingLoanII.vue"

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/login', name: 'Login', component: Login },
    { path: '/profile', name: 'Profile', component: Profile},
    { path: '/register', name: 'Register', component: Register},
    { path: '/apply-loan', name: 'ApplyingLoanII', component: ApplyingLoanII}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})