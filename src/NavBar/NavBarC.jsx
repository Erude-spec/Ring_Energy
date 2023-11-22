import React from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineElectricMeter } from "react-icons/md";
import { BsPlug } from "react-icons/bs";
import "../NavBar/NavBarC.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icons_navbar">
        <BiHome className="icon_navbar" />
        Home
      </div>
      <div className="icons_navbar">
        <MdOutlineElectricMeter className="icon_navbar" />
        Meter Reading
      </div>
      <div className="icons_navbar">
        <BsPlug className="icon_navbar" />
        Loads
      </div>
    </div>
  );
};

export default Navbar;
