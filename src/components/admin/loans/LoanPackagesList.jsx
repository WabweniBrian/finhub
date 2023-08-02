import React, { useState } from "react";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { FiEdit, FiPlusCircle, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import { BiSolidFileExport } from "react-icons/bi";
import EditLoanPackageFormModal from "./EditLoanPackageFormModal";

const LoanPackagesList = ({ handleOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const packages = [
    {
      id: 1,
      name: "Students Super",
      maximum_amount: "1,000,000",
      interest: "3%",
    },
    {
      id: 2,
      name: "Students Max",
      maximum_amount: "5,000,000",
      interest: "3%",
    },
    {
      id: 3,
      name: "Students Max Pro",
      maximum_amount: "10,000,000",
      interest: "3%",
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
      const allIds = packages.map((loan_package) => loan_package.id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = async () => {
    if (!confirm("Are you sure you want to delete selected rows?")) return;
    toast.success("Selected rows deleted");
  };

  const handleOpenEditModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex-align-center flex-wrap gap-2 pb-2 border-b">
        <button
          className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2"
          onClick={handleOpenModal}
        >
          <FiPlusCircle />
          <span>New</span>
        </button>
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
              <th>Package Name</th>
              <th>Maximum Amount</th>
              <th>Interest (P.A)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((loan_package) => (
              <tr key={loan_package.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(loan_package.id)}
                    onChange={() => handleRowSelection(loan_package.id)}
                  />
                </td>
                <td>{loan_package.id}</td>
                <td>{loan_package.name}</td>
                <td>Ugx {loan_package.maximum_amount}</td>
                <td>{loan_package.interest}</td>
                <td>
                  {/* Edit */}
                  <Tooltip text="Edit">
                    <button
                      className="icon-box text-white !bg-green-600 hover:!bg-green-600/80 ml-2"
                      onClick={handleOpenEditModal}
                    >
                      <FiEdit />
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
      {/* EditLoanPackageForm Modal */}
      <EditLoanPackageFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default LoanPackagesList;
