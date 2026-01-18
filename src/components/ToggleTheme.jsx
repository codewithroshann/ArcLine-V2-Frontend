import React from "react";
import { useTheme } from "@/provider/ThemeProvider.jsx";
import { Sun, Moon } from "lucide-react";

const ToggleTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-all duration-300 hover:bg-gray-100 focus:outline-none dark:hover:bg-zinc-800"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="hover:text-secondary h-5 w-5 text-neutral-300" />
      ) : (
        <Moon className="hover:text-secondary h-5 w-5 text-neutral-700" />
      )}
    </button>
  );
};

export default ToggleTheme;
