import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { FaCoins } from "react-icons/fa";
import { BsPeople, BsWallet } from "react-icons/bs";
import AnalyticsCards from "../../components/admin/reports/AnalyticsCards";
import LineChart from "../../components/admin/reports/LineChart";
import {
  lineChartData,
  lineChartOptions,
  pieChartData,
  pieChartOptions,
} from "../../data/chartsData";
import PieChart from "../../components/admin/reports/PieChart";

const LoanReports = () => {
  const cardsData = [
    {
      id: 1,
      value: "12,500,000",
      title: "Total Loans",
      icon: <BsWallet />,
      isMoney: true,
      classes: "!bg-secondaryYellow/20 text-secondaryYellow",
      border: "!border-l-4 border-l-secondaryYellow",
    },
    {
      id: 2,
      value: 23,
      title: "Total Borrowers",
      icon: <BsPeople />,
      isMoney: false,
      classes: "!bg-tertiary/20 text-tertiary",
      border: "!border-l-4 border-l-tertiary",
    },
    {
      id: 3,
      value: "3,568,000",
      title: "Loan Profits",
      icon: <FaCoins />,
      isMoney: true,
      classes: "!bg-primary/20 text-primary",
      border: "!border-l-4 border-l-primary",
    },
  ];
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Reports</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4">
        <AnalyticsCards cardsData={cardsData} />
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <LineChart
            chartOptions={lineChartOptions}
            chartData={lineChartData}
          />
        </div>
        <div className="lg:col-span-1">
          <PieChart chartOptions={pieChartOptions} chartData={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default LoanReports;
