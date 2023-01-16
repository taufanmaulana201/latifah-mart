import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvtGNvjHmpliH0iL0EDnE7erm1TNP0fuE",
  authDomain: "kasir-latifah.firebaseapp.com",
  projectId: "kasir-latifah",
  storageBucket: "kasir-latifah.appspot.com",
  messagingSenderId: "150901069731",
  appId: "1:150901069731:web:773162a32aa7698e0fac16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
