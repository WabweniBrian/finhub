import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Input from "../../common/Input";
import { userValidationSchema } from "../../../utils/validationSchema";
import { FiBriefcase, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import Select from "../../common/Select";

const options = [
  {
    value: "Super Admin",
    label: "Super Admin",
  },
  {
    value: "CEO",
    label: "CEO",
  },
  {
    value: "CTO",
    label: "CTO",
  },
  {
    value: "Customer Maintenance",
    label: "Customer Maintenance",
  },
];

const EditUsersForm = () => {
  const initialValues = {
    username: "",
    email: "",
    role: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values) => {
    toast.success("User added successfully");
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
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleSelect = (value) => {
    setFieldValue("role", value);
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-6">
          {/* Username */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              label="Username*"
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
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="text"
              label="Email*"
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
        </div>

        {/* Phone */}
        <div className="mt-6">
          <Input
            label="Phone"
            value={values.phone}
            id="phone"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone && errors.phone}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-600 text-sm">{errors.phone}</div>
          ) : null}
        </div>

        {/* Role */}
        <div className="mt-6">
          <Select
            options={options}
            onSelect={handleSelect}
            icon={<FiBriefcase />}
            text="Select a role*"
            invalid={!values.role && touched.role}
          />
          {!values.role && touched.role && (
            <div className="text-red-600 text-sm">Role is requied</div>
          )}
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-6">
          {/* Password */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password*"
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
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password Confirmation*"
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
    </>
  );
};

export default EditUsersForm;
