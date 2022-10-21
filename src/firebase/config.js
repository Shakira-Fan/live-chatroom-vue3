import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCrj5c7fw2Dqh6PfUQQapCo1h8AdtJt8oI",
    authDomain: "udemy-vue-firebase-sites-cb162.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-cb162",
    storageBucket: "udemy-vue-firebase-sites-cb162.appspot.com",
    messagingSenderId: "1087496817442",
    appId: "1:1087496817442:web:cda475b6c585ed2261337b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp}
