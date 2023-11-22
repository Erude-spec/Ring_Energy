import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import "../Button/ButtonC.css"
const ButtonC = () => {
  return (
    <button className="btn">
      <AiOutlinePlus className="icon" />{" "}
      <div className="button_text"> Add Meter reading</div>
    </button>
  );
}

export default ButtonC