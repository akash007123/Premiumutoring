import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create ThemeContext with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom Hook to use ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
