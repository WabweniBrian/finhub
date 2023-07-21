import React from "react";
import Breadcrumb from "../../components/common/BreadCrumb";
import Cards from "../../components/admin/home/Cards";
import BarChart from "../../components/admin/home/BarChart";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5">
        <Cards />
        <BarChart />
      </div>
    </div>
  );
};

export default AdminDashboard;
