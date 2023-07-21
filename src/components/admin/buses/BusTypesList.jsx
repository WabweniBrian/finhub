import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";

const BusTypesList = ({ handleOpenModal }) => {
  return (
    <>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Bus Type</th>
              <th>Total Seats</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UBF 567H </td>
              <td>Large</td>
              <td>67</td>
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
              <td>UBF 567H </td>
              <td>Large</td>
              <td>67</td>
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

export default BusTypesList;
