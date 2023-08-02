import React, { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import LoanPackagesList from "../../components/admin/loans/LoanPackagesList";
import AddLoanPackageFormModal from "../../components/admin/loans/AddLoanPackageFormModal";

const LoanPackages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Loan Packages</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <LoanPackagesList handleOpenModal={handleOpenModal} />
      </div>

      {/* AddLoanPackageForm Modal */}
      <AddLoanPackageFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default LoanPackages;
