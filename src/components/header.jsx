// Header.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-between p-4   text-black   dark:text-white`}
    >
      <div>
        {" "}
        <h1 className="text-xl">Logo</h1>
      </div>
      <div className="flex space-x-4">
        <div className="home">Samsung</div>
        <div className="home">Apple</div>
        <div className="home">Vivo</div>
        <div className="home">Oppo</div>
        <div className="home">Xiaomi</div>
        <div className="home">Realme</div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={toggleTheme}
          className={` bg-gray-200 text-black dark:bg-gray-600 dark:text-white`}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <div>help</div>
        <div>Add to</div>
      </div>
    </header>
  );
};

export default Header;
