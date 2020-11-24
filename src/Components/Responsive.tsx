import React, { FC } from 'react';

const viewportContext = React.createContext({
  width: 1920,
  height: 1080,
  useMobile: () => window.innerWidth < 720,
});

const minSize = 720;

export const ViewportProvider: FC = ({ children }) => {
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
    <viewportContext.Provider value={{ width, height, useMobile }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height, useMobile } = React.useContext(viewportContext);
  return { width, height, useMobile };
};
