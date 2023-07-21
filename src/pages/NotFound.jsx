import React from "react";
import NotFoundImg from "../404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex-center-center text-center flex-col">
      <img src={NotFoundImg} alt="" className="w-[400px] -mt-20" />
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
      <button onClick={() => navigate(-1)} className="btn btn-primary mt-4">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
