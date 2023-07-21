import React from "react";
import { FaShoppingCart, FaMoneyBill } from "react-icons/fa";
import { BsFillCarFrontFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    {
      title: "Total Reservations",
      value: "1000",
      icon: <FaShoppingCart />,
      bg: "bg-primary",
      link: "/admin/reservations",
    },
    {
      title: "Number of Bus Operators",
      value: "10",
      icon: <BsFillCarFrontFill />,
      bg: "bg-secondary",
      link: "/admin/bus-operators",
    },
    {
      title: "Total Income",
      value: "UGX 50,000,000",
      icon: <FaMoneyBill />,
      bg: "bg-tertiary",
      link: "/admin/reports",
    },
    {
      title: "Reservations Today",
      value: "450",
      icon: <FaShoppingCart />,
      bg: "bg-secondaryYellow",
      link: "/admin/reservations",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div
          className={`${card.bg} relative group overflow-hidden pb-8`}
          key={index}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white">{card.value}</h1>
            <h1 className="font-bold text-white">{card.title}</h1>
            <div className="absolute right-0 top-0 text-9xl opacity-10 group-hover:scale-110 transition-a">
              {card.icon}
            </div>
          </div>
          <Link
            to={card.link}
            className="bg-black/60 flex-center-center gap-x-2 py-1 text-sm text-slate-100 hover:text-white hover:!opacity-100 transition-a absolute bottom-0 left-0 w-full"
          >
            <span>More Info</span>
            <BsFillArrowRightCircleFill className="text-sm" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
