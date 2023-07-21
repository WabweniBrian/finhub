import React from "react";
import useDataTables from "../../common/useDataTables";
import { FiEdit, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";

const BusSeatsList = ({ handleOpenModal }) => {
  useDataTables();
  return (
    <>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>ID</th>
              <th>Operator Name</th>
              <th>Bus Type</th>
              <th>Bus Number</th>
              <th>No. of Seats</th>

              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1000</td>
              <td>Jaguar Agencies Ltd </td>
              <td>Executive </td>
              <td>UBA 314F </td>
              <td>30 </td>
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
              <td>1000</td>
              <td>Jaguar Agencies Ltd </td>
              <td>Executive </td>
              <td>UBA 314F </td>
              <td>30 </td>
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

export default BusSeatsList;
