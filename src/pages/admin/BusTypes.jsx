import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import BusTypesList from "../../components/admin/buses/BusTypesList";
import useDataTables from "../../components/common/useDataTables";
import BusTypesFormModal from "../../components/admin/buses/BusTypesFormModal";
import Breadcrumb from "../../components/common/Breadcrumb";

const BusTypes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useDataTables();
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Bus Types</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        <div className="pb-2 border-b">
          <button
            className="btn btn-secondary flex-align-center gap-x-2"
            onClick={handleOpenModal}
          >
            <FiPlus />
            <span>New</span>
          </button>
        </div>
        <div>
          <BusTypesList handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* BusTypesForm Modal */}
      <BusTypesFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add Bus operator"
      />
    </div>
  );
};

export default BusTypes;
