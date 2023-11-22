import React from "react";
import img from "../Data/images/homeImage.png";
import "./HomePage.css";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../NavBar/NavBarC";
import TitleC from "../Title/TitleC";

const HomePage = () => {
  return (
    <div className="homepage">
      <TitleC />
      <img src={img} alt="image" />

      <button className="btn">
        <AiOutlinePlus className="icon" />{" "}
        <div className="button_text"> Add Meter reading</div>
      </button>
      <button className="btn btn2">
        <AiOutlinePlus className="icon" />{" "}
        <div className="button_text2"> Add Load</div>
      </button>
      <Navbar />
    </div>
  );
};

export default HomePage;
