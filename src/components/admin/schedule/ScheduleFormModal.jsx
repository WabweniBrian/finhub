import React, { useState } from "react";
import Modal from "../../common/Modal";
import {
  BiCalendar,
  BiMoney,
  BiBusSchool,
  BiTime,
  BiHome,
  BiHomeAlt2,
} from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";
import { FiFileText } from "react-icons/fi";

const ScheduleFormModal = ({ isModalOpen, handleCloseModal, title }) => {
  const [schedule, setSchedule] = useState({
    origin: "",
    destination: "",
    departure: "",
    bus_operator: "",
    bus_type: "",
    bus_number: "",
    fare: "",
    date: "",
  });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} scroll>
        <h2 className="text-xl text-center mt-4 font-semibold pb-2 mb-4 border-b">
          {title}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <div className="flex-align-center flex-col sm:flex-row gap-3">
              {/* Origin */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Origin</p>
                <div className="mt-2 relative">
                  <BiHomeAlt2 className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={schedule.origin}
                    name="origin"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Origin"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Destination</p>
                <div className="mt-2 relative">
                  <BiHome className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={schedule.destination}
                    name="destination"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Destination"
                  />
                </div>
              </div>
            </div>

            <div className="flex-align-center flex-col sm:flex-row gap-3 mt-4">
              {/* Departure */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Departure</p>
                <div className="mt-2 relative">
                  <BiTime className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="time"
                    value={schedule.departure}
                    name="departure"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Departure"
                  />
                </div>
              </div>

              {/* Bus Operator */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Bus operator</p>
                <div className="mt-2 relative">
                  <GiSteeringWheel className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <select
                    value={schedule.bus_operator}
                    name="bus_operator"
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
            </div>

            <div className="flex-align-center flex-col sm:flex-row gap-3 mt-4">
              {/* Bus Type */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Bus Type</p>
                <div className="relative mt-2">
                  <BiBusSchool className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <select
                    value={schedule.bus_type}
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
              <div className="flex-1 w-full sm:w-fit">
                <p>Bus Number</p>
                <div className="relative mt-2">
                  <FiFileText className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <select
                    value={schedule.bus_number}
                    name="bus_number"
                    onChange={handleChange}
                    className="pl-8"
                  >
                    <option value="">Select</option>
                    <option value="UBG 048">UBG 048</option>
                    <option value="UAV 085">UAV 085</option>
                    <option value="UBA 332">UBA 332</option>
                    <option value="UBH 045">UBH 045</option>
                    <option value="UAW 134">UAW 134</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-align-center flex-col sm:flex-row gap-3 mt-4">
              {/* Fare */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Fare</p>
                <div className="relative mt-2">
                  <BiMoney className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="number"
                    value={schedule.fare}
                    name="fare"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Fare"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Date</p>
                <div className="relative mt-2">
                  <BiCalendar className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="date"
                    value={schedule.date}
                    name="date"
                    onChange={handleChange}
                    className="pl-8"
                  />
                </div>
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

export default ScheduleFormModal;
