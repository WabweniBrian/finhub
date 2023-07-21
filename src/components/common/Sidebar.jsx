/* eslint-disable react-hooks/exhaustive-deps */

import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/adminSidebarLinks";
import { closeSidebar, uiStore } from "../../features/uiSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("modal")) dispatch(closeSidebar());
  };

  return (
    <div
      className={`modal ${isSidebarOpen && "open"}`}
      onClick={handleCloseSidebar}
    >
      <div className={`dialog ${isSidebarOpen && "open"}`}>
        <div className="py-2 mb-4 border-b border-[#666868] flex-center-between lg:hidden">
          <p className="uppercase">menu</p>
          <div
            className="icon-box lg:hidden !bg-[#222d32] hover:!bg-[#39454b]"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </div>
        </div>
        {/* Logo */}
        <Link
          to="/admin"
          className="hidden lg:block !opacity-100 text-center p-3"
        >
          <h1 className="text-2xl font-bold text-primary">STL Admin</h1>
        </Link>
        <div className="mt-1">
          {navLinks.map(({ label, links }) => (
            <div key={label}>
              <h5 className="text-xs text-slate-400 mb-2">{label}</h5>
              {links.map(({ id, title, icon, url }) => (
                <NavLink
                  to={url}
                  key={id}
                  end
                  className="px-2 py-2 my-3 flex-align-center gap-x-3"
                  onClick={() => dispatch(closeSidebar())}
                >
                  {icon}
                  <span>{title}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
