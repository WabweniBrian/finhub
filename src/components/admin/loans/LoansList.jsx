import React, { useState } from "react";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { FiEye, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import { BiSolidFileExport } from "react-icons/bi";

const LoansList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const loans = [
    {
      id: 1,
      user: "John Doe",
      date_taken: "12/08/2023",
      approval_date: "11/08/2023",
      amount_taken: "4,000,000",
      monthly_payments: "350,000",
      loan_package: "Student Max",
      duration: "1.5 years",
      interest: "3%",
      total_payable: "4,350,000",
    },
    {
      id: 2,
      user: "Ethan Hunt",
      date_taken: "12/08/2023",
      approval_date: "11/08/2023",
      amount_taken: "4,000,000",
      monthly_payments: "350,000",
      loan_package: "Student Max",
      duration: "1.5 years",
      interest: "3%",
      total_payable: "4,350,000",
    },
    {
      id: 3,
      user: "Jane Doe",
      date_taken: "12/08/2023",
      approval_date: "11/08/2023",
      amount_taken: "6,000,000",
      monthly_payments: "550,000",
      loan_package: "Student Pro Max",
      duration: "3 years",
      interest: "3%",
      total_payable: "6,450,000",
    },
  ];
  useDataTables();

  const handleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIds = loans.map((loan) => loan.id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = async () => {
    if (!confirm("Are you sure you want to delete selected rows?")) return;
    toast.success("Selected rows deleted");
  };
  return (
    <>
      <div className="flex-align-center gap-2 pb-2 border-b">
        <button className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2">
          <FiPrinter />
          <span>Print</span>
        </button>
        <button className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2">
          <BiSolidFileExport />
          <span>Excel</span>
        </button>
        {selectedRows.length > 0 && (
          <button
            className="btn !bg-red-600 hover:!bg-red-600/80 text-white"
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </button>
        )}
      </div>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th>ID</th>
              <th>User</th>
              <th>Amount Taken</th>
              <th>Date Taken</th>
              <th>Approval Date</th>
              <th>Monthly Payments</th>
              <th>Package</th>
              <th>Duration</th>
              <th>Interest (P.A)</th>
              <th>Total Payable</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(loan.id)}
                    onChange={() => handleRowSelection(loan.id)}
                  />
                </td>
                <td>{loan.id}</td>
                <td>{loan.user}</td>
                <td>{loan.amount_taken}</td>
                <td>{loan.date_taken} </td>
                <td>{loan.approval_date}</td>
                <td>{loan.monthly_payments}</td>
                <td>{loan.loan_package}</td>
                <td>{loan.duration}</td>
                <td>{loan.interest}</td>
                <td>{loan.total_payable}</td>
                <td>
                  {/* Delete */}
                  <Tooltip text="Details">
                    <button className="icon-box text-white !bg-green-600 hover:!bg-green-600/80 ml-2">
                      <FiEye />
                    </button>
                  </Tooltip>
                  {/* Delete */}
                  <Tooltip text="Delete">
                    <button className="icon-box text-white !bg-red-600 hover:!bg-red-600/80 ml-2">
                      <FiTrash />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LoansList;
