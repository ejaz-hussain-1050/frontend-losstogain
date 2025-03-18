import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIM1p82SirxMz0M0UeM05itAccqtHmGeI",
  authDomain: "losetogain-8d719.firebaseapp.com",
  databaseURL: "https://losetogain-8d719-default-rtdb.firebaseio.com",
  projectId: "losetogain-8d719",
  storageBucket: "losetogain-8d719.appspot.com",
  messagingSenderId: "924930312801",
  appId: "1:924930312801:web:d9b04c591ab3cda49f3820",
  measurementId: "G-57YPHE069B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore database
