

import { Outlet } from "react-router-dom";
import "./style.sass";
import { Header } from "../common/";
import { Footer } from "../common/";

export const App = () => {

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

