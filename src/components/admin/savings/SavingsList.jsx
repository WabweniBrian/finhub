import React, { useState } from "react";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { FiEye, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import { BiSolidFileExport } from "react-icons/bi";

const SavingsList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const savings = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      contact: "+2562637822",
      plan: "Plan 1",
      start_date: "03/03/2023",
      target_amount: "5,000,000",
      saved_amount: "3,00,000",
      total_savings: "3,500,000",
      duration_saved: "5 months",
      withdraw_date: "12/12/2023",
      status: "locked",
    },
    {
      id: 2,
      name: "John Doe",
      email: "johndoe@gmail.com",
      contact: "+2562637822",
      plan: "Plan 1",
      start_date: "03/03/2023",
      target_amount: "5,000,000",
      saved_amount: "3,00,000",
      total_savings: "3,500,000",
      duration_saved: "5 months",
      withdraw_date: "12/12/2023",
      status: "locked",
    },
    {
      id: 3,
      name: "John Doe",
      email: "johndoe@gmail.com",
      contact: "+2562637822",
      plan: "Plan 1",
      start_date: "03/03/2023",
      target_amount: "5,000,000",
      saved_amount: "3,00,000",
      total_savings: "3,500,000",
      duration_saved: "5 months",
      withdraw_date: "12/12/2023",
      status: "locked",
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
      const allIds = savings.map((saving) => saving.id);
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
      <div className="flex-align-center flex-wrap gap-2 pb-2 border-b">
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
              <th>Email</th>
              <th>Phone Number</th>
              <th>Plan</th>
              <th>Start Date</th>
              <th>Target Amount</th>
              <th>Amount Saved</th>
              <th>Total Savings (+ profits)</th>
              <th>Duration Saved</th>
              <th>Withdraw date</th>
              <th>Account Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savings.map((saving) => (
              <tr key={saving.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(saving.id)}
                    onChange={() => handleRowSelection(saving.id)}
                  />
                </td>
                <td>{saving.id}</td>
                <td>{saving.name}</td>
                <td>{saving.email}</td>
                <td>{saving.contact} </td>
                <td>{saving.plan} </td>
                <td>{saving.start_date}</td>
                <td>Ugx {saving.target_amount}</td>
                <td>Ugx {saving.saved_amount}</td>
                <td>Ugx {saving.total_savings}</td>
                <td>{saving.duration_saved}</td>
                <td>{saving.withdraw_date}</td>
                <td>{saving.status}</td>
                <td>
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

export default SavingsList;
