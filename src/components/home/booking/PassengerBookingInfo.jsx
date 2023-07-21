import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const PassengerBookingInfo = () => {
  const [passenger, setPassenger] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfTickets: 0,
    entryPoint: "",
    stopPoint: "",
  });

  const handleTicketsChange = (operation) => {
    setPassenger((prevPassenger) => {
      if (operation === "increment") {
        return {
          ...prevPassenger,
          numberOfTickets: prevPassenger.numberOfTickets++,
        };
      } else {
        return {
          ...prevPassenger,
          numberOfTickets:
            prevPassenger.numberOfTickets > 0
              ? prevPassenger.numberOfTickets--
              : 0,
        };
      }
    });
  };

  const handleChange = (e) => {
    setPassenger((prevPassenger) => ({
      ...prevPassenger,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {};

  return (
    <div>
      <div className="mt-6 border rounded-lg p-4">
        <div className="flex-align-center flex-col md:flex-row gap-4">
          {/* Name */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name..."
              value={passenger.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address..."
              value={passenger.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mt-4">
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone Number..."
            value={passenger.phone}
            onChange={handleChange}
          />
        </div>

        {/* Number of Tickets */}
        <div className="mt-4">
          <p>Number of Tickets</p>
          <div className="flex-align-center gap-x-3 mt-2">
            <motion.div
              className="w-10 h-10 flex-center-center rounded-lg shadow-sm border cursor-pointer"
              onClick={() => handleTicketsChange("decrement")}
              whileTap={{ scale: 0.6 }}
            >
              <FiMinus />
            </motion.div>
            <span className="select-none">{passenger.numberOfTickets}</span>
            <motion.div
              className="w-10 h-10 flex-center-center rounded-lg shadow-sm border cursor-pointer"
              onClick={() => handleTicketsChange("increment")}
              whileTap={{ scale: 0.6 }}
            >
              <FiPlus />
            </motion.div>
          </div>
        </div>
        <div className="flex-align-center flex-col md:flex-row gap-4 mt-4">
          {/* Entry Point */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="entryPoint" className="select-none">
              Entry Point:
            </label>
            <select
              id="entryPoint"
              name="entryPoint"
              value={passenger.entryPoint}
              onChange={handleChange}
            >
              <option value="">---Choose----</option>
              <option value="Kampala">Kampala</option>
              <option value="Mbarara">Mbarara</option>
              <option value="Soroti">Soroti</option>
              <option value="Gulu">Gulu</option>
              <option value="Mbale">Mbale</option>
              <option value="Bushenyi">Bushenyi</option>
              <option value="Iganga">Iganga</option>
              <option value="Jinja">Jinja</option>
              <option value="Katwe">Katwe</option>
              <option value="Lira">Lira</option>
            </select>
          </div>

          {/* Stop Point */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="email">Stop Point:</label>
            <select
              id="stopPoint"
              name="stopPoint"
              value={passenger.stopPoint}
              onChange={handleChange}
            >
              <option value="">---Choose----</option>
              <option value="Kampala">Kampala</option>
              <option value="Mbarara">Mbarara</option>
              <option value="Soroti">Soroti</option>
              <option value="Gulu">Gulu</option>
              <option value="Mbale">Mbale</option>
              <option value="Bushenyi">Bushenyi</option>
              <option value="Iganga">Iganga</option>
              <option value="Jinja">Jinja</option>
              <option value="Katwe">Katwe</option>
              <option value="Lira">Lira</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerBookingInfo;
