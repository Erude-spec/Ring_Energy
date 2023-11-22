import React from 'react'
import { MdOutlineElectricMeter } from "react-icons/md";
import "../LoadsCard/LoadsCardC.css"
const LoadsCardC = () => {
  return (
    <div className="loadsCard">
      <MdOutlineElectricMeter className="load-meter" />
      <div className="CVS-text"> CVS Labs</div>
      <div className="m-reading">8.3 per capita</div>
      <button className="addLoadBtn">AddLoad</button>
    </div>
  );
}

export default LoadsCardC