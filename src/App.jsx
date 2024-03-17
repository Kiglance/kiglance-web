import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<MainRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
