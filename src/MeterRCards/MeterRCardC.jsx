import React from 'react'
import "./CardC.css"
import { MdOutlineElectricMeter } from "react-icons/md";
const CardC = () => {
  return (
      <div className="card">
        <MdOutlineElectricMeter className="electric-meter" />
        Meter readings
      </div>
  );
}

export default CardC