/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { BiBell, BiChevronDown, BiMenu, BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  openSidebar,
  toggleDropdown,
  toggleNotifications,
  toggleSidebarWidth,
  uiStore,
} from "../../features/uiSlice";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Tooltip from "./Tooltip";
import { FiMoon, FiSun } from "react-icons/fi";
import Notifications from "./Notifications";

const Navbar = () => {
  const { isSidebarReduced } = useSelector(uiStore);
  const dispatch = useDispatch();
  const commandButtonRef = useRef(null);

  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch(closeNotifications());
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
      style={{
        width: isSidebarReduced ? "calc(100vw - 60px)" : "calc(100vw - 250px)",
      }}
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="gap-1 flex-align-center md:gap-3">
          <Link to="/" className="p-2 lg:hidden flex-shrink-0 !opacity-100">
            <img src="/Logo.png" alt="logo" className="w-8" />
          </Link>
          <div
            className="icon-box lg:hidden"
            onClick={() => dispatch(openSidebar())}
          >
            <BiMenu className="text-lg" />
          </div>
          <Tooltip text="Menu toggle" position="right">
            <div
              className="icon-box !hidden lg:!grid"
              onClick={() => dispatch(toggleSidebarWidth())}
            >
              <BiMenu className="text-lg" />
            </div>
          </Tooltip>
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
            {/*---------------------- Notifications toggle------------------------------------------------ */}
            <Tooltip text="Notifications" position="bottom">
              <div
                className="icon-box !opacity-100 relative notification-btn"
                onClick={() => dispatch(toggleNotifications())}
              >
                <div className="relative">
                  <BiBell className="notification-btn text-muted" />
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-600 notification-btn"></div>
                </div>
                <Notifications />
              </div>
            </Tooltip>
            {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
            <div className="relative lg:mt-0  md:pl-4 z-50">
              <Tooltip text="Profile" position="bottom">
                <div
                  className="absolute top-0 left-0 w-full h-full dropdown-btn sm:cursor-pointer"
                  onClick={() => dispatch(toggleDropdown())}
                ></div>
                <div className="flex-shrink-0 space-x-1 flex-align-center">
                  <motion.img
                    src="/images/avatar.png"
                    alt=""
                    className="w-8 h-8 rounded-full dropdown-btn"
                    whileTap={{ scale: 0.5 }}
                  />
                  <BiChevronDown className="dropdown-btn" />
                </div>
              </Tooltip>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
