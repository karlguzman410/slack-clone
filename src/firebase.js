import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbbHzzs_PtKi-pNli2a5j50qOPteJxmo8",
    authDomain: "slack-clone-851fd.firebaseapp.com",
    projectId: "slack-clone-851fd",
    storageBucket: "slack-clone-851fd.appspot.com",
    messagingSenderId: "643999293343",
    appId: "1:643999293343:web:bc0ac03e676587019527aa"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
//for Google Auth
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }