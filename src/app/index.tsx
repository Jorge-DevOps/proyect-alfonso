

import { Outlet } from "react-router-dom";
import "./style.sass";
import { Header } from "../common/";
import { Footer } from "../common/";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDU-Cg09naAn-v_c3o33Z8RREfLUUKLug",
  authDomain: "javieralfonsoabogados-1360d.firebaseapp.com",
  databaseURL: "https://javieralfonsoabogados-1360d-default-rtdb.firebaseio.com",
  projectId: "javieralfonsoabogados-1360d",
  storageBucket: "javieralfonsoabogados-1360d.appspot.com",
  messagingSenderId: "868102548998",
  appId: "1:868102548998:web:60c2961031e3112c4e9d87",
  measurementId: "G-PHNCHQTVFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  console.log(analytics)

  return (
    <>
    
      <section className="Container_Layout">
        <section className="Container_Layout--Content">
          <Header />
          <main className="Main">
            <Outlet />
          </main>
          <Footer />
        </section>
      </section>
    </>
  );
};

