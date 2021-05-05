import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Headline from "../news/Headline";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar sticky-top ">
        <Link to="/" className="navbar-logo mb-3" onClick={closeMobileMenu}>
          PDHS Courier
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/stations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Stations
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/rate-calculator"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Rate Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/faq"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <i className="fa fa-user"></i> Sign Up
            </Link>
          </li>
        </ul>
      
      </nav>
   
    </>
  );
}

export default Navbar;
