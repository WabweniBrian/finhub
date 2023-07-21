import { useState } from "react";
import toast from "react-hot-toast";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const BookingFilters = ({ buttonText, origin, destination, date }) => {
  const path = useLocation();

  const [filterInfo, setFilterInfo] = useState({
    origin: path.pathname === "/search" ? origin : "",
    destination: path.pathname === "/search" ? destination : "",
    date: path.pathname === "/search" ? date : "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFilterInfo((info) => ({ ...info, [e.target.name]: [e.target.value] }));
  };

  const goToSearch = () => {
    if (!filterInfo.origin || !filterInfo.destination || !filterInfo.date) {
      toast.error("Please fill in all the fields");
    } else {
      navigate(
        `/search?origin=${filterInfo.origin}&destination=${filterInfo.destination}&date=${filterInfo.date}`
      );
    }
  };

  return (
    <>
      <div className="max-w-xs mx-auto w-full card">
        <div className="mb-2 text-center">
          <h1 className="text-xl font-semibold">Book Bus ticket Online</h1>
        </div>
        {/* Origin */}
        <div className="mt-2 relative">
          <FiMapPin className="absolute top-1/2 -translate-y-1/2 left-2" />
          <select
            value={filterInfo.origin}
            name="origin"
            onChange={handleChange}
            className="px-8"
          >
            <option value="">Origin...</option>
            <option value="Kampala">Kampala</option>
            <option value="Mbarara">Mbarara</option>
            <option value="Gulu">Gulu</option>
            <option value="Mbale">Mbale</option>
            <option value="Soroti">Soroti</option>
          </select>
        </div>
        {/* Destination */}
        <div className="mt-2 relative">
          <FiMapPin className="absolute top-1/2 -translate-y-1/2 left-2" />
          <select
            value={filterInfo.destination}
            name="destination"
            onChange={handleChange}
            className="px-8"
          >
            <option value="">Destination...</option>
            <option value="Kampala">Kampala</option>
            <option value="Mbarara">Mbarara</option>
            <option value="Gulu">Gulu</option>
            <option value="Mbale">Mbale</option>
            <option value="Soroti">Soroti</option>
          </select>
        </div>
        {/* Date */}
        <div className="mt-2 relative">
          <FiCalendar className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="date"
            value={filterInfo.date}
            name="date"
            onChange={handleChange}
            className="pl-8"
          />
        </div>
        <button
          className="btn btn-primary mt-4 block w-full"
          onClick={goToSearch}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default BookingFilters;
