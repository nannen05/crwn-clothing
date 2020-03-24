import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCAK7B6Y0mngfrOpS8wqTASdh_PcAilqYc",
    authDomain: "crwn-db-b62c4.firebaseapp.com",
    databaseURL: "https://crwn-db-b62c4.firebaseio.com",
    projectId: "crwn-db-b62c4",
    storageBucket: "crwn-db-b62c4.appspot.com",
    messagingSenderId: "281369204577",
    appId: "1:281369204577:web:db81fa9696d6c7ed9bd720",
    measurementId: "G-W3B88LLNYR"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase