import React from "react";
import RecentCustomers from "../../components/admin/home/RecentCustomers";
import { BiBusSchool } from "react-icons/bi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiRoad } from "react-icons/gi";
import Breadcrumb from "../../components/common/BreadCrumb";
import AnalyticsCards from "../../components/admin/reports/AnalyticsCards";

const ConductorDashboard = () => {
  const cardsData = [
    {
      id: 1,
      value: 4,
      title: "Reservations Today",
      icon: <MdAirlineSeatReclineExtra />,
      classes: "!bg-cyan-600/20 text-cyan-600",
    },
    {
      id: 2,
      value: 5,
      title: "Functional Routes",
      icon: <GiRoad />,
      classes: "!bg-primary/20 text-primary",
    },
    {
      id: 3,
      value: 5,
      title: "Functional Buses",
      icon: <BiBusSchool />,
      classes: "!bg-secondary/20 text-secondary",
    },
  ];
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5">
        <AnalyticsCards cardsData={cardsData} />
      </div>
      <div className="mt-5">
        <RecentCustomers />
      </div>
    </div>
  );
};

export default ConductorDashboard;
