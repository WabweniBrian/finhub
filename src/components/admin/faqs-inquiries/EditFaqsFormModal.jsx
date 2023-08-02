import Modal from "../../common/Modal";
import { faqsValidationSchema } from "../../../utils/validationSchema";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import Input from "../../common/Input";
import { FaSpinner } from "react-icons/fa";

const EditFaqsFormModal = ({ isModalOpen, handleCloseModal }) => {
  const initialValues = {
    question: "",
    answer: "",
  };

  const handleSubmit = async (values) => {
    toast.success("Faq added successfully");
    console.log(values);
    handleCloseModal();
    resetForm();
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: faqsValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="sm">
        <h2 className="text-xl text-center mt-4 font-semibold pb-2 mb-4 border-b">
          Update Faq
        </h2>
        <form onSubmit={submit}>
          {/* Question */}
          <div className="mt-6">
            <Input
              label="Question*"
              value={values.question}
              id="question"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.question && errors.question}
            />
            {touched.question && errors.question ? (
              <div className="text-red-600 text-sm">{errors.question}</div>
            ) : null}
          </div>

          {/* Answer */}
          <div className="mt-6">
            <Input
              label="Answer*"
              multline
              rows={6}
              value={values.answer}
              id="answer"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.answer && errors.answer}
            />
            {touched.answer && errors.answer ? (
              <div className="text-red-600 text-sm">{errors.answer}</div>
            ) : null}
          </div>

          <div className="flex-align-center justify-end gap-x-3 mt-6">
            <button
              className="btn bg-slate-200 hover:bg-slate-300"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn block text-center !opacity-100 btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? <FaSpinner className="animate-spin" /> : "Add"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditFaqsFormModal;
