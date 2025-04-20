import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { socialLinks, homePageLinks, otherPageLinks } from "../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pageLinks = isHomePage ? homePageLinks : otherPageLinks;

  const canonicalUrl = `https://lmdevpro.co.za${location.pathname}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#FAFAFA] shadow-xl" : "bg-transparent"
        } font-bebas`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Go to Home" className="z-30 cursor-pointer">
            <img
              src={scrolled ? "./Logo.jpg" : "./LM.svg"}
              alt="LMDevPro Logo"
              className="w-9 sm:w-19  object-contain lg:ml-5"
            />
          </a>

          {/* Centered Links */}
          <div className="hidden lg:flex flex-grow justify-center space-x-8">
            {pageLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`cursor-pointer ${
                  scrolled ? "text-[#111111]" : "text-white"
                } hover:underline`}
                aria-label={`Navigate to ${link.text}`}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden cursor-pointer lg:flex space-x-4 lg:mr-5">
            {socialLinks.map(({ id, href, icon, ariaLabel }) => (
              <a
                key={id}
                href={href}
                target={icon !== "fas fa-envelope" ? "_blank" : "_self"}
                rel={
                  icon !== "fas fa-envelope" ? "noopener noreferrer" : undefined
                }
                className={`${
                  scrolled ? "text-[#111111]" : "text-white"
                } hover:text-gray-500`}
                aria-label={ariaLabel}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={`cursor-pointer ${
                scrolled ? "text-[#111111]" : "text-white"
              } hover:text-gray-200 sm:hover:text-gray-500  focus:outline-none`}
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

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          } absolute inset-x-0 top-16 z-20 w-full ${
            scrolled ? "bg-[#FAFAFA]" : "bg-black"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col px-6 py-4 space-y-2">
            {pageLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`cursor-pointer block text-center py-2 ${
                  scrolled ? "text-[#111111]" : "text-white"
                } hover:text-gray-200 sm:hover:text-gray-500 `}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                aria-label={`Navigate to ${link.text}`}
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4 mb-4">
            {socialLinks.map(({ id, href, icon, ariaLabel }) => (
              <a
                key={id}
                href={href}
                target={icon !== "fas fa-envelope" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`${
                  scrolled ? "text-[#111111]" : "text-white"
                } hover:text-gray-200 sm:hover:text-gray-500 `}
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
