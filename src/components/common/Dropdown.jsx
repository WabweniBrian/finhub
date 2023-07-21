import React from "react";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { FiGlobe, FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { isDropdownOpen } = useSelector(uiStore);
  return (
    <>
      {isDropdownOpen && (
        <motion.div
          className="dropdown absolute right-0 top-full mt-1 p-2 !rounded-xl w-64 shadow-lg border shadow-slate-200 z-40 bg-white"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <Link
            to="/admin/profile"
            className="p-2 !opacity-100 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100"
          >
            <BiUserCircle className="text-muted" />
            <span className="text-muted">My Profile</span>
          </Link>
          <Link
            to="/"
            className="p-2 !opacity-100 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100"
          >
            <FiGlobe className="text-muted" />
            <span className="text-muted">Website</span>
          </Link>
          <Link
            to="/admin/contact"
            className="p-2 !opacity-100 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100"
          >
            <FiPhone className="text-muted" />
            <span className="text-muted">Contact STL Support</span>
          </Link>
          <Link
            to="/login"
            className="!opacity-100 p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiLogOut className="text-muted" />
            <span className="text-muted">Log out</span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;