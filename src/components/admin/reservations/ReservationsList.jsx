import React from "react";
import useDataTables from "../../common/useDataTables";

const ReservationsList = () => {
  useDataTables();
  return (
    <>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>Time</th>
              <th>Client</th>
              <th>Reservation ID</th>
              <th>Fare</th>
              <th>Bus Operator</th>
              <th>Bus Number</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Seat Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/12/2023</td>
              <td>08:00pm </td>
              <td>Jane Doe </td>
              <td>890olpy6</td>
              <td>shs.2000 </td>
              <td>Link</td>
              <td>UBA 568J </td>
              <td>Kampala</td>
              <td>Mbarara</td>
              <td>030</td>
            </tr>
            <tr>
              <td>08/12/2023</td>
              <td>08:00pm </td>
              <td>John Doe </td>
              <td>890olpy6</td>
              <td>shs.2000 </td>
              <td>Link</td>
              <td>UBA 568J </td>
              <td>Kampala</td>
              <td>Mbarara</td>
              <td>030</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReservationsList;
