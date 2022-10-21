import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from "@/views/WelcomeView";
import ChatroomView from "@/views/ChatroomView";

const routes = [
  {
    path: '/',
    name: 'WelcomeView',
    component: WelcomeView
  },
  {
    path: '/chatroom',
    name: 'ChatroomView',
    component: ChatroomView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
