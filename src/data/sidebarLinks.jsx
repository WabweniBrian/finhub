import {
  BiMessageRoundedDots,
  BiWalletAlt,
  BiInfoCircle,
  BiCoinStack,
} from "react-icons/bi";
import { FiGrid, FiBell, FiUsers, FiSettings, FiLayers } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiBank, GiGraduateCap } from "react-icons/gi";

export const navLinks = [
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
            title: "Packages",
            url: "loans/packages",
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
            title: "Logs",
            url: "/reports/logs",
          },
        ],
      },
      {
        id: 9,
        title: "FAQs & Inquiries",
        icon: <BiInfoCircle />,
        url: "/faq-inquiries",
      },
    ],
  },
  {
    label: "MESSAGES & NOTIFICATIONS",
    links: [
      {
        id: 10,
        title: "Notifications",
        icon: <FiBell />,
        url: "/notifications",
      },
      {
        id: 11,
        title: "Messages",
        icon: <BiMessageRoundedDots />,
        url: "/messages",
      },
    ],
  },
];
