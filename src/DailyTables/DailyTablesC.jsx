import React from "react";

import TableHeadingC from "../TableHeader/TableHeadingC";
import "../DailyTables/DailyTablesC.css"
import TableBottomC from "../TableBottom/TableBottomC";
import Button2C from "../Button2/Button2C";
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import DailyReadingTableC from "../DailyReadingTable/DailyReadingTableC";
import { NavLink } from "react-router-dom";



const DailyTablesC = () => {
  return (
    <div className="d-t-homepage">
      <TitleC text={"Daily Meter Readings"}/>
      <div className="daily-tables">
        <TableHeadingC />
        <DailyReadingTableC />
        <DailyReadingTableC />
        <DailyReadingTableC />
        <DailyReadingTableC />
        <DailyReadingTableC />
        <DailyReadingTableC />
        <TableBottomC />
      </div>
      <Button2C />
      <NavLink to={"/monthly_tables"}>
        <Button2C />
      </NavLink>
      <Navbar />
    </div>
  );
};

export default DailyTablesC;
