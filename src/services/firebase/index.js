
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJ0fOtBVxjE76LxaVZBxgGB8T3HJvnG3k",
  authDomain: "backend-cursoreact.firebaseapp.com",
  projectId: "backend-cursoreact",
  storageBucket: "backend-cursoreact.appspot.com",
  messagingSenderId: "831105493175",
  appId: "1:831105493175:web:519ada9f92daed8866c532"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)