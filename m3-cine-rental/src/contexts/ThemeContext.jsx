import { createContext, useContext, useEffect, useState } from 'react';

//* Create Context API
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('dark');

  const lightMode = () => {
    setThemeMode('light');
  };

  const darkMode = () => {
    setThemeMode('dark');
  };

  const themeInfo = {
    themeMode,
    lightMode,
    darkMode,
  };

  // IMPORTANT:
  //* Actual Change In Theme Inside DOM || Toggle Dark / Light Theme
  useEffect(() => {
    window.document.querySelector('html').classList.remove('light', 'dark');
    window.document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

//* Custom Hook for using Context
export const useTheme = () => {
  return useContext(ThemeContext);
};
