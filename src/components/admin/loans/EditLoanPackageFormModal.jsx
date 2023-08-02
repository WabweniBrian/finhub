import Modal from "../../common/Modal";
import { packageValidationSchema } from "../../../utils/validationSchema";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import Input from "../../common/Input";
import { FaSpinner } from "react-icons/fa";

const EditLoanPackageFormModal = ({ isModalOpen, handleCloseModal }) => {
  const initialValues = {
    package_name: "",
    maximum_amount: "",
    interest: "",
  };

  const handleSubmit = async (values) => {
    toast.success("Package added successfully");
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
    validationSchema: packageValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="sm">
        <h2 className="text-xl text-center mt-4 font-semibold pb-2 mb-4 border-b">
          Update Loan Package
        </h2>
        <form onSubmit={submit}>
          {/* Package Name */}
          <div className="mt-6">
            <Input
              label="Package Name*"
              value={values.package_name}
              id="package_name"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.package_name && errors.package_name}
            />
            {touched.package_name && errors.package_name ? (
              <div className="text-red-600 text-sm">{errors.package_name}</div>
            ) : null}
          </div>

          {/* Maximum Amount */}
          <div className="mt-6">
            <Input
              type="number"
              label="Maximum Amount*"
              value={values.maximum_amount}
              id="maximum_amount"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.maximum_amount && errors.maximum_amount}
            />
            {touched.maximum_amount && errors.maximum_amount ? (
              <div className="text-red-600 text-sm">
                {errors.maximum_amount}
              </div>
            ) : null}
          </div>

          {/* Interest */}
          <div className="mt-6">
            <Input
              type="number"
              label="Interest*"
              value={values.interest}
              id="interest"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.interest && errors.interest}
            />
            {touched.interest && errors.interest ? (
              <div className="text-red-600 text-sm">{errors.interest}</div>
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

export default EditLoanPackageFormModal;
