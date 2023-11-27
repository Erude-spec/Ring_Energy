import React from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineElectricMeter } from "react-icons/md";
import { BsPlug } from "react-icons/bs";
import "../NavBar/NavBarC.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/"} className={"navLink"}>
        <div className="icons_navbar">
          <BiHome className="icon_navbar" />
          Home
        </div>
      </NavLink>
      <NavLink to={"/meter_readings"} className={"navLink"}>
        <div className="icons_navbar">
          <MdOutlineElectricMeter className="icon_navbar" />
          Meter Reading
        </div>
      </NavLink>
      <NavLink to={"/loads"} className={"navLink"}>
        <div className="icons_navbar">
          <BsPlug className="icon_navbar" />
          Loads
        </div>
      </NavLink>
      {/* <Outlet /> */}
    </div>
  );
};

export default Navbar;
