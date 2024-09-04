import { createContext, useContext } from "react";

export const themeContext = createContext({
  theme: "light",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeProvider = themeContext.Provider;

export function useTheme() {
  return useContext(themeContext);
}
