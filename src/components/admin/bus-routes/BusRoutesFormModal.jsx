import React, { useState } from "react";
import Modal from "../../common/Modal";
import { BiHome, BiHomeAlt2 } from "react-icons/bi";

const BusRoutesFormModal = ({ isModalOpen, handleCloseModal, title }) => {
  const [route, setRoute] = useState({
    origin: "",
    destination: "",
  });

  const handleChange = (e) => {
    setRoute({ ...route, [e.target.name]: [e.target.value] });
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
            {/* Origin */}
            <div>
              <p>Origin</p>
              <div className="mt-2 relative">
                <BiHomeAlt2 className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="text"
                  value={route.origin}
                  name="origin"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Origin"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="mt-4">
              <p>Destination</p>
              <div className="mt-2 relative">
                <BiHome className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="text"
                  value={route.destination}
                  name="destination"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Destination"
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

export default BusRoutesFormModal;
