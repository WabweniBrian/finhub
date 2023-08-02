import React from "react";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      transaction_id: "f3Q6iBg24",
      transaction_type: "Loans",
      user: "John Smith",
      date: "12/08/2023",
      amount: "450,000",
      status: "completed",
    },
    {
      id: 2,
      transaction_id: "ffQ6iBg2n",
      transaction_type: "Savings",
      user: "Jane Doe",
      date: "12/08/2023",
      amount: "450,000",
      status: "pending",
    },
    {
      id: 3,
      transaction_id: "f3Q6iBg28",
      transaction_type: "Loans",
      user: "Clerk Kent",
      date: "12/08/2023",
      amount: "450,000",
      status: "failed",
    },
  ];

  return (
    <div className="card">
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Recent Transactions</h1>
        <Link to="transactions" className="text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Name of User</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.transaction_id}>
                <td>{transaction.transaction_id}</td>
                <td>{transaction.transaction_type}</td>
                <td>{transaction.user}</td>
                <td>{transaction.date}</td>
                <td>shs.{transaction.amount} </td>
                <td>
                  <span
                    className={`px-2 py-1 capitalize ${transaction.status}`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
