import React from "react";
import NotificationsList from "../../components/admin/notifications/NotificationsList";
import Breadcrumb from "../../components/common/BreadCrumb";

const Notifications = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <NotificationsList />
      </div>
    </div>
  );
};

export default Notifications;
