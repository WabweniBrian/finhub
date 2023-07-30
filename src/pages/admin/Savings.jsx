import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import SavingsList from "../../components/admin/savings/SavingsList";

const Savings = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Savings</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <SavingsList />
      </div>
    </div>
  );
};

export default Savings;
