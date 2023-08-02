import Modal from "../../common/Modal";

const LoanApproveDisburseModal = ({ isModalOpen, handleCloseModal }) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl text-center mt-4 font-semibold pb-2 mb-4 border-b">
          Loan Approval & Disburse
        </h2>

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

export default LoanApproveDisburseModal;
