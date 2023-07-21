import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import UsersList from "../../components/admin/users/UsersList";
import useDataTables from "../../components/common/useDataTables";
import UserFormModal from "../../components/admin/users/UserFormModal";
import Breadcrumb from "../../components/common/BreadCrumb";

const Users = () => {
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
        <h1 className="text-2xl font-semibold">Users</h1>
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
          <UsersList handleOpenModal={handleOpenModal} />
        </div>
      </div>

      {/* UserForm Modal */}
      <UserFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add User"
      />
    </div>
  );
};

export default Users;
