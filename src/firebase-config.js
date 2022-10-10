import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxC7dE1mGSG6pbzeV_PF3Rb-K0G6_RW7w",
  authDomain: "redux-react-app-215bc.firebaseapp.com",
  projectId: "redux-react-app-215bc",
  storageBucket: "redux-react-app-215bc.appspot.com",
  messagingSenderId: "640929338635",
  appId: "1:640929338635:web:a8f0b34e36540b80b03e0e",
  measurementId: "G-ZTZDEMNPF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)