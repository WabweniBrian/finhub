import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

const Input = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur,
  type = "text",
  icon,
  invalid,
  multline = false,
  cols,
  rows,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (e) => {
    setIsFocused(false);
    onBlur(e);
  };

  const getInputClasses = () => {
    let inputClasses = `px-3 py-2 border-gray-300 outline-none transition-a w-full text-base !rounded-md autofill:input-shadow autofill:!ring-2 autofill:!ring-primary ${
      icon && "!pl-8"
    }`;

    if (isFocused) {
      inputClasses += " focus:ring-2 !border-transparent focus:ring-primary";
    }
    if (invalid) {
      inputClasses += " !ring-2 !ring-red-600 !border-transparent";
    }
    if (invalid && isFocused) {
      inputClasses += " !ring-2 !ring-red-600";
    }
    return inputClasses;
  };

  return (
    <div className="relative block">
      <label
        className={`absolute z-20 top-[9px] left-2 text-[#8d9193] transition-a px-[0.15rem] pointer-events-none ${
          (isFocused || value) &&
          "!-top-[12px] !left-[12px] text-sm text-primary bg-white"
        } ${invalid && "text-red-600"} ${
          icon && "left-7"
        } transition-all duration-200`}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-2 ${
              invalid && "text-red-600"
            } ${multline && "!top-3 translate-y-0"}`}
          >
            {icon}
          </div>
        )}
        {invalid && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-2 ${
              multline && "!top-3 translate-y-0"
            }`}
          >
            <FiInfo className="text-red-600" />
          </div>
        )}
        {multline ? (
          <textarea
            cols={cols}
            rows={rows}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={getInputClasses()}
          />
        ) : (
          <input
            type={type}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={getInputClasses()}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
