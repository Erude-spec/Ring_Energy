import React from "react";

import TableHeadingC from "../TableHeader/TableHeadingC";
import OneReading from "../OneReading/OneReading";
import "../DailyTables/DailyTablesC.css"
import TableBottomC from "../TableBottom/TableBottomC";
import Button2C from "../Button2/Button2C";
import TitleC from "../Title/TitleC";
// import TableBottomC from "../TableBottom/TableBottomC";

const DailyTablesC = () => {
  return (
    <div className="d-t-homepage">
      <TitleC/>
      <div className="daily-tables">
        <TableHeadingC />
        <OneReading />
        <OneReading />
        <OneReading />
        <OneReading />
        <OneReading />
        <OneReading />
        <TableBottomC />
      </div>
      <Button2C/>
      <Button2C/>
      {/* <TableBottomC/> */}
    </div>
  );
};

export default DailyTablesC;
