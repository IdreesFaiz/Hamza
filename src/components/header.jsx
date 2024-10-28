// Header.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`p-4 bg-white text-black dark:bg-red-800 dark:text-white`}
    >
      <h1 className="text-xl">Header</h1>
      <button
        onClick={toggleTheme}
        className={`mt-2 p-2 rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white transition-colors duration-300`}
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
};

export default Header;
