import React, { Suspense } from 'react';
import './components/scss/app.scss';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
