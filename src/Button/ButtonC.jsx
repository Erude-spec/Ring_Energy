import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import "../Button/ButtonC.css"
const ButtonC = ({text}) => {
  return (
    <button className="btn">
      <AiOutlinePlus className="icon" />{" "}
      <div className="button_text">{text}</div>
    </button>
  );
}

export default ButtonC