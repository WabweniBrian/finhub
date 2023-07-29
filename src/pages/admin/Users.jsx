import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import UsersList from "../../components/admin/users/UsersList";
import useDataTables from "../../components/common/useDataTables";
import Breadcrumb from "../../components/common/Breadcrumb";

const Users = () => {
  useDataTables();
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        <div className="pb-2 border-b">
          <button className="btn btn-secondary flex-align-center gap-x-2">
            <FiPlus />
            <span>New</span>
          </button>
        </div>
        <div>
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Users;
