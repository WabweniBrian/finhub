import { useEffect, useRef, useState } from "react";
import { BsChevronExpand, BsSearch } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

const Select = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={selectRef} className="relative !font-questrial">
      <button
        type="button"
        className="relative z-10 flex items-center justify-between w-full py-2 pl-3 pr-4 text-left bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:!border-transparent"
        onClick={handleToggle}
      >
        <span className="mr-2 ">
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <BsChevronExpand />
      </button>
      {isOpen && (
        <motion.div
          className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="relative">
            <BsSearch className="mr-2 absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              className="w-full p-2 pl-10 bg-transparent border-b !border-transparent !border-b-gray-300 focus:!outline-none focus:!ring-0 focus:!border-transparent focus:!border-b-gray-300"
              placeholder="Search options..."
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
          <ul className="py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-200 hover:text-inherit ${
                    selectedOption?.value === option.value
                      ? "bg-primary text-slate-100"
                      : ""
                  }`}
                  onClick={() => handleSelectOption(option)}
                >
                  <div className="flex items-center gap-x-2">
                    {option.icon && <span className="mr-2">{option.icon}</span>}
                    <span className="">{option.label}</span>
                  </div>
                  {selectedOption?.value === option.value && (
                    <FiCheck className="ml-2 " />
                  )}
                </li>
              ))
            ) : (
              <li className="px-3 py-2  opacity-80">No options found.</li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Select;
