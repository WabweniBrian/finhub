/* eslint-disable jsx-a11y/anchor-has-content */
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "../../utils/validationSchema";
import Input from "../../components/common/Input";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values) => {
    toast.success("You've been successfully registered");
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
    validationSchema: registerValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Create a free account now</h1>
      </div>

      <form onSubmit={submit}>
        {/* Username */}
        <div className="mt-3">
          <Input
            label="Username"
            value={values.username}
            id="username"
            icon={<FiUser />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.username && errors.username}
          />
          {touched.username && errors.username ? (
            <div className="text-red-600 text-sm">{errors.username}</div>
          ) : null}
        </div>

        {/* Email */}
        <div className="mt-6">
          <Input
            type="email"
            label="Email"
            value={values.email}
            id="email"
            icon={<FiMail />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.email && errors.email}
          />
          {touched.email && errors.email ? (
            <div className="text-red-600 text-sm">{errors.email}</div>
          ) : null}
        </div>

        {/* Password */}
        <div className="mt-6">
          <Input
            type="password"
            label="Password"
            value={values.password}
            id="password"
            icon={<FiLock />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.password && errors.password}
          />
          {touched.password && errors.password ? (
            <div className="text-red-600 text-sm">{errors.password}</div>
          ) : null}
        </div>

        {/* Password Confirmation */}
        <div className="mt-6">
          <Input
            type="password"
            label="Password Confirmation"
            value={values.password_confirmation}
            id="password_confirmation"
            icon={<FiLock />}
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

        <div className="mt-5">
          <button
            type="submit"
            className="btn block text-center !opacity-100 btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Sign Up"}
          </button>
        </div>
      </form>
      <p className="text-sm mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default Register;
