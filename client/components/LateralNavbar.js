import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function LateralNavbar(props) {
  const {
    burgerMenuVisible,
    handleShowBurgerMenu,
    handleShowSearchBar,
  } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth >= 1224);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth >= 1224);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (burgerMenuVisible) {
    return (
      <div className="lateral-navbar-container">
        <ul className="lateral-menu">
          <li>
            <Link to="/" onClick={handleShowBurgerMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tutoriales" onClick={handleShowBurgerMenu}>
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleShowBurgerMenu}>
              Contact
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/anayib" target="_blank">
              Follow me on Twitter
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          className="closeLateralMenu"
          onClick={handleShowBurgerMenu}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            fill="rgba(190,190,190,1)"
          />
        </svg>
      </div>
    );
  } else if (!screenWidth) {
    return null;
  } else if (screenWidth) {
    return (
      <div className="lateral-navbar-container">
        <ul className="lateral-menu">
          <li>
            <Link to="/" onClick={handleShowSearchBar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tutoriales" onClick={handleShowSearchBar}>
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleShowSearchBar}>
              Contact
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/anayib" target="_blank">
              Follow me on Twitter
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="60"
          height="60"
          className="closeLateralMenu"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            fill="rgba(190,190,190,1)"
          />
        </svg>
      </div>
    );
  }
}

export default LateralNavbar;
