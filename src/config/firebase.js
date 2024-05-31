import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCleaV_iZ4btBejUX1ZfODXKCda5xh6GBI",
  authDomain: "grid-72616.firebaseapp.com",
  projectId: "grid-72616",
  storageBucket: "grid-72616.appspot.com",
  messagingSenderId: "1034916838262",
  appId: "1:1034916838262:web:42737376f5a2549dcc1857",
  measurementId: "G-M7SYM0NSJ8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);
