import React from 'react'
// import { MdOutlineElectricMeter } from "react-icons/md";
import "../LoadsCard/LoadsCardC.css"
import { NavLink } from 'react-router-dom';
import { BsPlug } from "react-icons/bs";

const LoadsCardC = ({facility,per_capita}) => {
  return (
    <NavLink to={"/loads_per_facility"}>
      <div className="loadsCard">
        <BsPlug className="load-meter" />
        <div className="CVS-text"> {facility}</div>
        <div className="digits">{per_capita && `${per_capita} per capita`}</div>
        <NavLink to={"/add_loads"}>
          <button className="addLoadBtn">AddLoad</button>
        </NavLink>
      </div>
    </NavLink>
  );
}

export default LoadsCardC