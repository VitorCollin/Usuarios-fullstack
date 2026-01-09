import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const tema = localStorage.getItem("tema");
    if (tema === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    }
    setDark(!dark);
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        px-3 py-2 rounded-lg text-sm font-medium
        bg-gray-200 text-gray-800
        dark:bg-gray-700 dark:text-white
        hover:bg-gray-300 dark:hover:bg-gray-600
        transition
      "
    >
      {dark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
    </button>
  );
}

export default ThemeToggle;
