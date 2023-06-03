import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_y1vUlEYI6ekeTID_65Pop9sXvuJUPKY",
    authDomain: "web-1-9c9c4.firebaseapp.com",
    projectId: "web-1-9c9c4",
    storageBucket: "web-1-9c9c4.appspot.com",
    messagingSenderId: "739708058793",
    appId: "1:739708058793:web:3653ba9389f2d4d8eafdb8",
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
export const authFirebase = getAuth(firebase)
export const db = getFirestore(firebase)
