import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context";
import { HEADER_ICON } from "../importFiles";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true); // Set scrolled state to true when the user scrolls
      } else {
        setIsScrolled(false); // Reset state when back at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-between p-4 ${
        isScrolled ? "bg-[#5784C5] dark:bg-[#233a66]" : ""
      } text-black dark:text-white transition-colors duration-300`}
    >
      <div>
        <h1 className="text-xl">Logo</h1>
      </div>
      <div className="flex space-x-4 text-white">
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
          className={`bg-[#5784C5] dark:bg-[#233a66] px-2 py-1 rounded-md`}
        >
          {isDarkMode ? (
            <div>{HEADER_ICON[0]}</div>
          ) : (
            <div>{HEADER_ICON[1]}</div>
          )}
        </button>
        <div className={`bg-[#5784C5] dark:bg-[#233a66] px-2 py-1 rounded-md`}>
          <div>{HEADER_ICON[2]}</div>
        </div>
        <div className={`bg-[#5784C5] dark:bg-[#233a66] px-2 py-1 rounded-md`}>
          <div>{HEADER_ICON[3]}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
