

import { Outlet } from "react-router-dom";
import "./style.sass";
import { Header } from "../common/";
import { Footer } from "../common/";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

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

