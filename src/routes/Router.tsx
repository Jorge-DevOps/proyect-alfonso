import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { App } from "../app";
import {Home,WorkAreas,About,Team,Contact} from "../views"

export const AppRouter = () => {
  return (
    <Router>
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
              {/* <Route path="/404" element={<NotFound />} />
                <Route path="/maintenance" element={<NotFound />} /> */}
              {/* Internal Components */}
              <Route element={<App />}>
                <Route path="/home" element={<Home/>} />
                <Route path="/areas-trabajo" element={<WorkAreas/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/quienes-somos" element={<About/>} />
                <Route path="/nuestro-equipo" element={<Team/>} />


              </Route>
            </Routes>
          }
        />
        <Route element={<h2></h2>} />
      </Routes>
    </Router>
  );
};