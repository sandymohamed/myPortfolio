import { createContext } from "react";

//define themes 
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    themeClass: 'fas fa-moon theme'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    themeClass: 'fas fa-sun theme'
  },
  };
// 1- create context 
export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});





