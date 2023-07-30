import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import LoanRepayersList from "../../components/admin/loans/LoanRepayersList";

const LoanRepayments = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Loan Repaymenst</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <LoanRepayersList />
      </div>
    </div>
  );
};

export default LoanRepayments;
