import React from "react";
import img from "../Data/images/homeImage.png";
import "./HomePage.css";
// import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../NavBar/NavBarC";
import TitleC from "../Title/TitleC";
import { NavLink } from "react-router-dom";
import ButtonC from "../Button/ButtonC";

// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <TitleC text={"Home"} />
      <img src={img} alt="image" />
      <NavLink to={"/add_readings"}>
        <ButtonC text={"Add Meter Reading"}/>
      </NavLink>
      <NavLink to={"/loads"}>
        <ButtonC text={"Add Load"}/>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default HomePage;
