import React from "react";
import useDataTables from "../../common/useDataTables";
import { FiEdit, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";

const BusOperatorsList = ({ handleOpenModal }) => {
  useDataTables();
  return (
    <>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Date Joined</th>
              <th>Address</th>
              <th>Contact Info</th>
              <th>Email</th>
              <th>No. of Buses</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100</td>
              <td>Jaguar Agencies Ltd </td>
              <td>08/12/2023 </td>
              <td>William Street </td>
              <td>+256762582141 </td>
              <td>ugaka1204@gmail.com </td>
              <td>100 </td>
              <td>
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
              <td>100</td>
              <td>Jaguar Agencies Ltd </td>
              <td>08/12/2023 </td>
              <td>William Street </td>
              <td>+256762582141 </td>
              <td>ugaka1204@gmail.com </td>
              <td>100 </td>
              <td>
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

export default BusOperatorsList;
