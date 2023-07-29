import React from "react";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
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
          className="dropdown absolute right-0 top-full mt-1 p-2 !rounded-xl w-40 shadow-lg border shadow-slate-600/10 z-40 bg-white"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <Link
            to="/profile"
            className="p-2 !opacity-100 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100"
          >
            <BiUserCircle className="text-muted" />
            <span className="text-muted">My Profile</span>
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
