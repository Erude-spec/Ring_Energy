import React from "react";
// import { MdOutlineElectricMeter } from "react-icons/md";
// import React from "react";
// import img from "../Data/images/homeImage.png";

// import { AiOutlinePlus } from "react-icons/ai";
// import { BiHome } from "react-icons/bi";
// import { MdOutlineElectricMeter } from "react-icons/md";
// import { BsPlug } from "react-icons/bs";
import "./MeterReadings.css";
import CardC from "../MeterRCards/MeterRCardC";
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import Topic from "../Topic/Topic";
// import "../HomePage/HomePage.css"

const MeterReadings = () => {
  return (
    <div className="m-r-homepage">
      <TitleC />
      <Topic />
      <div className="cards">
        <CardC />
        <CardC />
      </div>
      <Topic />
      <div className="cards">
        <CardC />
        <CardC />
        <CardC />
      </div>
      <Navbar />
    </div>
  );
};

export default MeterReadings;
