import React from "react";
import DatePicker from "../../components/admin/reservations/DatePicker";
import { BiPrinter } from "react-icons/bi";
import ReservationsList from "../../components/admin/reservations/ReservationsList";
import Breadcrumb from "../../components/common/Breadcrumb";

const Reservations = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Reservations</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        <div className="flex-align-center justify-end gap-3 pb-3 border-b">
          <DatePicker />
          <button className="btn btn-primary flex-align-center gap-x-2">
            <BiPrinter />
            <span>Print</span>
          </button>
        </div>
        <div>
          <ReservationsList />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
