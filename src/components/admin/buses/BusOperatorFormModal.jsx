import React, { useState } from "react";
import Modal from "../../common/Modal";
import { BiStreetView, BiCalendar, BiCar } from "react-icons/bi";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const BusOperatorFormModal = ({ isModalOpen, handleCloseModal, title }) => {
  const [operator, setOperator] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    no_of_buses: "",
    dateJoined: "",
  });

  const handleChange = (e) => {
    setOperator({ ...operator, [e.target.name]: [e.target.value] });
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
              {/* Name */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Name</p>
                <div className="mt-2 relative">
                  <BiCar className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={operator.name}
                    name="name"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Name"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Email Address</p>
                <div className="mt-2 relative">
                  <FiMail className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={operator.email}
                    name="email"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-4">
              <p>Contact Number</p>
              <div className="mt-2 relative">
                <FiPhone className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="number"
                  value={operator.phone}
                  name="phone"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Date Joined */}
            <div className="mt-4">
              <p>Date Joined</p>
              <div className="relative mt-2">
                <BiCalendar className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="date"
                  value={operator.dateJoined}
                  name="dateJoined"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Date Joined"
                />
              </div>
            </div>

            <div className="flex-align-center flex-col sm:flex-row gap-3 mt-4">
              {/* Address */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Address</p>
                <div className="relative mt-2">
                  <BiStreetView className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={operator.address}
                    name="address"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Address"
                  />
                </div>
              </div>

              {/* Number of buses */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Number of buses</p>
                <div className="relative mt-2">
                  <MdAirlineSeatReclineExtra className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="number"
                    value={operator.no_of_buses}
                    name="no_of_buses"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Number of buses"
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

export default BusOperatorFormModal;
