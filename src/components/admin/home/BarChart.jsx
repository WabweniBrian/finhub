import React from "react";
import { Chart } from "./Chart";

const BarChart = () => {
  return (
    <div className="card mt-5">
      <div className="flex-center-between pb-2 border-b mb-4">
        <h1>Monthly Reservations Report</h1>
        <div>
          <select name="years" id="years" className="!pr-8">
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <Chart />
    </div>
  );
};

export default BarChart;
