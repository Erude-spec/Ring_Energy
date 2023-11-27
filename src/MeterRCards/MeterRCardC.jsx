import React from 'react'
import "./MeterRCardC.css"
import { GoGraph } from "react-icons/go";
import { MdOutlineElectricMeter } from "react-icons/md";
<GoGraph />;
const CardC = ({ icon, text }) => {
  const iconsMapping = {
    meter: <MdOutlineElectricMeter className="iconStyle" />,
    graph: <GoGraph className="iconStyle" />,
  };
  return (
    <div className="card">
      {icon && iconsMapping[icon]}
      {text}
    </div>
  );
};

export default CardC