<template>
  <div class="container">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "ChatroomView",
  components: {NavBar},
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
