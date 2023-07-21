import React from "react";
import Cards from "../../components/admin/home/Cards";
import BarChart from "../../components/admin/home/BarChart";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="mt-5">
        <Cards />
        <BarChart />
      </div>
    </div>
  );
};

export default AdminDashboard;
