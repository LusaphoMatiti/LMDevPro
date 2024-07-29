import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";
import { socialLinks, homePageLinks } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
              <img src="LM.jpg" className="nav-logo" />
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
            {homePageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <Link to={href} className="nav-link">
                    {text}
                  </Link>
                </li>
              );
            })}
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

        {homePageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <a key={id} href={href}>
              {text}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
