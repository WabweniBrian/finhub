import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Tooltip from "./Tooltip";
import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";
import { useEffect, useRef, useState } from "react";

const Submenu = ({ title, icon, subLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSidebarReduced } = useSelector(uiStore);
  const submenuRef = useRef(null);
  const submenuWrapperRef = useRef(null);

  useEffect(() => {
    const linksHeight = submenuRef?.current?.getBoundingClientRect().height;
    submenuWrapperRef.current.style.height = isOpen
      ? linksHeight + "px"
      : "0px";
  }, [isOpen]);

  return (
    <>
      <div
        className={`p-2 flex-center-between gap-x-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-dark-light  rounded-md ${
          isSidebarReduced ? "lg:p-0" : ""
        } ${title === "Settings" ? "!mb-3" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isSidebarReduced && (
          <Tooltip text={title} position="right">
            <div className="px-2 py-2 ml-1 hidden lg:block">{icon}</div>
          </Tooltip>
        )}
        <div className="flex-align-center gap-x-3">
          <div className={isSidebarReduced ? "lg:hidden" : ""}>{icon}</div>
          <span
            className={`text-muted ${isSidebarReduced ? "lg:hidden" : ""} `}
          >
            {title}
          </span>
        </div>
        <div className={isSidebarReduced ? "hidden" : ""}>
          <FiChevronDown
            className={`transition-a ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div ref={submenuWrapperRef} className="transition-a overflow-hidden">
        <ul
          className={`pl-10 sub-menu relative before:absolute before:bg-slate-300 before:h-full before:w-[2px] before:left-2`}
          ref={submenuRef}
        >
          {subLinks?.map(({ title, url }) => (
            <li
              className={`list-none ${isSidebarReduced ? "ml-1" : ""}`}
              key={title}
            >
              <NavLink to={url} end>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Submenu;
