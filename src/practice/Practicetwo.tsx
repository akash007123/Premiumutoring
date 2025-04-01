import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const useTheme = () => useContext(ThemeContext);
const ThemedSection = () => {
  const theme = useTheme(); 

  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        textAlign: "center",
        borderRadius: "10px",
        transition: "all 0.3s ease",
      }}
    >
      <h2>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h2>
    </section>
  );
};


const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "20px" }}>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: theme === "light" ? "#007BFF" : "#FF9500",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
        >
          Toggle Theme
        </button>
        <ThemedSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
