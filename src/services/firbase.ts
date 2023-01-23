import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

export const usefirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCDU-Cg09naAn-v_c3o33Z8RREfLUUKLug",
    authDomain: "javieralfonsoabogados-1360d.firebaseapp.com",
    databaseURL:
      "https://javieralfonsoabogados-1360d-default-rtdb.firebaseio.com",
    projectId: "javieralfonsoabogados-1360d",
    storageBucket: "javieralfonsoabogados-1360d.appspot.com",
    messagingSenderId: "868102548998",
    appId: "1:868102548998:web:60c2961031e3112c4e9d87",
    measurementId: "G-PHNCHQTVFB",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  return { db };
};
