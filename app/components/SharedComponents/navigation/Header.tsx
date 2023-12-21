"use client";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Identity from "./Identity";
import Navbar from "./Navbar";
import SmallScreenNavbar from "./SmallScreenNavbar";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const changeState = () => {
    setIsSmallScreen(!isSmallScreen);
  };
  return (
    <header className="w-full flex justify-between items-start p-2 py-4 relative overflow-hidden  ">
     { isSmallScreen ? <div className="flex flex-col justify-start items-start">
      <Identity/>
      <SmallScreenNavbar  isMenuOpen={isSmallScreen} showSmallScreenMenu={changeState}  /> 
     </div>: <Identity />}
      

      <div>
        <BurgerIcon showSmallScreenMenu={changeState} />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
