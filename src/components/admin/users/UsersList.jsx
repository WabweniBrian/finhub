import React from "react";
import { FiEdit, FiTrash, FiBriefcase } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";

const UsersList = ({ handleOpenModal }) => {
  return (
    <>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
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
            <tr>
              <td>609</td>
              <td className="flex-align-center gap-x-2">
                <img src="/images/avatar.png" alt="" className="avatar" />
                <div className="flex-shrink-0 cursor-pointer">
                  <FiEdit />
                </div>
              </td>
              <td>ugaka1204@gmail.com </td>
              <td>+256708210793 </td>
              <td>John Doe </td>
              <td>Super Admin </td>
              <td>08/12/2023 </td>
              <td>
                {/* Permissions */}
                <Tooltip text="Permissions">
                  <button className="icon-box text-white !bg-cyan-600 hover:!bg-cyan-600/80 mr-2">
                    <FiBriefcase />
                  </button>
                </Tooltip>

                {/* Edit */}
                <Tooltip text="Edit">
                  <button
                    className="icon-box text-white !bg-secondary hover:!bg-secondary/80"
                    onClick={handleOpenModal}
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
            <tr>
              <td>609</td>
              <td className="flex-align-center gap-x-2">
                <img src="/images/avatar.png" alt="" className="avatar" />
                <div className="flex-shrink-0 cursor-pointer">
                  <FiEdit />
                </div>
              </td>
              <td>ugaka1204@gmail.com </td>
              <td>+256708210793 </td>
              <td>John Doe </td>
              <td>Super Admin </td>
              <td>08/12/2023 </td>
              <td>
                {/* Permissions */}
                <Tooltip text="Permissions">
                  <button className="icon-box text-white !bg-cyan-600 hover:!bg-cyan-600/80 mr-2">
                    <FiBriefcase />
                  </button>
                </Tooltip>

                {/* Edit */}
                <Tooltip text="Edit">
                  <button
                    className="icon-box text-white !bg-secondary hover:!bg-secondary/80"
                    onClick={handleOpenModal}
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersList;
