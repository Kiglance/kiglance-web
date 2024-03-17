import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
