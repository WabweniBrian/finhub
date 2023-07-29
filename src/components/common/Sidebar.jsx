/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/sidebarLinks";
import { closeSidebar, expandWidth, uiStore } from "../../features/uiSlice";
import Tooltip from "./Tooltip";
import Submenu from "./Submenu";

const Sidebar = () => {
  const [size, setSize] = useState("");
  const { isSidebarOpen, isSidebarReduced } = useSelector(uiStore);
  const dispatch = useDispatch();

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("modal")) dispatch(closeSidebar());
  };

  const expandSidebarWidth = () => {
    const newSize = window.innerWidth;
    setSize(newSize);
    if (newSize < 1024) {
      dispatch(expandWidth());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", expandSidebarWidth);
    return () => window.removeEventListener("resize", expandSidebarWidth);
  }, []);

  return (
    <div
      className={`modal ${isSidebarOpen ? "open" : ""}`}
      onClick={handleCloseSidebar}
    >
      <div
        className={`dialog ${isSidebarOpen ? "open" : ""} ${
          isSidebarReduced
            ? "lg:!max-w-[60px]"
            : "lg:overflow-hidden overflow-auto lg:hover:overflow-auto"
        }`}
      >
        <div className="py-2 mb-4 border-b border-slate-200 flex-center-between lg:hidden">
          <p className="uppercase">menu</p>
          <div
            className="icon-box lg:hidden"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </div>
        </div>
        {/* Logo */}
        <Link to="/" className="hidden lg:block !opacity-100 text-center p-3">
          <div className="flex-align-center gap-x-2">
            <img src="/Logo.png" alt="" className="w-10" />
            <h1
              className={`text-2xl font-semibold ${
                isSidebarReduced && "hidden"
              }`}
            >
              <span className="text-primary">Fin</span>Hub
            </h1>
          </div>
        </Link>
        <div className="mt-1">
          {navLinks?.map(({ label, links }) => (
            <div key={label}>
              <h5
                className={`text-xs text-slate-400 mb-2 ${
                  isSidebarReduced ? "lg:hidden" : ""
                }`}
              >
                {label}
              </h5>
              {links?.map(({ id, title, icon, url, subLinks }) => (
                <div key={id}>
                  {!subLinks ? (
                    <NavLink
                      to={url}
                      end
                      className={`px-2 py-2 my-3 flex-center-between gap-x-3 hover:bg-slate-200 ${
                        isSidebarReduced ? "lg:p-0" : ""
                      }`}
                      onClick={() => dispatch(closeSidebar())}
                      key={id}
                    >
                      {isSidebarReduced && (
                        <Tooltip text={title} position="right">
                          <div className="p-2 ml-1 hidden lg:block">{icon}</div>
                        </Tooltip>
                      )}
                      <div className="flex-align-center gap-x-3">
                        <div className={isSidebarReduced ? "lg:hidden" : ""}>
                          {icon}
                        </div>
                        <span
                          className={`${isSidebarReduced ? "lg:hidden" : ""}`}
                        >
                          {title}
                        </span>
                      </div>
                    </NavLink>
                  ) : (
                    <Submenu
                      isSidebarReduced={isSidebarReduced}
                      id={id}
                      title={title}
                      icon={icon}
                      subLinks={subLinks}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
