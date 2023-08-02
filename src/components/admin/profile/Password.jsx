import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Input from "../../common/Input";
import { resetPasswordValidationSchema } from "../../../utils/validationSchema";

const Password = () => {
  const initialValues = {
    old_password: "",
    new_password: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values) => {
    toast.success("Password reset successfully");
    console.log(values);
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
  } = useFormik({
    initialValues,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="mt-8">
      <div className="pb-3 border-b dark:border-b-dark">
        <h1 className="font-semibold">Password</h1>
        <p>Reset your password from here </p>
      </div>
      <form onSubmit={submit}>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          {/* Old Password */}
          <div className="mt-6 flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Old password*"
              value={values.old_password}
              id="old_password"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.old_password && errors.old_password}
            />
            {touched.old_password && errors.old_password ? (
              <div className="text-red-600 text-sm">{errors.old_password}</div>
            ) : null}
          </div>
          {/* New Password */}
          <div className="mt-6 flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="New password*"
              value={values.new_password}
              id="new_password"
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.new_password && errors.new_password}
            />
            {touched.new_password && errors.new_password ? (
              <div className="text-red-600 text-sm">{errors.new_password}</div>
            ) : null}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mt-6">
          <Input
            type="password"
            label="Confirm Password*"
            value={values.password_confirmation}
            id="password_confirmation"
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={
              touched.password_confirmation && errors.password_confirmation
            }
          />
          {touched.password_confirmation && errors.password_confirmation ? (
            <div className="text-red-600 text-sm">
              {errors.password_confirmation}
            </div>
          ) : null}
        </div>
        <div className="flex-center-center mt-4">
          <button
            type="submit"
            className="btn block text-center !opacity-100 btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
