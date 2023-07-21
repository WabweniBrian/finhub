import React from "react";
import useDataTables from "../../common/useDataTables";
import { FiEdit, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";

const ScheduleList = ({ handleOpenModal }) => {
  useDataTables();
  return (
    <>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure</th>
              <th>Bus Operator</th>
              <th>Bus Type</th>
              <th>Bus Number</th>
              <th>Fare</th>
              <th>Date</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mbarara</td>
              <td>Kampala </td>
              <td>08:00pm </td>
              <td>Jaguar </td>
              <td>Executive </td>
              <td>UBG 789I </td>
              <td>shs. 30000 </td>
              <td>12/05/2023 </td>
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
              <td>Mbarara</td>
              <td>Kampala </td>
              <td>08:00pm </td>
              <td>Jaguar </td>
              <td>Executive </td>
              <td>UBG 789I </td>
              <td>shs. 30000 </td>
              <td>12/05/2023 </td>
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

export default ScheduleList;
