import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Input from "../../common/Input";
import { profilevalidationSchema } from "../../../utils/validationSchema";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

const Profile = () => {
  const initialValues = {
    username: "Wabweni Brian",
    email: "wabwenib66@gmail.com",
    phone: "+2568949499",
  };

  const handleSubmit = async (values) => {
    toast.success("Profile updated successfully");
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
    validationSchema: profilevalidationSchema,
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
          {/* Username */}
          <div className="mt-6 flex-1 w-full sm:w-fit">
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
          {/* Email Address */}
          <div className="mt-6 flex-1 w-full sm:w-fit">
            <Input
              label="Email Address*"
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
            label="Phone*"
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

export default Profile;
