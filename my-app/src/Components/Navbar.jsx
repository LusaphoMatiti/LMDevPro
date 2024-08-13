import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/LM.svg";
import "../styling/Navbar.css";

import { socialLinks, homePageLinks, otherPageLinks } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const pageLinks = isHomePage ? homePageLinks : otherPageLinks;

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </Link>

            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;

              if (icon === "fas fa-envelope") {
                return (
                  <li key={id}>
                    <a
                      href={`mailto:clint@cnccustoms.co.za`}
                      className="nav-icon"
                      rel="noopener noreferrer"
                    >
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              }

              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    className="nav-icon"
                    rel="noopener noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className={`side-menu ${showMenu ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>

        {pageLinks.map((link) => (
          <a key={link.id} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
