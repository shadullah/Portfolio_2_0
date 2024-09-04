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

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const lightMode = () => setTheme("light");
//   const darkMode = () => setTheme("dark");

//   return (
//     <ThemeContext.Provider value={{ theme, lightMode, darkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
