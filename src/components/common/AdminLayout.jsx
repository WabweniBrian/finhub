import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  uiStore,
} from "../../features/uiSlice";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CommandBox from "./CommandBox";

const AdminLayout = () => {
  const { isSidebarReduced } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseDropdown = () => {
    dispatch(closeDropdown());
    dispatch(closeNotifications());
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 transition-a  ${
          isSidebarReduced
            ? "lg:grid-cols-60-auto small"
            : "lg:grid-cols-250-auto"
        }`}
      >
        <div onClick={handleCloseDropdown}>
          <Sidebar />
        </div>
        <div className="bg-main-bg relative z-10">
          <Navbar />

          <div
            className="px-4 pt-20 pb-6 lg:px-6"
            onClick={handleCloseDropdown}
          >
            <div className="min-h-[75vh]">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <CommandBox />
    </>
  );
};

export default AdminLayout;
