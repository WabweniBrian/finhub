import React, { useState } from "react";
import {
  FiEdit,
  FiTrash,
  FiBriefcase,
  FiPrinter,
  FiPlusCircle,
} from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import useDataTables from "../../common/useDataTables";
import { BiSolidFileExport } from "react-icons/bi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const users = [
    {
      id: 1,
      photo: "/images/avatar.png",
      email: "test@example.com",
      phone: "+256708210793",
      full_name: "John Doe",
      role: "Super Admin",
      date_added: "08/12/2023",
    },
    {
      id: 2,
      photo: "/images/avatar.png",
      email: "test@example.com",
      phone: "+256708210793",
      full_name: "Jane Doe",
      role: "CEO",
      date_added: "08/12/2023",
    },
    {
      id: 3,
      photo: "/images/avatar.png",
      email: "test@example.com",
      phone: "+256708210793",
      full_name: "Raven Kent",
      role: "CTO",
      date_added: "08/12/2023",
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
      const allIds = users.map((user) => user.id);
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
        <Link
          to="new"
          className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2"
        >
          <FiPlusCircle />
          <span>New</span>
        </Link>
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
              <th>Photo</th>
              <th>Email</th>
              <th>Contact Info</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>Date Added</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(user.id)}
                    onChange={() => handleRowSelection(user.id)}
                  />
                </td>
                <td>{user.id}</td>
                <td>
                  <img src={user.photo} alt="" className="avatar" />
                </td>
                <td>{user.email}</td>
                <td>{user.phone} </td>
                <td>{user.full_name}</td>
                <td>{user.role}</td>
                <td>{user.date_added}</td>
                <td>
                  {/* Edit */}
                  <Tooltip text="Edit">
                    <Link
                      to={`${user.id}`}
                      className="icon-box text-white !bg-secondary hover:!bg-secondary/80"
                    >
                      <FiEdit />
                    </Link>
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

export default UsersList;
