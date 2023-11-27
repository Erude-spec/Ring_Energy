import React from "react";
import "../MonthlyReadings/MonthlyReadingsC.css"
import TitleC from "../Title/TitleC";
import Navbar from "../NavBar/NavBarC";
import TableHeadingC from "../TableHeader/TableHeadingC";
import TableBottomC from "../TableBottom/TableBottomC";
import MonthlyReadingTable from "../MonthlyReadingTable/MonthlyReadingTableC";
import Button2C from "../Button2/Button2C";


const MonthlyReadings = () => {
  return (
    <div className="monthly-r-homepage">
      <div>
        <TitleC text={"Monthly Consumption"}/>
        <TableHeadingC />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <MonthlyReadingTable />
        <TableBottomC />
      </div>
      <Button2C />
      <Navbar />
    </div>
  );
};

export default MonthlyReadings;
