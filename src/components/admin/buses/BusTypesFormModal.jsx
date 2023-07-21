import React, { useState } from "react";
import Modal from "../../common/Modal";
import { BiBusSchool } from "react-icons/bi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FiFileText } from "react-icons/fi";

const BusTypesFormModal = ({ isModalOpen, handleCloseModal, title }) => {
  const [type, setType] = useState({
    bus_type: "",
    bus_number: "",
    number_of_seats: "",
  });

  const handleChange = (e) => {
    setType({ ...type, [e.target.name]: [e.target.value] });
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
            {/* Bus Type */}
            <div>
              <p>Bus Type</p>
              <div className="relative mt-2">
                <BiBusSchool className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="text"
                  value={type.bus_type}
                  name="bus_type"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Bus type"
                />
              </div>
            </div>

            {/* Bus Number */}
            <div className="mt-4">
              <p>Bus Number</p>
              <div className="relative mt-2">
                <FiFileText className="absolute top-1/2 -translate-y-1/2 left-2" />
                <select
                  value={type.bus_number}
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

            {/* Number of seats */}
            <div className="mt-4">
              <p>Number of seats</p>
              <div className="relative mt-2">
                <MdAirlineSeatReclineExtra className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="number"
                  value={type.number_of_seats}
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

export default BusTypesFormModal;
