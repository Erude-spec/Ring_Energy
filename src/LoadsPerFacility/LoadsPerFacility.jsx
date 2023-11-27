import React from "react";
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import Topic from "../Topic/Topic";
import "../LoadsPerFacility/LoadsPerFacility.css"
import FacilityHeaderC from "../FacilityHeader/FacilityHeaderC";
import FacilityTable from "../FacilityTable/FacilityTableC";
import TableBottomC from "../TableBottom/TableBottomC";

const LoadsPerFacility = () => {
  return (
    <div>
      <TitleC text={"Loads per Facility"}/>
      <div className="container2">
        <Topic text={"CVS Labs"}/>
        <div>
          <FacilityHeaderC />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <TableBottomC />
        </div>
        <Topic text={"Machine Shop"}/>
        <div>
          <FacilityHeaderC />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <TableBottomC />
        </div>
        <Topic text={"Welding Shop"}/>
        <div>
          <FacilityHeaderC />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <TableBottomC />
        </div>
        <Topic text={"Sheet Metal"}/>
        <div>
          <FacilityHeaderC />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <TableBottomC />
        </div>
        <Topic text={"Power House"}/>
        <div>
          <FacilityHeaderC />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <TableBottomC />
        </div>
        <Topic text={"Trans, offices and lecture halls"}/>
        <div>
          <FacilityHeaderC />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <FacilityTable />
          <TableBottomC />
        </div>
       
      </div>
      <Navbar />
    </div>
  );
};

export default LoadsPerFacility;
