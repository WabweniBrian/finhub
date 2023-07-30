import React, { useState } from "react";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { FiCheck, FiEye, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import { BiSolidFileExport } from "react-icons/bi";

const LoanApplicantsList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const applicants = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      contact: "+2562637822",
      loan_package: "Student Max",
      date_applied: "12/08/2023",
      amount: "4,000,000",
      monthly_payments: "350,000",
      duration: "1.5 years",
      interest: "3%",
      total_payable: "4,350,000",
      status: "Not Approved",
    },
    {
      id: 2,
      name: "John Doe",
      email: "johndoe@gmail.com",
      contact: "+2562637822",
      loan_package: "Student Max",
      date_applied: "12/08/2023",
      amount: "4,000,000",
      monthly_payments: "350,000",
      duration: "1.5 years",
      interest: "3%",
      total_payable: "4,350,000",
      status: "Not Approved",
    },
    {
      id: 3,
      name: "John Doe",
      email: "johndoe@gmail.com",
      contact: "+2562637822",
      loan_package: "Student Max",
      date_applied: "12/08/2023",
      amount: "4,000,000",
      monthly_payments: "350,000",
      duration: "1.5 years",
      interest: "3%",
      total_payable: "4,350,000",
      status: "Not Approved",
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
      const allIds = applicants.map((applicant) => applicant.id);
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
              <th>Email</th>
              <th>Phone Number</th>
              <th>Package</th>
              <th>Date Applied</th>
              <th>Amount</th>
              <th>Monthly Payments</th>
              <th>Duration</th>
              <th>Interest (P.A)</th>
              <th>Total Payable</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(applicant.id)}
                    onChange={() => handleRowSelection(applicant.id)}
                  />
                </td>
                <td>{applicant.id}</td>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.contact} </td>
                <td>{applicant.loan_package}</td>
                <td>{applicant.date_applied}</td>
                <td>Ugx {applicant.amount}</td>
                <td>Ugx {applicant.monthly_payments}</td>
                <td>{applicant.duration}</td>
                <td>{applicant.interest}</td>
                <td>Ugx {applicant.total_payable}</td>
                <td>{applicant.status}</td>
                <td>
                  {/* Delete */}
                  <Tooltip text="Approve & Disburse">
                    <button className="icon-box text-white !bg-cyan-600 hover:!bg-cyan-600/80 ml-2">
                      <FiCheck />
                    </button>
                  </Tooltip>
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

export default LoanApplicantsList;
