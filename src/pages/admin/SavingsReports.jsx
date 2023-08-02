import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { FaCoins } from "react-icons/fa";
import { BsPeople, BsWallet } from "react-icons/bs";
import AnalyticsCards from "../../components/admin/reports/AnalyticsCards";
import { donutChartData, donutChartOptions } from "../../data/chartsData";
import BarChart from "../../components/admin/home/BarChart";
import PieChart from "../../components/admin/reports/PieChart";
import DonutChart from "../../components/admin/reports/DonutChart";

const SavingsReports = () => {
  const cardsData = [
    {
      id: 1,
      value: "35,500,000",
      title: "Total Savings",
      icon: <BsWallet />,
      isMoney: true,
      classes: "!bg-secondaryYellow/20 text-secondaryYellow",
      border: "!border-l-4 border-l-secondaryYellow",
    },
    {
      id: 2,
      value: 123,
      title: "Total Users",
      icon: <BsPeople />,
      isMoney: false,
      classes: "!bg-tertiary/20 text-tertiary",
      border: "!border-l-4 border-l-tertiary",
    },
    {
      id: 3,
      value: "7,568,000",
      title: "Income Profits",
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
          <BarChart />
        </div>
        <div className="lg:col-span-1 mt-5">
          <DonutChart
            chartOptions={donutChartOptions}
            chartData={donutChartData}
          />
        </div>
      </div>
    </div>
  );
};

export default SavingsReports;
