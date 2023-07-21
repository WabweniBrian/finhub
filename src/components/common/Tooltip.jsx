import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Tooltip = ({ children, position, text }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const getPostion = () => {
    switch (position) {
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-top-[0.33rem]";
        break;
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-right-1";
        break;
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:-left-1";
        break;

      default:
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:-bottom-[0.33rem]";
        break;
    }
  };

  return (
    <>
      <div className="relative inline-block">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        <CSSTransition
          in={isTooltipVisible}
          timeout={1000}
          classNames="tooltip"
          unmountOnExit
        >
          <div
            className={`
            absolute px-2 py-1 bg-zinc-600 text-slate-50 text-sm rounded-md opacity-100 transition-opacity duration-300 pointer-events-auto whitespace-nowrap ${getPostion()}
             z-[999] before:absolute before:w-[0.65rem] before:h-[0.65rem] before:bg-zinc-600 before:rotate-45
            `}
          >
            {text}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Tooltip;
