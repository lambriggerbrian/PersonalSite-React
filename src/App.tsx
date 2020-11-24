/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import './App.css';
import { Header } from './Components/Header';
import { ViewportProvider } from './Components/Responsive';

function App() {
  return (
    <ViewportProvider>
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            0deg,
            rgba(17, 15, 18, 1) 53%,
            rgba(21, 53, 82, 1) 100%
          );
        `}
      >
        <Header />
      </div>
    </ViewportProvider>
  );
}

export default App;
