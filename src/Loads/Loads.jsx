import React from "react";
import LoadsCardC from "../LoadsCard/LoadsCardC";
import TitleC from "../Title/TitleC";
import "../Loads/Loads.css";
import Navbar from "../NavBar/NavBarC";
import ButtonC from "../Button/ButtonC";

const Loads = () => {
  return (
    <div className="l-homepage">
      <TitleC />
      <LoadsCardC />
      <LoadsCardC />
      <LoadsCardC />
      <LoadsCardC />
      <LoadsCardC />
      <LoadsCardC />
      <ButtonC />
      <Navbar />
    </div>
  );
};

export default Loads;
