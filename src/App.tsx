/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { ResponsiveProvider } from './Components/Responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HomePage } from './Pages/HomePage';
import { WindowLocationProvider } from './Components/WindowLocation';

function App() {
  library.add(fab);
  return (
    <ResponsiveProvider>
      <WindowLocationProvider>
        <HomePage />
      </WindowLocationProvider>
    </ResponsiveProvider>
  );
}

export default App;
