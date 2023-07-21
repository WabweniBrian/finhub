import React, { useState, useEffect, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  BiCalendar,
  BiMessageRoundedDots,
  BiBusSchool,
  BiMoney,
  BiUserCircle,
} from "react-icons/bi";
import { FiGrid, FiBell, FiUsers, FiGlobe, FiPhone } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiRoad } from "react-icons/gi";
import { FaBusAlt } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { Link } from "react-router-dom";

const CommandBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const navLinks = [
    {
      label: "HOME",
      links: [
        {
          id: 1,
          title: "Dashboad",
          icon: <FiGrid />,
          url: "/admin",
        },
        {
          id: 2,
          title: "Reservations",
          icon: <BiMoney />,
          url: "/admin/reservations",
        },
      ],
    },
    {
      label: "MANAGE",
      links: [
        {
          id: 4,
          title: "Users",
          icon: <FiUsers />,
          url: "/admin/users",
        },
        {
          id: 5,
          title: "Bus Operators",
          icon: <BiBusSchool />,
          url: "/admin/bus-operators",
        },
        {
          id: 6,
          title: "Bus Routes",
          icon: <GiRoad />,
          url: "/admin/bus-routes",
        },
        {
          id: 7,
          title: "Bus Types",
          icon: <FaBusAlt />,
          url: "/admin/bus-types",
        },
        {
          id: 8,
          title: "Bus & Seats",
          icon: <MdAirlineSeatReclineExtra />,
          url: "/admin/seats",
        },
        {
          id: 9,
          title: "Reports & Analytics",
          icon: <AiOutlineFileDone />,
          url: "/admin/reports",
        },
        {
          id: 10,
          title: "Schedule",
          icon: <BiCalendar />,
          url: "/admin/schedule",
        },
      ],
    },
    {
      label: "MESSAGES & NOTIFICATIONS",
      links: [
        {
          id: 11,
          title: "Notifications",
          icon: <FiBell />,
          url: "/admin/notifications",
        },
        {
          id: 12,
          title: "Messages",
          icon: <BiMessageRoundedDots />,
          url: "/admin/messages",
        },
      ],
    },
    {
      label: "OTHERS",
      links: [
        {
          id: 13,
          title: "Manage Seats",
          icon: <MdAirlineSeatReclineExtra />,
          url: "/admin/seats/manage",
        },
        {
          id: 14,
          title: "Profile",
          icon: <BiUserCircle />,
          url: "/admin/profile",
        },
        {
          id: 15,
          title: "Website",
          icon: <FiGlobe />,
          url: "/",
        },
        {
          id: 16,
          title: "Contact STL",
          icon: <FiPhone />,
          url: "/admin/contact",
        },
      ],
    },
  ];

  const filteredLinks = navLinks
    .map((linkGroup) => ({
      ...linkGroup,
      links: linkGroup.links.filter((link) =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((linkGroup) => linkGroup.links.length > 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey && e.key === "k") || e.key === "K") {
      e.preventDefault();
      setIsSearchVisible(true);
      setSearchQuery("");
    } else if (e.key === "Escape") {
      setIsSearchVisible(false);
    }
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("popup")) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {isSearchVisible && (
        <div
          className="popup fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-[999]"
          onClick={closePopup}
        >
          <div className="max-w-2xl card w-full mx-3">
            <div className="relative">
              <BiSearchAlt className="absolute top-1/2 -translate-y-1/2 left-2" />
              <input
                autoFocus
                type="text"
                placeholder="Search for links..."
                value={searchQuery}
                onChange={handleSearchChange}
                ref={searchInputRef}
                className="pl-8"
              />
            </div>

            {filteredLinks.length > 0 ? (
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredLinks.map((linkGroup) => (
                  <div key={linkGroup.label}>
                    <h5 className="text-[14px] font-semibold mb-2">
                      {linkGroup.label}
                    </h5>
                    {linkGroup.links.map((link) => (
                      <Link
                        key={link.id}
                        to={link.url}
                        className="py-1 flex items-center mb-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsSearchVisible(false)}
                      >
                        <span className="mr-2">{link.icon}</span>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-center-center py-6">
                <h1 className="text-2xl opacity-50">No results found</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommandBox;
