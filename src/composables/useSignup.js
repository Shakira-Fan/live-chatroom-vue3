import {ref} from "vue";
import { projectAuth} from "@/firebase/config";

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null)
const parseFirebaseError = (input) => {
    let regex = /\(.+/
    input = input.replace(regex, '').replace('Firebase:', '').trim()
    return input
}

const signup = async (email, password, displayName) => {
    error.vlue = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete signup')
        }
        await res.user.updateProfile({displayName})
        error.vlue = null

        return res

    } catch (err) {
        error.value = parseFirebaseError(err.message)
    }
}

const useSignup = () => {
    return {error, signup}
}
export default useSignup
