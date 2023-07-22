import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FormWizard = ({ steps, type, variant }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = () => {
    navigate("/bookings");
  };

  return (
    <div className="form-wizard">
      <div className="mb-6">
        <div
          className={`flex mb-2 justify-between ${
            variant === "three" ? "border border-slate-300 rounded-md" : ""
          }`}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {variant === "one" && (
                <>
                  {index !== 0 && (
                    <div className="flex-1 mt-5">
                      <div className="h-0.5 bg-slate-300 hidden sm:block"></div>
                    </div>
                  )}
                </>
              )}
              <div
                className={`!flex-1 flex gap-x-4 items-center space-y-2 h-full ${
                  variant === "three" &&
                  "relative px-2 py-1 before:absolute before:w-[0.8rem] before:h-[0.8rem] before:bg-white before:-right-[0.5rem] before:border before:border-transparent before:border-t-slate-300 before:border-r-slate-300 before:rotate-45 wizard-step"
                } ${variant === "one" && "flex-col"}`}
              >
                {type === "icon" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#ef4444"
                          : "#ccc",
                    }}
                    className="rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300"
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 !text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <div
                        className={`flex-shrink-0 ${
                          (currentStep === index || index < currentStep) &&
                          "text-white !opacity-100"
                        }`}
                      >
                        {step.icon}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#ef4444"
                          : "#ccc",
                    }}
                    className={`rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                      currentStep === index || index < currentStep
                        ? "bg-primary"
                        : "#ccc"
                    } text-white text-xl`}
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </motion.div>
                )}
                <div
                  className={`text-sm ${variant === "one" && "text-center"} ${
                    currentStep === index || index < currentStep
                      ? "text-primary"
                      : "text-zinc-400"
                  }`}
                >
                  <div className="text-sm sm:text-lg font-medium">
                    {step.label}
                  </div>
                  <div className="hidden sm:block">{step.description}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>{steps[currentStep].content}</div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className={`btn btn-primary ${
            currentStep === 0 && "!bg-zinc-400 cursor-not-allowed"
          } text-white`}
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className={`btn ${
            currentStep === steps.length - 1 ? "btn-primary" : "btn-primary"
          } text-white`}
          onClick={
            currentStep === steps.length - 1 ? handleFinish : handleNextStep
          }
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FormWizard;
