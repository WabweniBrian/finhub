import React, { useState } from "react";
import { seats } from "../../data/seats";

const Seats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (id) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((seatId) => seatId !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-2 mt-3 place-items-center">
      {seats.map(({ id, booked }, index) => (
        <button
          className={`w-12 h-12 flex-center-center bg-salte-100 border rounded-md ${
            booked &&
            "bg-primary text-white disabled: cursor-not-allowed !border-none"
          } ${
            selectedSeats.includes(id)
              ? "bg-secondary text-white !border-none"
              : ""
          }`}
          key={id}
          disabled={booked}
          onClick={() => handleSeatSelection(id)}
        >
          0{index + 1}
        </button>
      ))}
    </div>
  );
};

export default Seats;
