/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { WindowLocationProvider } from './Components/WindowLocation';
import { ModalProvider } from './Components/ModalProvider';

function App() {
  return (
    <WindowLocationProvider>
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </WindowLocationProvider>
  );
}

export default App;
