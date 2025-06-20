// src/components/ThemeToggleButton.jsx
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggleButton.module.scss";
const ThemeToggleButton = () => {
  // 1. Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      // Check user's system preference if no stored theme
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // Default to light if no localStorage or SSR
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // 2. Apply the theme class to the document root (<html>) and save to localStorage
  useEffect(() => {
    const root = document.documentElement; // This refers to the <html> tag

    if (theme === "dark") {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }

    // Save the current theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run this effect whenever 'theme' state changes

  // 3. Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <a
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={32} /> : <Sun size={32} />}
    </a>
  );
};

export default ThemeToggleButton;
