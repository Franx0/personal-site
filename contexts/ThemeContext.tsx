// React
import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: null
});

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)

    localStorage.setItem("color-theme", theme)
  }

  if (initialTheme) rawSetTheme(initialTheme);

  useEffect(() => {
    rawSetTheme(theme)
  },[theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") return storedPrefs

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) return "dark"
  }

  return "ligth"
}

export default ThemeContext
