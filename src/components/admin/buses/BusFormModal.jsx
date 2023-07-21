import React, { useState } from "react";
import Modal from "../../common/Modal";
import { BiBusSchool } from "react-icons/bi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { GiSteeringWheel } from "react-icons/gi";

const BusFormModal = ({ isModalOpen, handleCloseModal, title }) => {
  const [bus, setBus] = useState({
    bus_oprator: "",
    bus_type: "",
    bus_number: "",
    number_of_seats: "",
  });

  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="sm">
        <h2 className="text-xl text-center mt-4 font-semibold pb-2 mb-4 border-b">
          {title}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="my-2">
            {/* Bus Operator */}
            <div>
              <p>Bus operator</p>
              <div className="mt-2 relative">
                <GiSteeringWheel className="absolute top-1/2 -translate-y-1/2 left-2" />
                <select
                  value={bus.bus_oprator}
                  name="bus_oprator"
                  onChange={handleChange}
                  className="pl-8"
                >
                  <option value="">Select</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Link">Link</option>
                  <option value="Y.Y Coaches">Y.Y Coaches</option>
                  <option value="Global">Global</option>
                </select>
              </div>
            </div>

            {/* Bus Type */}
            <div className="mt-4">
              <p>Bus Type</p>
              <div className="relative mt-2">
                <BiBusSchool className="absolute top-1/2 -translate-y-1/2 left-2" />
                <select
                  value={bus.bus_type}
                  name="bus_type"
                  onChange={handleChange}
                  className="pl-8"
                >
                  <option value="">Select</option>
                  <option value="Large">Large</option>
                  <option value="Small">Small</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
            </div>

            {/* Bus Number */}
            <div className="mt-4">
              <p>Bus Number</p>
              <div className="relative mt-2">
                <FiFileText className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="text"
                  value={bus.bus_number}
                  name="bus_number"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Bus Number"
                />
              </div>
            </div>

            {/* Number of seats */}
            <div className="mt-4">
              <p>Number of seats</p>
              <div className="relative mt-2">
                <MdAirlineSeatReclineExtra className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="number"
                  value={bus.number_of_seats}
                  name="number_of_seats"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Number of seats"
                />
              </div>
            </div>
          </div>
          <div className="flex-align-center justify-end gap-x-3 mt-6">
            <button
              className="btn bg-slate-200 hover:bg-slate-300"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BusFormModal;
