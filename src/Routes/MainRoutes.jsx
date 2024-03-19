import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ServicesFullPage from "../fullPages/FullServices";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
        <Route path={`/services`} element={<ServicesFullPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
