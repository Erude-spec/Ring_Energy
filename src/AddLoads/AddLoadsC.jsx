import React from "react";
import "./AddLoadsC.css";
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import Button2C from "../Button2/Button2C";
import ButtonC from "../Button/ButtonC";
import { NavLink } from "react-router-dom";


const AddLoadsC = () => {
  return (
    <div className="a-r-homepage">
      <TitleC text={"Add Load"}/>
      <form method="GET" className="load">
        <div className="item">
          <label htmlFor="item">Item</label>
          <input type="text" id="item" />
        </div>
        <div className="quantity">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" value={1} />
        </div>
        <div className="rating">
          <label htmlFor="rating">KW rating per unit</label>
          <input type="number" id="rating" placeholder="In KW" />
        </div>
        <div className="duration">
          <label htmlFor="duration">Operating time in hrs</label>
          <input type="number" id="duration" placeholder="In hours" />
        </div>
      </form>
      <Button2C />
      <NavLink to={"/loads_per_facility"}>
        <Button2C />
      </NavLink>
      <div className="a-l-text">or did you want to:</div>
      <NavLink to={"/add_facility"}>
        <ButtonC text={"Add New Facility"}/>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default AddLoadsC;
