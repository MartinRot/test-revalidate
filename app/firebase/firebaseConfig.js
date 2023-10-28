import { getFirestore } from 'firebase/firestore'

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
//Database proyecto dezapas
const firebaseConfig = {
    apiKey: "AIzaSyDZMg5EgsLnoF5HhWBSkORUmZo_rQwd8Pc",
    authDomain: "dezapas-96a76.firebaseapp.com",
    projectId: "dezapas-96a76",
    storageBucket: "dezapas-96a76.appspot.com",
    messagingSenderId: "735173958047",
    appId: "1:735173958047:web:489b8d571ed3a10ddf85aa",
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export const auth = getAuth(app)
  export default db;
  