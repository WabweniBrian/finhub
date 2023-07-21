import React, { useState } from "react";
import ScheduleList from "../../components/admin/schedule/ScheduleList";
import { FiPlus } from "react-icons/fi";
import ScheduleFormModal from "../../components/admin/schedule/ScheduleFormModal";
import Breadcrumb from "../../components/common/BreadCrumb";

const Schedule = () => {
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
        <h1 className="text-2xl font-semibold">Schedule</h1>
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
          <ScheduleList handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* ScheduleForm Modal */}
      <ScheduleFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add Schedule"
      />
    </div>
  );
};

export default Schedule;
