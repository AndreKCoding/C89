import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlM8TP0FKwwYY_5dfLy9XMBdhQxtCCOv0",
  authDomain: "espectograma-17ac0.firebaseapp.com",
  databaseURL: "https://espectograma-17ac0-default-rtdb.firebaseio.com",
  projectId: "espectograma-17ac0",
  storageBucket: "espectograma-17ac0.appspot.com",
  messagingSenderId: "403673165629",
  appId: "1:403673165629:web:bdb2616b61ce11f6db9f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);