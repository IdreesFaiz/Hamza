// Header.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`flex justify-between p-4 bg-white text-black dark:bg-red-800 dark:text-white`}
    >
      <div>
        {" "}
        <h1 className="text-xl">Header</h1>
      </div>
      <div className="flex">
        <div className="home">Home</div>
        <div className="home">Home</div>
        <div className="home">Home</div>
        <div className="home">Home</div>
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className={` bg-gray-200 text-black dark:bg-gray-600 dark:text-white`}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
