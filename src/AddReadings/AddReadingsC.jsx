import React from "react";
import "../AddReadings/AddReadingsC.css";
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import Button2C from "../Button2/Button2C";
import { NavLink } from "react-router-dom";

const AddReadingsC = () => {
  return (
    <div className="meter-reading-homepage">
      <TitleC text={"Add Meter Reading"}/>
      <form method="GET" className="m-reading">
        <div className="m-date">
          <label htmlFor="m-date">Date</label>
          <input type="date" id="m-date" />
        </div>
        <div className="m-time">
          <label htmlFor="m-time">Time</label>
          <input type="time" id="m-time" value={1} />
        </div>
        <div className="m-value">
          <label htmlFor="m-value">Meter Reading</label>
          <input type="number" id="m-value" />
        </div>
      </form>
      
        <Button2C />
      
      <NavLink to={"daily_tables"}>
        <Button2C />
      </NavLink>

      <Navbar />
    </div>
  );
};

export default AddReadingsC;
