import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';

export const ThemeContext = React.createContext();

export const ThemeProvider = withRouter(({ children, history }) => {
  let themeLocal;

  try {
    themeLocal = JSON.parse(
      window.localStorage.getItem('isDarkMode')
    );
  } catch (err) {
    themeLocal = false;
  }

  const [isDarkMode, setIsDarkMode] = useState(themeLocal);

  const toggleDarkMode = () => {
    window.localStorage.setItem(
      'isDarkMode',
      JSON.stringify(!isDarkMode)
    );

    setIsDarkMode(!isDarkMode);
  };

  const didMountRef = useRef(false);
  useEffect(() => {
    console.log(`!! isDarkMode`, !!isDarkMode);
    setTimeout(() => {
      if (didMountRef.current) {
        // if (!window.disableDarkMode || !window.enableDarkMode) return;
        if (!!isDarkMode === true) {
          console.log('dark mode');
          window.enableDarkMode();
        } else if (!!isDarkMode === false) {
          console.log('light mode');
          window.disableDarkMode();
        }
      } else {
        if (!!isDarkMode === true) {
          console.log('dark mode');
          window.enableDarkMode();
          didMountRef.current = true;
        }
      }
    }, 1000);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
});

export default withRouter(ThemeProvider);
