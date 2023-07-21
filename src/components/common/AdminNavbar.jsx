/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { BiChevronDown, BiMenu, BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  closeDropdown,
  openSidebar,
  toggleDropdown,
} from "../../features/uiSlice";
import Dropdown from "./DropDown";
import { Link } from "react-router-dom";
import { useRef } from "react";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const commandButtonRef = useRef(null);

  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
  };

  const handleClick = () => {
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "k",
    });

    document.dispatchEvent(event);
  };

  return (
    <div
      className="fixed z-50 px-3 py-2 bg-white navbar lg:px-6"
      style={{ width: "calc(100vw - 250px)" }}
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="gap-1 flex-align-center md:gap-3">
          <Link to="/" className="p-2 lg:hidden flex-shrink-0 !opacity-100">
            <img src="/images/logo.jpg" alt="logo" className="w-16" />
          </Link>
          <div
            className="icon-box lg:hidden -mt-4"
            onClick={() => dispatch(openSidebar())}
          >
            <BiMenu className="text-lg" />
          </div>
          <Link to="/admin" className="hidden lg:block !opacity-100">
            <img src="/images/logo2.png" alt="logo" className="w-16" />
          </Link>
        </div>

        <div className="flex-align-center gap-3">
          <button
            ref={commandButtonRef}
            className="btn hidden border border-primary text-primary shadow shadow-primary/30 md:flex-align-center gap-x-2"
            onClick={handleClick}
          >
            <div className="flex-shrink-0">
              <BiSearchAlt />
            </div>
            <div className="flex-shrink-0">
              <span>Ctrl + k</span>
            </div>
          </button>
          <div className="flex-align-center gap-x-3 md:gap-x-1">
            {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
            <div className="relative -mt-4 lg:mt-0 flex-shrink-0 space-x-1 flex-align-center md:pl-4 z-50">
              <div
                className="absolute top-0 left-0 w-full h-full dropdown-btn sm:cursor-pointer"
                onClick={() => dispatch(toggleDropdown())}
              ></div>
              <motion.img
                src="/images/avatar.png"
                alt=""
                className="w-8 h-8 rounded-full dropdown-btn"
                whileTap={{ scale: 0.5 }}
              />
              <BiChevronDown className="dropdown-btn" />
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
