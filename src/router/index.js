import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView";
import ChatroomView from "@/views/ChatroomView";
import {projectAuth} from "@/firebase/config";

//auth guard
const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if (!user) {
        next({name: 'WelcomeView'})
    } else {
        next()
    }
}

const requireNoAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if (user) {
        next({name: 'ChatroomView'})
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'WelcomeView',
        component: WelcomeView,
        beforeEnter: requireNoAuth
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
