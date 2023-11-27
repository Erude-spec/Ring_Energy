import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MeterReadings from "./MeterReadings/MeterReadings";
import Loads from "./Loads/Loads";
import DailyTablesC from "./DailyTables/DailyTablesC";
import MonthlyReadings from "./MonthlyReadings/MonthlyReadingsC";
import AddReadingsC from "./AddReadings/AddReadingsC";
import AddLoadsC from "./AddLoads/AddLoadsC";
import AddFacility from "./AddFacility/AddFacility";
import LoadsPerFacility from "./LoadsPerFacility/LoadsPerFacility";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="meter_readings" element={<MeterReadings />} />
        <Route path="loads" element={<Loads />} />
        <Route path="daily_tables"  element={<DailyTablesC />} />
        <Route path="monthly_tables" element={<MonthlyReadings />} />
        <Route path="add_readings" element={<AddReadingsC />} />
        <Route path="add_loads" element={<AddLoadsC />} />
        <Route path="add_facility" element={<AddFacility />} />
        <Route path="loads_per_facility" element={<LoadsPerFacility />} />
        <Route path="slide_menu" element={<LoadsPerFacility />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
