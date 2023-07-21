import React from "react";
import Breadcrumb from "../../components/common/BreadCrumb";

const ManageSeats = () => {
  const seatsData = [
    {
      bus_number: "UBG 0948",
      seats: [
        {
          id: 1,
          booked: false,
        },
        {
          id: 2,
          booked: false,
        },
        {
          id: 3,
          booked: false,
        },
        {
          id: 4,
          booked: false,
        },
        {
          id: 5,
          booked: true,
        },
        {
          id: 6,
          booked: false,
        },
        {
          id: 7,
          booked: false,
        },
        {
          id: 8,
          booked: false,
        },
        {
          id: 9,
          booked: false,
        },
        {
          id: 10,
          booked: true,
        },
      ],
    },
    {
      bus_number: "UAV 0948",
      seats: [
        {
          id: 1,
          booked: true,
        },
        {
          id: 2,
          booked: true,
        },
        {
          id: 3,
          booked: false,
        },
        {
          id: 4,
          booked: true,
        },
        {
          id: 5,
          booked: true,
        },
        {
          id: 6,
          booked: false,
        },
        {
          id: 7,
          booked: false,
        },
        {
          id: 8,
          booked: true,
        },
        {
          id: 9,
          booked: false,
        },
        {
          id: 10,
          booked: true,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Manage Seats</h1>
        <Breadcrumb />
      </div>
      <div className="card mt-5">
        <div className="flex-center-center my-3 gap-4">
          <div className="flex-align-center gap-2">
            <div className="w-5 h-5 flex-center-center  border rounded-md" />
            <h1>Vacant</h1>
          </div>
          <div className="flex-align-center gap-2">
            <div className="w-5 h-5 flex-center-center rounded-md bg-primary" />
            <h1>Booked</h1>
          </div>
        </div>
        {seatsData.length > 0 ? (
          <div>
            {seatsData.map((seat) => (
              <div key={seat.bus_number} className="border p-4 rounded-lg my-8">
                <h1 className="text-3xl uppercase font-bold">
                  {seat.bus_number}
                </h1>
                <div className="flex flex-wrap gap-3 mt-5">
                  {seat?.seats?.map(({ id, booked }, index) => (
                    <button
                      className={`w-12 h-12 flex-center-center bg-salte-100 border rounded-md ${
                        booked &&
                        "bg-primary text-white disabled: cursor-not-allowed !border-none"
                      }`}
                      key={id}
                      disabled={booked}
                    >
                      0{index + 1}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-center-center py-6 text-center">
            <h1 className="text-2xl font-semibold opacity-50">No Seats</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSeats;
