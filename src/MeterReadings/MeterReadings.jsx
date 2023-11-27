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
import { NavLink } from "react-router-dom";
// import "../HomePage/HomePage.css"

const MeterReadings = () => {
  return (
    <div className="m-r-homepage">
      <TitleC text={"Meter Readings"} />
      <Topic text={"Daily"} />
      <div className="m-r-cards">
        <NavLink to={"/daily_tables"}>
          <CardC text={"Meter Reading"} icon={"meter"} />
        </NavLink>
        <CardC text={"View graphs"} icon={"graph"} />
      </div>
      <Topic text={"Monthly"} />
      <div className="m-r-cards">
        <NavLink to={"/monthly_tables"}>
          <CardC text={"Meter Reading"} icon={"meter"} />
        </NavLink>
        <CardC text={"View graphs"} icon={"graph"} />
      </div>
      <Navbar />
    </div>
  );
};

export default MeterReadings;
