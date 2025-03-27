import { createContext, useContext, useEffect, useState } from "react";

const DarkContext = createContext();

function DarkModeToggle({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode((isDark) => !isDark);
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <DarkContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </DarkContext.Provider>
  );
}

function useTheme() {
  const context = useContext(DarkContext);

  if (context === undefined) throw new Error("DarkContext was used outside ");
  return context;
}

export { DarkModeToggle, useTheme };
