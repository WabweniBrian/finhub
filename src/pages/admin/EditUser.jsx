import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import AddUsersForm from "../../components/admin/users/AddUsersForm";
import EditUsersForm from "../../components/admin/users/EditUsersForm";

const EditUser = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Update User</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <EditUsersForm />
      </div>
    </div>
  );
};

export default EditUser;
