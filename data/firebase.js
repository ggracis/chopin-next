import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXjQ71yhIklU8owlUw2etsPpqW2Rw-vsU",
  authDomain: "chopin-ch.firebaseapp.com",
  projectId: "chopin-ch",
  storageBucket: "chopin-ch.appspot.com",
  messagingSenderId: "681932595111",
  appId: "1:681932595111:web:69128d9ce56d1f5d412082",
  measurementId: "G-LN4C44V2R6",
};

const app = initializeApp(firebaseConfig); // Inicializar Firebase
export const db = getFirestore(app);
