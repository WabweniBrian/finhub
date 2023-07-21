import {
  BiCalendar,
  BiMessageRoundedDots,
  BiBusSchool,
  BiMoney,
} from "react-icons/bi";
import { FiGrid, FiBell, FiUsers } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiRoad } from "react-icons/gi";
import { FaBusAlt } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

export const navLinks = [
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
        url: "/admin/buses",
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
];
