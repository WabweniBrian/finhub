import { useState } from "react";
import { FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { BiSolidFileExport } from "react-icons/bi";

const TransactionsList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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
      const allIds = transactions.map(
        (transaction) => transaction.transaction_id
      );
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
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Name of User</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.transaction_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(transaction.transaction_id)}
                    onChange={() =>
                      handleRowSelection(transaction.transaction_id)
                    }
                  />
                </td>
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
                <td>
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

export default TransactionsList;
