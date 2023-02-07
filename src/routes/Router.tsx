import {
  HashRouter as Router,
  BrowserRouter as Router1,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { App } from "../app";
import { Home, WorkAreas, About_us, Team, Contact, Compliance, DerechoAdministrativo, DerechoCivil, DerechoLaboral, DerechoPenal, FuerzaPublica, NotFound } from "../views"
import ScrollToTop from "../common/components/scrollToTop";

export const AppRouter = () => {
  return (
    <Router1>
      <ScrollToTop />
      <Routes>
        <Route
          path="login/*"
          element={
            <Routes>
              {/* <Route path="/*" element={<Login />} /> */}
            </Routes>
          }
        />

        <Route
          path="/*"
          element={
            <Routes>
              <Route path="*" element={<Navigate to="/404" replace />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/404" element={<NotFound />} />
                {/* <Route path="/maintenance" element={<NotFound />} /> */}
              {/* Internal Components */}
              <Route element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/areas-de-practica" element={<WorkAreas />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/quienes-somos" element={<About_us />} />
                <Route path="/nuestro-equipo" element={<Team />} />
                <Route path="/derecho-penal" element={<DerechoPenal />} />
                <Route path="/derecho-civil" element={<DerechoCivil />} />
                <Route path="/derecho-administrativo" element={<DerechoAdministrativo />} />
                <Route path="/derecho-laboral" element={<DerechoLaboral />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/fuerza-publica" element={<FuerzaPublica />} />
                <Route path="/contectanos" element={<Contact />} />
              </Route>
            </Routes>
          }
        />
        <Route element={<h2>aaaaaaa</h2>} />
      </Routes>
    </Router1>
  );
};
