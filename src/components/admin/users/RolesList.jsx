import { useState } from "react";
import { FiEdit, FiPlusCircle, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { BiSolidFileExport } from "react-icons/bi";
import { Link } from "react-router-dom";

const RolesList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const roles = [
    {
      id: 1,
      name: "Super Admin",
      permissions: [
        "Add Users",
        "Delete Users",
        "Edit Users",
        "Assign Roles",
        "Create Roles",
      ],
    },
    {
      id: 2,
      name: "CEO",
      permissions: [
        "Add Users",
        "Delete Users",
        "Edit Users",
        "Assign Roles",
        "Create Roles",
      ],
    },
    {
      id: 3,
      name: "CTO",
      permissions: [
        "Add Users",
        "Delete Users",
        "Edit Users",
        "Assign Roles",
        "Create Roles",
      ],
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
      const allIds = roles.map((role) => role.id);
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
              <th>Name of Role</th>
              <th className="!whitespace-pre-wrap">Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(role.id)}
                    onChange={() => handleRowSelection(role.id)}
                  />
                </td>
                <td>{role.id}</td>
                <td>{role.name}</td>
                <td className="!whitespace-pre-wrap">
                  {role.permissions.join(", ")}
                </td>
                <td>
                  {/* Edit */}
                  <Tooltip text="Edit">
                    <button className="icon-box text-white !bg-green-600 hover:!bg-green-600/80 ml-2">
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
    </>
  );
};

export default RolesList;
