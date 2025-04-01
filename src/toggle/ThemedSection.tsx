import { useTheme } from "./ThemeContext";

const ThemedSection = () => {
  const { theme } = useTheme();

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

export default ThemedSection;
