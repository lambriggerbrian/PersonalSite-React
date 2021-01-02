/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { WindowLocationProvider } from './Components/Contexts/WindowLocationProvider';
import { ModalProvider } from './Components/Contexts/ModalProvider';

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
