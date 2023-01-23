import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvtGNvjHmpliH0iL0EDnE7erm1TNP0fuE",
  authDomain: "kasir-latifah.firebaseapp.com",
  projectId: "kasir-latifah",
  storageBucket: "kasir-latifah.appspot.com",
  messagingSenderId: "150901069731",
  appId: "1:150901069731:web:773162a32aa7698e0fac16",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
