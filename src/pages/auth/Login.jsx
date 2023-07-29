/* eslint-disable jsx-a11y/anchor-has-content */
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginValidationSchema } from "../../utils/validationSchema";
import Input from "../../components/common/Input";
import { FiLock, FiMail } from "react-icons/fi";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    toast.success("You've logged in successfully");
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
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Welcome back, Sign in</h1>
      </div>
      <form onSubmit={submit}>
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
        <div className="mt-4 sm:flex-center-between">
          <div className="flex-align-center gap-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link className="text-primary hover:underline mt-3 sm:mt-0 block">
            Forgot your password?
          </Link>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="btn block text-center !opacity-100 btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Sign In"}
          </button>
        </div>
      </form>
      <p className="text-sm mt-3">
        Not yet registered?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
