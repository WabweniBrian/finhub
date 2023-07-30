import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import RolesList from "../../components/admin/users/RolesList";

const RolesPermissions = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Roles & Permissions</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <RolesList />
      </div>
    </div>
  );
};

export default RolesPermissions;