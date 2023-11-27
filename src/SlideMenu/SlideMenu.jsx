import React from "react";
import { NavLink } from "react-router-dom";
import "../SlideMenu/SlideMenu.css"
const SlideMenu = () => {
  return (
    <div className="slideMenu-homepage">
      <div className="slideMenu">
        <NavLink to={"/"}> Home</NavLink>
        <NavLink to={"/meter_readings"}>Meter Readings</NavLink>
        <NavLink to={"/loads"}>Loads</NavLink>
        <NavLink to={"/daily_tables"}>Daily Meter Readings</NavLink>
        <NavLink to={"/monthly_tables"}>Monthly Consumption</NavLink>
        <NavLink to={"/add_readings"}>Add Meter Reading</NavLink>
        <NavLink to={"/add_loads"}>Add Load</NavLink>
        <NavLink to={"/add_facility"}>Add Facility</NavLink>
        <NavLink to={"/loads_per_facility"}>Loads per Facility</NavLink>
      </div>
    </div>
  );
};

export default SlideMenu;
