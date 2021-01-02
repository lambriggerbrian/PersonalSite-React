import React, { FC } from 'react';

const windowLocationContext = React.createContext({
  xOffsetBreak: false,
  yOffsetBreak: false,
  useXOffsetBreak: () => window.pageXOffset > 400,
  useYOffsetBreak: () => window.pageYOffset > 400,
});

const xScrollBreak = 400;
const yScrollBreak = 400;

export const WindowLocationProvider: FC = ({ children }) => {
  const [xOffsetBreak, setXOffsetBreak] = React.useState(false);
  const [yOffsetBreak, setYOffsetBreak] = React.useState(false);

  const handleScroll = () => {
    setXOffsetBreak(window.pageXOffset > xScrollBreak);
    setYOffsetBreak(window.pageYOffset > yScrollBreak);
  };

  const useXOffsetBreak = () => window.pageXOffset > xScrollBreak;
  const useYOffsetBreak = () => window.pageYOffset > yScrollBreak;

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <windowLocationContext.Provider
      value={{
        xOffsetBreak,
        yOffsetBreak,
        useXOffsetBreak,
        useYOffsetBreak,
      }}
    >
      {children}
    </windowLocationContext.Provider>
  );
};

export const useWindowLocation = () => {
  const {
    xOffsetBreak,
    yOffsetBreak,
    useXOffsetBreak,
    useYOffsetBreak,
  } = React.useContext(windowLocationContext);
  return {
    xOffsetBreak,
    yOffsetBreak,
    useXOffsetBreak,
    useYOffsetBreak,
  };
};
