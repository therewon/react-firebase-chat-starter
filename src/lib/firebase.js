import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZinYlDvgH2ZHfJITl-XnMo8MOcxpLBJ4",
  authDomain: "reactchat-1bf87.firebaseapp.com",
  projectId: "reactchat-1bf87",
  storageBucket: "reactchat-1bf87.appspot.com",
  messagingSenderId: "512670721415",
  appId: "1:512670721415:web:5d61050b3171ccc1e71f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()