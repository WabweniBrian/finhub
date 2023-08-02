import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";

const Logs = () => {
  const logs = [
    {
      id: 1,
      logTitle: "Loan transaction",
      logText: "Loan of Ugx 2,000,000 has been transferred to John Doe",
      date: "2023-08-12 00:00:00",
    },
    {
      id: 2,
      logTitle: "Loan transaction",
      logText: "Loan of Ugx 2,000,000 has been transferred to John Doe",
      date: "2023-08-12 00:00:00",
    },
    {
      id: 3,
      logTitle: "Loan transaction",
      logText: "Loan of Ugx 2,000,000 has been transferred to John Doe",
      date: "2023-08-12 00:00:00",
    },
    {
      id: 4,
      logTitle: "Loan transaction",
      logText: "Loan of Ugx 2,000,000 has been transferred to John Doe",
      date: "2023-08-12 00:00:00",
    },
  ];

  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Logs</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        {logs.map((log) => (
          <div className="border p-4 my-3 rounded-lg">
            <h1 className="text-xl font-semibold">{log.logTitle}</h1>
            <p className="text-muted">{log.logText}</p>
            <div className="flex justify-end">
              <pp className="text-sm text-primary">{log.date}</pp>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logs;
