import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ServicesFullPage from '../fullPages/FullServices';
import Team from '../fullPages/Team';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
        <Route path={`/services`} element={<ServicesFullPage />} />
        <Route path={`/team`} element={<Team />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
