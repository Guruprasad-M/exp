// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApoHpEYPoycX7TjLOha2S8wgiiDxTr3Yw",
  authDomain: "expense-tracker-cb8f3.firebaseapp.com",
  projectId: "expense-tracker-cb8f3",
  storageBucket: "expense-tracker-cb8f3.appspot.com",
  messagingSenderId: "692801773165",
  appId: "1:692801773165:web:87264c2383579c5527a964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export const provider=new GoogleAuthProvider();
 export const db=getFirestore(app)