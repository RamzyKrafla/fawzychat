import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved && ["dark", "light"].includes(saved)) return saved;
  return "dark";
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme() === "dark");

  // Apply theme immediately on mount
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
