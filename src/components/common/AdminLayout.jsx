import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeDropdown } from "../../features/uiSlice";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import CommandBox from "./CommandBox";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const handleCloseDropdown = () => {
    dispatch(closeDropdown());
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-16-auto">
        <div onClick={handleCloseDropdown}>
          <Sidebar />
        </div>
        <div className="bg-main-bg">
          <AdminNavbar />
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
