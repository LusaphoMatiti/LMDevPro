import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import logo from "../images/LM.svg";
import { socialLinks, homePageLinks, otherPageLinks } from "../data";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pageLinks = isHomePage ? homePageLinks : otherPageLinks;

  // Generate canonical URL dynamically
  const canonicalUrl = `https://lmdevpro.co.za${location.pathname}`;

  return (
    <>
      {/* Add canonical link tag using Helmet */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <nav className="shadow bg-sky-950 z-20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo on the left */}
          <Link
            to="/"
            aria-label="Go to Home"
            className="z-30" // Higher z-index to ensure it's clickable
          >
            <img
              src={logo}
              alt="LMDevPro Logo"
              className="h-6 sm:h-12 sm:w-6 lg:ml-5 lg:h-6 lg:w-6"
            />
          </Link>

          {/* Centered Links on large screens */}
          <div className="hidden lg:flex flex-grow justify-center space-x-8">
            {pageLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300"
                aria-label={`Navigate to ${link.text}`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Social Links on the right on large screens */}
          <div className="hidden lg:flex space-x-4 lg:mr-5">
            {socialLinks.map(({ id, href, icon, ariaLabel }) => (
              <a
                key={id}
                href={href}
                target={icon !== "fas fa-envelope" ? "_blank" : "_self"}
                rel={
                  icon !== "fas fa-envelope" ? "noopener noreferrer" : undefined
                }
                className="text-white hover:text-gray-500 dark:hover:text-gray-300"
                aria-label={ariaLabel}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden z-30">
            {" "}
            {/* Higher z-index to ensure it's clickable */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                setIsOpen(!isOpen); // Toggle mobile menu state
              }}
              className="text-white hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
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

        {/* Mobile menu */}
        <div
          className={`${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          } absolute inset-x-0 top-16 z-20 w-full bg-sky-950 transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col px-6 py-4 space-y-2 text-white">
            {pageLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="block text-center py-2 hover:text-gray-900 dark:hover:text-gray-200"
                onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  setIsOpen(false); // Close menu on click
                }}
                aria-label={`Navigate to ${link.text}`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4 mb-4">
            {socialLinks.map(({ id, href, icon, ariaLabel }) => (
              <a
                key={id}
                href={href}
                target={icon !== "fas fa-envelope" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 dark:hover:text-gray-300"
                aria-label={ariaLabel}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
