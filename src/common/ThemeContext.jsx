
import { createContext, useContext, useEffect, useState } from 'react';
import { palettes } from './palettes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [palette, setPalette] = useState(() => localStorage.getItem('palette') || 'm3');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const currentPalette = palettes[palette][theme];
    for (const color in currentPalette) {
      document.documentElement.style.setProperty(`--${color}`, currentPalette[color]);
    }
  }, [theme, palette]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changePalette = (newPalette) => {
    setPalette(newPalette);
    localStorage.setItem('palette', newPalette);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, palette, changePalette }}>
      {children}
    </ThemeContext.Provider>
  );
};