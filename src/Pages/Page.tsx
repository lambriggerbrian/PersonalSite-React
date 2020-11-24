import React, { FC } from 'react';
import { Header } from '../Components/Header';

export const Page: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { Page as default };
