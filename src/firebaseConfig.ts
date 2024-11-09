
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6SPf1ezp0j_wUK7637ZvKnIJvGvVceZI",
  authDomain: "to-do-app-239b7.firebaseapp.com",
  projectId: "to-do-app-239b7",
  storageBucket: "to-do-app-239b7.firebasestorage.app",
  messagingSenderId: "470425742522",
  appId: "1:470425742522:web:039ce77f2b267f1a426683",
  measurementId: "G-VCV0Q4FHXZ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
