import React, { useState } from "react";

const Input = ({
  label,
  value,
  onChange,
  size = "medium",
  variant = "default",
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const getInputClasses = () => {
    let inputClasses = "border";
    if (variant === "outlined") {
      inputClasses += " border-gray-300";
    } else {
      inputClasses += " border-transparent";
    }
    if (isFocused) {
      inputClasses += " focus:ring focus:ring-teal-400";
    }
    if (size === "small") {
      inputClasses += " px-2 py-1 text-sm";
    } else if (size === "large") {
      inputClasses += " px-4 py-2 text-lg";
    } else {
      inputClasses += " px-3 py-2";
    }
    return inputClasses;
  };

  return (
    <div className="relative inline-block">
      <label
        className={`absolute left-3 ${
          isFocused || value
            ? "-top-1 text-xs text-teal-500"
            : "top-1/2 transform -translate-y-1/2 text-sm"
        } transition-all duration-200`}
      >
        {label}
      </label>
      {icon}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={getInputClasses()}
      />
    </div>
  );
};

export default Input;
