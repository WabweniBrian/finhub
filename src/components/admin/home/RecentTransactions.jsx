import React from "react";

const RecentCustomers = () => {
  return (
    <div className="card">
      <h1 className="text-2xl font-semibold pb-3 border-b">Recent Orders</h1>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Origin</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Kampala</td>
              <td>Mbarara</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>Kampala</td>
              <td>Mbarara</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCustomers;
