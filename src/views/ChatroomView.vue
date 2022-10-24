<template>
  <div class="container">
    <NavBar/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
import NewChatForm from "@/components/NewChatForm";
import NavBar from "@/components/NavBar";
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";
import ChatWindow from "@/components/ChatWindow";

export default {
  name: "ChatroomView",
  components: {ChatWindow, NavBar, NewChatForm},
  setup() {
    const {user} = getUser()
    const router = useRouter()
    watch(user, () => {
      if (!user.value) {
        router.push({name: 'WelcomeView'})
      }
    })
  }
}
</script>

<style scoped>

</style>
