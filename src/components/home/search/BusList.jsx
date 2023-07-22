import React from "react";
import BookingTypeModal from "../BookingTypeModal";
import { useState } from "react";

const buses = [
  {
    id: 1,
    name: "Link",
    origin: "Kampala",
    destination: "Mbarara",
    fare: "30,000",
    startTime: "8:00 AM",
    endTime: "1:00 PM",
    estimatedDuration: "4 hrs",
  },
  {
    id: 2,
    name: "Global",
    origin: "Kampala",
    destination: "Mbarara",
    fare: "30,000",
    startTime: "8:00 AM",
    endTime: "1:00 PM",
    estimatedDuration: "4 hrs",
  },
  {
    id: 3,
    name: "Jaguar",
    origin: "Kampala",
    destination: "Mbarara",
    fare: "30,000",
    startTime: "8:00 AM",
    endTime: "1:00 PM",
    estimatedDuration: "4 hrs",
  },
  {
    id: 4,
    name: "Kampala Express",
    origin: "Kampala",
    destination: "Mbarara",
    fare: "30,000",
    startTime: "8:00 AM",
    endTime: "1:00 PM",
    estimatedDuration: "4 hrs",
  },
];

const BusList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const randomColor = [
    "#A061F6",
    "#4EC579",
    "#FF6370",
    "#2984FF",
    "#222d32",
    "#591e94",
    "#c8992a",
  ];

  const randomBg = () => {
    return randomColor[Math.floor(Math.random() * randomColor.length)];
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-6">
      {buses.length > 0 ? (
        <>
          <h1 className="text-2xl font-medium text-center">
            These are the available buses
          </h1>
          {buses.map((bus) => (
            <div className="card my-4 relative overflow-hidden" key={bus.id}>
              <div
                className="absolute top-0 left-0 rounded-br-lg text-white px-5 py-2"
                style={{ background: randomBg() }}
              >
                {bus.name}
              </div>
              <div className="p-4 flex-center-between gap-4 flex-col md:flex-row">
                <div className="mt-6 sm:m-0">
                  <div className="flex-align-center gap-2">
                    <h1>{bus.startTime}</h1>
                    <h1>--------{bus.estimatedDuration}---------</h1>
                    <h1>{bus.endTime}</h1>
                  </div>
                  <div className="flex-center-between gap-2">
                    <h1>{bus.origin}</h1>
                    <h1>{bus.destination}</h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Shs. {bus.fare}</h1>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={handleOpenModal}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex-center-center py-4">
          <h1 className="text-3xl font-bold opacity-60">No Buses Found!</h1>
        </div>
      )}
      <BookingTypeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default BusList;
