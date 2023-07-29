import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useRef, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";

const DatePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const pickerRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedRange((prevRange) => ({
      ...prevRange,
      [name]: new Date(value),
    }));
  };

  const handleInputClick = () => {
    setShowPicker(true);
  };

  const handleOutsideClick = (e) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(e.target) &&
      inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDateSelect = (ranges) => {
    if (ranges.selection) {
      setSelectedRange(ranges.selection);
      console.log("Selected Start Date:", ranges.selection.startDate);
      console.log("Selected End Date:", ranges.selection.endDate);
    }
  };

  return (
    <div className="relative">
      <FiCalendar className="absolute top-1/2 -translate-y-1/2 left-2" />
      <input
        type="text"
        value={`${format(selectedRange.startDate, "yyyy-MM-dd")} - ${format(
          selectedRange.endDate,
          "yyyy-MM-dd"
        )}`}
        name="startDate"
        onClick={handleInputClick}
        onChange={handleInputChange}
        readOnly
        ref={inputRef}
        className="pl-8 border-gray-300"
      />
      {showPicker && (
        <div
          ref={pickerRef}
          className="absolute top-full -right-36 sm:right-0 z-10"
        >
          <DateRangePicker
            ranges={[selectedRange]}
            onChange={handleDateSelect}
            className="z-10 border rounded-lg overflow-hidden"
            editableDateInputs={true}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
