import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/LM.svg";
import { socialLinks, homePageLinks, otherPageLinks } from "../data";
import "../style/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pageLinks = isHomePage ? homePageLinks : otherPageLinks;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between lg:flex lg:items-center bg-gray-900">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-auto h-6 sm:h-7" />
            </Link>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
