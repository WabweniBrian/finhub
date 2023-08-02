import React, { useState } from "react";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { FiCheck, FiEye, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import { BiSolidFileExport } from "react-icons/bi";

const LoanRepayersList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const repayers = [
    {
      id: 1,
      name: "John Doe",
      loan_package: "Student Max",
      amount_taken: "4,000,000",
      amount_payable: "4,350,000",
      monthly_payments: "350,000",
      amount_payed: "3,500,000",
      balance: "1,500,000",
      duration: "2 years",
      duration_covered: "18 Months",
      duration_pending: "6 Months",
    },
    {
      id: 2,
      name: "John Doe",
      loan_package: "Student Max",
      amount_taken: "4,000,000",
      amount_payable: "4,350,000",
      monthly_payments: "350,000",
      amount_payed: "3,500,000",
      balance: "1,500,000",
      duration: "2 years",
      duration_covered: "18 Months",
      duration_pending: "6 Months",
    },
    {
      id: 3,
      name: "John Doe",
      loan_package: "Student Max",
      amount_taken: "4,000,000",
      amount_payable: "4,350,000",
      monthly_payments: "350,000",
      amount_payed: "3,500,000",
      balance: "1,500,000",
      duration: "2 years",
      duration_covered: "18 Months",
      duration_pending: "6 Months",
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
      const allIds = repayers.map((repayer) => repayer.id);
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
              <th>Name</th>
              <th>Package</th>
              <th>Amount Taken</th>
              <th>Amount Payable</th>
              <th>Monthly Payments</th>
              <th>Amount Payed</th>
              <th>Balance</th>
              <th>Duration</th>
              <th>Duration Covered</th>
              <th>Duration Pending</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {repayers.map((repayer) => (
              <tr key={repayer.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(repayer.id)}
                    onChange={() => handleRowSelection(repayer.id)}
                  />
                </td>
                <td>{repayer.id}</td>
                <td>{repayer.name}</td>
                <td>{repayer.loan_package}</td>
                <td>Ugx {repayer.amount_taken} </td>
                <td>Ugx {repayer.amount_payable}</td>
                <td>{repayer.monthly_payments}</td>
                <td>Ugx {repayer.amount_payed}</td>
                <td>Ugx {repayer.balance}</td>
                <td>{repayer.duration}</td>
                <td>{repayer.duration_covered}</td>
                <td>{repayer.duration_pending}</td>
                <td>
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

export default LoanRepayersList;
