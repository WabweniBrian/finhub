import React from "react";
import { FiCheck } from "react-icons/fi";

const OnlineBookingBenefits = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <div className="flex-1 basis-80">
        <img src="/images/Background1.png" alt="" className="w-full" />
      </div>
      <div className="flex-1 basis-80">
        <h1 className="text-3xl font-semibold">Book you next bus with us</h1>
        <div className="flex gap-2 mt-4">
          <div className="icon-box !bg-secondary/20 text-secondary">
            <div className="flex-shrink-0">
              <FiCheck />
            </div>
          </div>
          <p>
            You can book in advance from anywhere and whenever you want. It is
            most useful for people with difficulties to access the bus terminal
            hence saving time and costs that would be lost going to book tickets
            at the bus terminal
          </p>
        </div>
        <div className="flex gap-2 mt-5">
          <div className="icon-box !bg-secondary/20 text-secondary">
            <div className="flex-shrink-0">
              <FiCheck />
            </div>
          </div>
          <p>
            Say no more to long queues, no more hustles of approaching travel
            agents, enjoy checking bus availability online and secure payment
            with our trusted partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineBookingBenefits;
