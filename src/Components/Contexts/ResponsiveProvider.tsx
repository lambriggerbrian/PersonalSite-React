import React, { FC } from 'react';

const responsiveContext = React.createContext({
  width: 1920,
  height: 1080,
  useMobile: () => window.innerWidth < 720,
});

const minSize = 720;

export const ResponsiveProvider: FC = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const useMobile = () => window.innerWidth < minSize;

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <responsiveContext.Provider value={{ width, height, useMobile }}>
      {children}
    </responsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const { width, height, useMobile } = React.useContext(responsiveContext);
  return { width, height, useMobile };
};
