import React, { useState, useEffect, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  BiMessageRoundedDots,
  BiWalletAlt,
  BiInfoCircle,
  BiCoinStack,
} from "react-icons/bi";
import { FiGrid, FiBell, FiUsers, FiSettings, FiLayers } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiBank, GiGraduateCap } from "react-icons/gi";
import { Link } from "react-router-dom";

const CommandBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const navLinks = [
    {
      label: "DASHBOARD",
      links: [
        {
          id: 1,
          title: "Overview",
          icon: <FiGrid />,
          url: "/",
        },
        {
          id: 2,
          title: "Transactions",
          icon: <BiWalletAlt />,
          url: "/transactions",
        },
        {
          id: 3,
          title: "Settings",
          icon: <FiSettings />,
          subLinks: [
            {
              title: "Profile",
              url: "/profile",
            },
            {
              title: "Social links",
              url: "/social-links",
            },
            {
              title: "About",
              url: "/about",
            },
            {
              title: "Contact Info",
              url: "/contact",
            },
          ],
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
          subLinks: [
            {
              title: "All users",
              url: "/users",
            },
            {
              title: "New User",
              url: "/users/new",
            },
            {
              title: "Roles & Permissions",
              url: "/roles-permissions",
            },
          ],
        },
        {
          id: 5,
          title: "Loans",
          icon: <BiCoinStack />,
          subLinks: [
            {
              title: "Loans",
              url: "/loans",
            },
            {
              title: "Plans",
              url: "loans/plans",
            },
            {
              title: "Applications",
              url: "loans/applications",
            },
            {
              title: "Repayments",
              url: "loans/repayments",
            },
          ],
        },
        {
          id: 6,
          title: "Savings",
          icon: <GiBank />,
          url: "/savings",
        },
        {
          id: 7,
          title: "Study Materials",
          icon: <GiGraduateCap />,
          url: "/study-materials",
        },
        {
          id: 8,
          title: "FAQs & Inquiries",
          icon: <BiInfoCircle />,
          url: "/faq-inquiries",
        },
        {
          id: 9,
          title: "Reports & Analytics",
          icon: <AiOutlineFileDone />,
          subLinks: [
            {
              title: "Loans",
              url: "/reports/loan",
            },
            {
              title: "Savings",
              url: "/reports/savings",
            },
            {
              title: "Study Materials",
              url: "/reports/study-materials",
            },
            {
              title: "Logs",
              url: "/reports/logs",
            },
          ],
        },
        {
          id: 10,
          title: "Plans",
          icon: <FiLayers />,
          url: "/plans",
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
          url: "/notifications",
        },
        {
          id: 12,
          title: "Messages",
          icon: <BiMessageRoundedDots />,
          url: "/messages",
        },
      ],
    },
  ];

  const filteredLinks = navLinks
    .map((linkGroup) => ({
      ...linkGroup,
      links: linkGroup.links.map((link) => {
        if (link.subLinks) {
          const filteredSubLinks = link.subLinks.filter((subLink) =>
            subLink.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          return {
            ...link,
            subLinks: filteredSubLinks,
          };
        } else {
          return link;
        }
      }),
    }))
    .map((linkGroup) => ({
      ...linkGroup,
      links: linkGroup.links.filter(
        (link) =>
          link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (link.subLinks && link.subLinks.length > 0)
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
          className="popup fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[999]"
          onClick={closePopup}
        >
          <div className="max-w-2xl card w-full mx-3 h-[80vh] overflow-y-auto">
            <div className="relative">
              <BiSearchAlt className="absolute top-1/2 -translate-y-1/2 left-2" />
              <input
                autoFocus
                type="text"
                placeholder="Search for links..."
                value={searchQuery}
                onChange={handleSearchChange}
                ref={searchInputRef}
                className="pl-8 border-gray-300"
              />
            </div>

            {filteredLinks.length > 0 ? (
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3">
                {filteredLinks.map((linkGroup) => (
                  <div key={linkGroup.label}>
                    <h5 className="text-[14px] font-semibold mb-2">
                      {linkGroup.label}
                    </h5>
                    {linkGroup?.links?.map((link) => (
                      <div key={link.id}>
                        <Link
                          to={link.url}
                          className="py-1 flex items-center mb-2 text-gray-600 hover:text-gray-900"
                          onClick={() => setIsSearchVisible(false)}
                        >
                          <span className="mr-2">{link.icon}</span>
                          {link.title}
                        </Link>
                        <ul className="ml-14">
                          {link?.subLinks?.map((link) => (
                            <li key={link?.title}>
                              <Link
                                to={link.url}
                                className="text-sm my-2 relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2"
                                onClick={() => setIsSearchVisible(false)}
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
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
