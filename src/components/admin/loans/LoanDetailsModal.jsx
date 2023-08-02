import Modal from "../../common/Modal";

const LoanDetailsModal = ({ isModalOpen, handleCloseModal }) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} scroll>
        <h2 className="text-xl text-center mt-4 font-semibold pb-2 mb-4 border-b">
          Loan Details
        </h2>

        <div className="mt-5">
          <div className="flex-center-center text-center">
            <div>
              <img
                src="/images/profile.png"
                alt=""
                className="w-20 h-20 rounded-full border-2 mx-auto"
              />
              <h1 className="text-2xl font-semibold">John Doe</h1>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex-center-between gap-2">
              <h1>Amount Taken</h1>
              <h1 className="text-xl font-semibold text-primary">
                Ugx 4,000,000
              </h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Date Taken</h1>
              <h1 className="text-xl font-semibold text-primary">15/08/2023</h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Date Approved</h1>
              <h1 className="text-xl font-semibold text-primary">12/08/2023</h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Monthly Payments</h1>
              <h1 className="text-xl font-semibold text-primary">
                Ugx 350,000
              </h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Package</h1>
              <h1 className="text-xl font-semibold text-primary">
                Student Max
              </h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Duration</h1>
              <h1 className="text-xl font-semibold text-primary">2years</h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Interest</h1>
              <h1 className="text-xl font-semibold text-primary">3.0%</h1>
            </div>
            <div className="flex-center-between gap-2 mt-3">
              <h1>Total Payable</h1>
              <h1 className="text-3xl font-semibold text-primary">
                Ugx 4,350,000
              </h1>
            </div>
          </div>
        </div>

        <div className="flex-align-center justify-end gap-x-3 mt-6">
          <button
            className="btn bg-slate-200 hover:bg-slate-300"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LoanDetailsModal;
