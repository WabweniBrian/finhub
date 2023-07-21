import React, { useState } from "react";
import useToggle from "../../../hooks/useToggle";
import { BiCheck } from "react-icons/bi";

const paymentOptions = [
  {
    id: 1,
    title: "MTN",
    logo: (
      <img src="/images/MTN-logo.png" alt="Logo" className="w-14 mx-auto" />
    ),
  },
  {
    id: 2,
    title: "Aitel",
    logo: (
      <img src="/images/Airtel-logo.png" alt="Logo" className="w-14 mx-auto" />
    ),
  },
];

const LuggagePayment = () => {
  const [options, toggleActiveState, selectedItem] = useToggle(
    paymentOptions,
    paymentOptions[0],
    "isActive"
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-8 border rounded-lg p-4">
      <div className="border rounded-lg p-4">
        <h2 className="text-xl text-center mt-4 font-semibold">
          Choose Payment option
        </h2>
        <div className="flex-center-center gap-5 mt-5">
          {options.map((option) => (
            <div
              key={option.id}
              className={`w-36 h-36 rounded-lg grid place-items-center text-center border-2 border-slate-300 bg-white cursor-pointer relative overflow-hidden shadow shadow-slate-300 ${
                option.isActive && " !border-primary shadow-primary/30"
              }`}
              onClick={() => toggleActiveState(option)}
            >
              <div>
                {option.logo}
                <p className="mt-3">{option.title}</p>
              </div>
              {option.isActive && (
                <div className="w-7 h-7 absolute -top-1 -right-1 rounded grid place-items-center bg-primary">
                  <BiCheck className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="number"
            id="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g 0773563733"
          />
        </div>
      </div>

      <div className="border rounded-lg p-4 relative">
        <h2 className="text-xl text-center mt-4 font-semibold">Fees</h2>
        <div className="mt-3 flex-center-between">
          <h1>Charges</h1>
          <h1 className="text-muted font-medium">Ugx. 5000</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Service Fee</h1>
          <h1 className="text-muted font-medium">Ugx. 500</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Total</h1>
          <h1 className="font-medium text-xl text-primary">Shs. 5,500</h1>
        </div>
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 btn btn-secondary">
          Make Payment Now
        </button>
      </div>
    </div>
  );
};

export default LuggagePayment;
