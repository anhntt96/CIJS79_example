import { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const value = {
    theme,
    changeTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
