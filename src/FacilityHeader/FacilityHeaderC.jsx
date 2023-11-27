import React from "react";
import '../FacilityHeader/FacilityHeaderC.css';
const FacilityHeaderC = () => {
  return (
    <div className="facility_header">
      {/* <div className="table-header"> */}
      <div>Item</div>
      <div>Quantity</div>
      <div>kW</div>
      <div>Hrs run</div>
    </div>
  );
};

export default FacilityHeaderC;
