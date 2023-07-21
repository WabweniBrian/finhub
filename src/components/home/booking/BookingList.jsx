import React from "react";
import { Link } from "react-router-dom";

const BookingList = () => {
  const bookings = [
    {
      id: 1,
      bookingId: "19e23H5Qod",
      type: "Passenger",
      dateBooked: "12/08/2023",
      fare: "Ugx 47, 000",
      from: "Kampala",
      to: "Mbarara",
      operator: "Jaguar",
      journey_date: "12/08/2023",
      journey_time: "01:00pm - 5:00px",
      status: "Paid",
      serial_number: "030",
    },
    {
      id: 2,
      bookingId: "19e23H5Qod",
      type: "Luggage",
      dateBooked: "12/08/2023",
      fare: "5,5000",
      from: "Kampala",
      to: "Mbarara",
      operator: "Jaguar",
      journey_date: "12/08/2023",
      journey_time: "01:00pm - 5:00px",
      serial_number: "030",
    },
  ];
  return (
    <>
      {bookings.length > 0 ? (
        <div>
          {bookings.map((booking) => (
            <div
              className="md:flex justify-between mt-4 flex-col md:flex-row gap-4 bg-white p-3 rounded-lg border relative"
              key={booking.id}
            >
              <div className="absolute top-0 left-0 rounded-br-lg text-white px-5 py-1 text-sm bg-secondary">
                {booking.type}
              </div>
              <div className="mt-8">
                <div className="flex-center-between">
                  <h1>Booking ID:</h1>
                  <h1 className="text-blue-600 font-medium">
                    {booking.bookingId}
                  </h1>
                </div>
                <div className="mt-3 flex-center-between">
                  <h1>From:</h1>
                  <h1 className="text-muted font-medium">{booking.from}</h1>
                </div>
                <div className="mt-3 flex-center-between">
                  <h1>To: </h1>
                  <h1 className="text-muted font-medium">{booking.to}</h1>
                </div>
                <div className="mt-3 flex-center-between">
                  <h1>Bus Operator:</h1>
                  <h1 className="text-muted font-medium">{booking.operator}</h1>
                </div>
                <div className="mt-3 flex-center-between">
                  <h1>Journey Date:</h1>
                  <h1 className="text-muted font-medium">
                    {booking.journey_date}
                  </h1>
                </div>
                <div className="mt-3 flex-center-between">
                  <h1>Journey Time:</h1>
                  <h1 className="text-muted font-medium">
                    {booking.journey_time} (4hrs)
                  </h1>
                </div>
                <div className="mt-3 flex-center-between">
                  <h1>Serial number:</h1>
                  <h1 className="text-red-600 font-medium">
                    {booking.serial_number}
                  </h1>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <h1 className="text-2xl font-bold">Ugx {booking.fare}</h1>
                <Link className="text-primary">Booking Guides</Link>
                <div className="mt-4">
                  <Link
                    to="/track"
                    className="btn w-full bg-slate-100 mt-5 hover:bg-slate-200 dark:bg-dark-light dark:hover:bg-dark-light"
                  >
                    Track your Bus
                  </Link>
                  <Link
                    to={`/book?type=${booking.type.toLowerCase()}`}
                    className="btn btn-primary mt-3 block w-max"
                  >
                    book again
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-center-center py-6 text-center">
          <h1 className="text-2xl font-semibold opacity-50">No bookings</h1>
        </div>
      )}
    </>
  );
};

export default BookingList;
