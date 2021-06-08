// React
import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: null,
  header: false,
  setHideHeader: null
});

const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [header, setHideHeader] = useState(true);
  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)

    localStorage.setItem("color-theme", theme)
  };

  if (initialTheme) rawSetTheme(initialTheme);

  useEffect(() => {
    rawSetTheme(theme)
  },[theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, header, setHideHeader }}>
      {children}
    </ThemeContext.Provider>
  )
}

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") return storedPrefs

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) return "dark"
  }

  return "ligth"
}

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme }
