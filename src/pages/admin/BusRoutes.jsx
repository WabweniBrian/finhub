import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import RoutesList from "../../components/admin/bus-routes/RoutesList";
import BusRoutesFormModal from "../../components/admin/bus-routes/BusRoutesFormModal";
import Breadcrumb from "../../components/common/BreadCrumb";

const BusRoutes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Bus Routes</h1>
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
          <RoutesList handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* BusRoutesForm Modal */}
      <BusRoutesFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add Bus operator"
      />
    </div>
  );
};

export default BusRoutes;
