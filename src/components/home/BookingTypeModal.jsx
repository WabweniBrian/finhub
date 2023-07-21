import React from "react";
import Modal from "../common/Modal";
import useToggle from "../../hooks/useToggle";
import { GiBriefcase } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const bookingTypes = [
  {
    id: 1,
    title: "Passenger",
    icon: <FiUser className="text-3xl mx-auto" />,
  },
  {
    id: 2,
    title: "Luggage",
    icon: <GiBriefcase className="text-3xl mx-auto" />,
  },
];

const BookingTypeModal = ({ isModalOpen, setIsModalOpen }) => {
  const [type, toggleActiveState, selectedItem] = useToggle(
    bookingTypes,
    bookingTypes[0],
    "isActive"
  );
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const goToBookingWizard = () => {
    navigate(`/book?type=${selectedItem.title.toLowerCase()}`);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="sm">
        <h2 className="text-xl text-center mt-4 font-semibold">
          Choose Booking Type
        </h2>
        <div className="flex-center-center gap-5 mt-5">
          {type.map((bookingType) => (
            <div
              key={bookingType.id}
              className={`w-36 h-36 rounded-lg grid place-items-center text-center border-2 border-slate-300 bg-white cursor-pointer relative overflow-hidden shadow shadow-slate-300 ${
                bookingType.isActive && " !border-primary shadow-primary/30"
              }`}
              onClick={() => toggleActiveState(bookingType)}
            >
              <div>
                {bookingType.icon}
                <p className="mt-3">{bookingType.title}</p>
              </div>
              {bookingType.isActive && (
                <div className="w-7 h-7 absolute -top-1 -right-1 rounded grid place-items-center bg-primary">
                  <BiCheck className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex-center-center gap-x-3 mt-6">
          <button
            className="btn bg-slate-200 hover:bg-slate-300"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={goToBookingWizard}>
            Continue
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingTypeModal;
