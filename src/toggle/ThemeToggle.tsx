import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
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
  );
};

export default ThemeToggle;
