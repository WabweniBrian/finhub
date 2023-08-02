import React from "react";
import { FaCoins } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";
import { BiDollar, BiWallet } from "react-icons/bi";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Cards = () => {
  const cardData = [
    {
      title: "Total Income",
      value: "32,450,000",
      icon: <FaCoins />,
      percentage: "2.3",
      increase: true,
    },
    {
      title: "Total Savings",
      value: "18,349,000",
      icon: <BsWallet2 />,
      percentage: "4.03",
      increase: false,
    },
    {
      title: "Total Loans",
      value: "UGX 50,000,000",
      icon: <BiDollar />,
      percentage: "2.3",
      increase: false,
    },
    {
      title: "Net Profit",
      value: "7,740,000",
      icon: <BiWallet />,
      percentage: "2.3",
      increase: true,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {cardData.map((card, index) => (
        <div className="border rounded-lg bg-white" key={index}>
          <div className="px-4 py-2 flex-center-between border-b">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !rounded-lg !bg-slate-100 border">
                {card.icon}
              </div>
              <h1>{card.title}</h1>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Ugx {card.value}</h1>
            <div className="mt-2 flex-align-center gap-x-3">
              <div
                className={`flex-align-center gap-x-2 px-2 py-1 rounded-md ${
                  card.increase
                    ? "bg-secondary/20 text-secondary"
                    : "bg-tertiary/20 text-tertiary"
                }`}
              >
                {card.increase ? <FiArrowUp /> : <FiArrowDown />}
                <span className="flex-shrink-0">{card.percentage}%</span>
              </div>
              <p>From last month</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
