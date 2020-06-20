import React, { useContext } from "react";
import SearchInterface from "./SearchInterface";
import { Link } from "react-router-dom";
import { Context } from "../SearchContext";

function TopNavbar(props) {
  const { searchVisible, handleShowSearchBar } = useContext(Context);
  const { handleShowBurgerMenu } = props;
  let searchWidth = "80";
  let searchHeight = "80";

  if (window.innerWidth >= 1024) {
    searchWidth = "50";
    searchHeight = "30";
  }

  if (searchVisible) {
    return <SearchInterface />;
  } else {
    return (
      <div className="top-navbar-container">
        <div className="menu-burger" onClick={handleShowBurgerMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="80"
            height="80"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
              fill="rgba(190,190,190,1)"
            />
          </svg>
        </div>
        <div className="home-top-navbar-link">
          <p>
            <Link to="/">Articles</Link>
          </p>
        </div>
        <div className="search-icon" onClick={handleShowSearchBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={searchWidth}
            height={searchHeight}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
              fill="rgba(190,190,190,1)"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default TopNavbar;
