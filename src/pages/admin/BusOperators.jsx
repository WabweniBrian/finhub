import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import BusOperatorsList from "../../components/admin/buses/BusOperatorsList";
import BusOperatorFormModal from "../../components/admin/buses/BusOperatorFormModal";
import Breadcrumb from "../../components/common/Breadcrumb";

const BusOperators = () => {
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
        <h1 className="text-2xl font-semibold">Bus Operators</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        <div className="flex-center-between pb-2 border-b">
          <button
            className="btn btn-secondary flex-align-center gap-x-2"
            onClick={handleOpenModal}
          >
            <FiPlus />
            <span>New</span>
          </button>
          <div>
            <select name="operator" id="operator" className="pr-8">
              <option value="">Select</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Link">Link</option>
              <option value="Y.Y Coaches">Y.Y Coaches</option>
              <option value="Global">Global</option>
            </select>
          </div>
        </div>
        <div>
          <BusOperatorsList handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* BusOperatorForm Modal */}
      <BusOperatorFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add Bus operator"
      />
    </div>
  );
};

export default BusOperators;
