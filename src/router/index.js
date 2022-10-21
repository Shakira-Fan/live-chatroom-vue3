import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView";
import ChatroomView from "@/views/ChatroomView";
import {projectAuth} from "@/firebase/config";

//auth guard
const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    console.log('current user in auth guard:', user)
    if (!user) {
        next({name: 'WelcomeView'})
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'WelcomeView',
        component: WelcomeView
    },
    {
        path: '/chatroom',
        name: 'ChatroomView',
        component: ChatroomView,
        beforeEnter: requireAuth
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
