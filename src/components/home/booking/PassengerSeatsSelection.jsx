import React from "react";
import Seats from "../../common/Seats";
import { GiSteeringWheel } from "react-icons/gi";

const PassengerSeatsSelection = () => {
  return (
    <div className="rounded-lg border p-6">
      <div className="flex-center-center my-3 gap-4">
        <div className="flex-align-center gap-2">
          <div className="w-5 h-5 flex-center-center  border rounded-md" />
          <h1>Available</h1>
        </div>
        <div className="flex-align-center gap-2">
          <div className="w-5 h-5 flex-center-center rounded-md bg-primary" />
          <h1>Booked</h1>
        </div>
      </div>
      <div className=" mt-4 max-w-sm mx-auto w-full px-3 border rounded-lg p-3">
        <div className="flex justify-end mr-2">
          <GiSteeringWheel className="text-3xl" />
        </div>
        <div className="py-2 flex-center-center bg-slate-800 text-white text-xl text-center mt-3">
          FRONT
        </div>
        <Seats />
        <div className="py-2 flex-center-center bg-slate-800 text-white text-xl text-center mt-3">
          BACK
        </div>
      </div>
    </div>
  );
};

export default PassengerSeatsSelection;
