/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { ViewportProvider } from './Components/Responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HomePage } from './Pages/HomePage';
import { WindowLocationProvider } from './Components/WindowLocation';

function App() {
  library.add(fab);
  return (
    <ViewportProvider>
      <WindowLocationProvider>
        <HomePage />
      </WindowLocationProvider>
    </ViewportProvider>
  );
}

export default App;
