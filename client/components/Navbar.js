import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import LateralNavbar from "./LateralNavbar";
import { Context } from "../SearchContext";

function Navbar() {
  const [
    burgerMenuVisible,
    setBurgerMenuVisible,
    handleShowSearchBar,
  ] = useState(false);

  const handleShowBurgerMenu = () => {
    setBurgerMenuVisible(!burgerMenuVisible);
  };

  return (
    <header>
      <nav>
        <TopNavbar handleShowBurgerMenu={handleShowBurgerMenu} />
        <LateralNavbar
          burgerMenuVisible={burgerMenuVisible}
          handleShowBurgerMenu={handleShowBurgerMenu}
          handleShowSearchBar={handleShowSearchBar}
        />
      </nav>
    </header>
  );
}

export default Navbar;
