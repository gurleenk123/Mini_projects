import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark-theme");
      return "dark-theme";
    } else {
      return theme;
    }
  };

  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  //change theme in localstorage whenver theme is changing
  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
