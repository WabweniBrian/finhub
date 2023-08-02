import React from "react";
import { Link } from "react-router-dom";

const PopularPackages = () => {
  const loans = [
    {
      id: 1,
      amount: "3,500,000",
      user: {
        name: "John Doe",
        contact: "+2568923892",
        photo: "/images/avatar.png",
      },
    },
    {
      id: 2,
      amount: "3,500,000",
      user: {
        name: "John Doe",
        contact: "+2568923892",
      },
    },
    {
      id: 3,
      amount: "3,500,000",
      user: {
        name: "John Doe",
        contact: "+2568923892",
        photo: "/images/avatar.png",
      },
    },
    {
      id: 4,
      amount: "3,500,000",
      user: {
        name: "John Doe",
        contact: "+2568923892",
      },
    },
  ];
  return (
    <div className="card mt-5">
      <div className="flex-center-between">
        <h1 className="text-xl font-semibold">Recent Loan Applicants</h1>
        <Link to="loans/applications" className="text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="mt-5">
        {loans.map((loan) => (
          <div
            className="border p-3 rounded-lg my-3 flex-center-between bg-main-bg"
            key={loan.id}
          >
            <div className="flex-align-center gap-x-2">
              <div>
                <img
                  src={loan.user?.photo || "/images/profile.png"}
                  alt={loan.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <h1 className="text-lg">{loan.user.name}</h1>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-primary">
                Ugx {loan.amount}
              </h1>
              <Link
                to={`loans/${loan.id}`}
                className="mt-2 text-sm hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPackages;
