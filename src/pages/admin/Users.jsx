import React, { useState } from "react";
import UsersList from "../../components/admin/users/UsersList";
import Breadcrumb from "../../components/common/Breadcrumb";

const Users = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        <div>
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Users;
