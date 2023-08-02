import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, size, children, scroll }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed w-full h-full left-0 top-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            ref={modalRef}
            className={`bg-white rounded-lg  w-full mx-auto p-6 relative ${
              size === "sm" ? "max-w-sm" : "md" ? "max-w-2xl" : "max-w-4xl"
            } ${scroll && "h-[80vh] overflow-auto"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button
              className="absolute top-2 right-2 icon-box"
              onClick={handleCloseButtonClick}
            >
              <FiX />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
