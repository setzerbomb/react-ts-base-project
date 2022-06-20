import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../pages/app/Main';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
