import React, { useState } from "react";
import { BsCardChecklist } from "react-icons/bs";

const Track = () => {
  const [bookingId, setBookingId] = useState("");
  return (
    <div className="px-4 max-w-sm mx-auto pt-28">
      <h1 className="text-center text-2xl font-semibold">
        Track your Bus in Real Time
      </h1>
      <div className="mt-4 card">
        <div className="relative mt-2">
          <BsCardChecklist className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            value={bookingId}
            name="bookingId"
            onChange={(e) => setBookingId(e.target.value)}
            className="pl-8"
            placeholder="Enter your Booking ID"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted italic">
            NB: Booking ID can be found on your ticket or email we sent you
          </p>
        </div>
        <button className="mt-4 w-full btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default Track;
