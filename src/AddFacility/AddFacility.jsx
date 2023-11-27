import React from "react";
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import "../AddFacility/AddFacility.css";
import Button2C from "../Button2/Button2C";
import { NavLink } from "react-router-dom";

const AddFacility = () => {
  return (
    <div className="add-f-homepage">
      <TitleC text={"Add Facility"}/>
      <form method="GET" className="add-facility">
        <div className="facility-name">
          <label htmlFor="facility-name">Facility Name:</label>
          <input type="text" id="facility-name" />
        </div>
      </form>
      <Button2C />
      <NavLink to={"/loads"}>
        <Button2C />
      </NavLink>
      <Navbar />
    </div>
  );
};

export default AddFacility;
