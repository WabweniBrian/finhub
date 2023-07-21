import React from "react";
import FormWizard from "../../components/home/booking/FormWizard";
import { BsBriefcase, BsPerson, BsWallet2 } from "react-icons/bs";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import PassengerBookingInfo from "../../components/home/booking/PassengerBookingInfo";
import PassengerSeatsSelection from "../../components/home/booking/PassengerSeatsSelection";
import PassengerPayment from "../../components/home/booking/PassengerPayment";
import PassengerBookingSummary from "../../components/home/booking/PassengerBookingSummary";
import LuggageBookingInfo from "../../components/home/booking/LuggageBookingInfo";
import LuggagePayment from "../../components/home/booking/LuggagePayment";
import LuggageBookingSummary from "../../components/home/booking/LuggageBookingSummary";

const BookingWizard = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");

  const steps =
    type === "passenger"
      ? [
          {
            label: "Info",
            content: <PassengerBookingInfo />,
            icon: <BsBriefcase />,
            description: "Luggage Details",
          },
          {
            label: "Seats",
            content: <PassengerSeatsSelection />,
            icon: <MdAirlineSeatReclineExtra />,
            description: "Choose seat(s)",
          },
          {
            label: "Payment",
            content: <PassengerPayment />,
            icon: <BsWallet2 />,
            description: "Payment details",
          },
          {
            label: "Summary",
            content: <PassengerBookingSummary />,
            icon: <BsPerson />,
            description: "Booking Summary",
          },
        ]
      : [
          {
            label: "Info",
            content: <LuggageBookingInfo />,
            icon: <BsBriefcase />,
            description: "Luggage Details",
          },
          {
            label: "Payment",
            content: <LuggagePayment />,
            icon: <BsWallet2 />,
            description: "Payment details",
          },
          {
            label: "Summary",
            content: <LuggageBookingSummary />,
            icon: <BsPerson />,
            description: "Booking Summary",
          },
        ];

  return (
    <div>
      <div className="pt-28 pb-10 px-4">
        <div className="card max-w-6xl mx-auto">
          <FormWizard steps={steps} type="icon" variant="one" />
        </div>
      </div>
    </div>
  );
};

export default BookingWizard;
