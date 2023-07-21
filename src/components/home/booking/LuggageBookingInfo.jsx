import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const LuggageBookingInfo = () => {
  const [luggage, setLuggage] = useState({
    sender: "",
    reciever: "",
    email: "",
    phone: "",
    typeOfLuggage: "",
    entryPoint: "",
    stopPoint: "",
  });

  const handleChange = (e) => {
    setLuggage((prevLuggage) => ({
      ...prevLuggage,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {};

  return (
    <div>
      <div className="mt-6 border rounded-lg p-4">
        <div className="flex-align-center flex-col md:flex-row gap-4">
          {/* Sender's Name */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="name">Sender's Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Sender's Name..."
              value={luggage.name}
              onChange={handleChange}
            />
          </div>

          {/* Reciever's Name */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="reciever">Receiver's Name:</label>
            <input
              type="text"
              id="reciever"
              name="reciever"
              placeholder="Reciever's Name..."
              value={luggage.reciever}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-align-center flex-col md:flex-row gap-4 mt-4">
          {/* Email */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address..."
              value={luggage.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="flex-1 w-full md:w-fit">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number..."
              value={luggage.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Type of Luggage */}
        <div className="mt-4">
          <label htmlFor="typeOfLuggage" className="select-none">
            Type of Luggage:
          </label>
          <select
            id="typeOfLuggage"
            name="typeOfLuggage"
            value={luggage.typeOfLuggage}
            onChange={handleChange}
          >
            <option value="">---Choose----</option>
            <option value="Fashion">Fashion</option>
            <option value="Delicate">Delicate</option>
          </select>
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
              value={luggage.entryPoint}
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
              value={luggage.stopPoint}
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

export default LuggageBookingInfo;
