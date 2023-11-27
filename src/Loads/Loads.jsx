import React from "react";
import LoadsCardC from "../LoadsCard/LoadsCardC";
import TitleC from "../Title/TitleC";
import "../Loads/Loads.css";
import Navbar from "../NavBar/NavBarC";
import ButtonC from "../Button/ButtonC";
import { NavLink } from "react-router-dom";


const Loads = () => {
  return (
    <div className="loads-homepage">
      <div className="loads-page">
        <TitleC text={"Loads"}/>
        <LoadsCardC facility={"CVS LABS"} per_capita={"8.3"}/>
        <LoadsCardC facility={"CVS LABS"} per_capita={"8.3"}/>
        <LoadsCardC facility={"CVS LABS"} per_capita={"8.3"}/>
        
      </div>
      <NavLink to={"/add_facility"}>
        <ButtonC text={"Add New Facility"}/>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Loads;
