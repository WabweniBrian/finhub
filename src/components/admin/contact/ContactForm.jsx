import React from "react";
import { contactValidationSchema } from "../../../utils/validationSchema";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Input from "../../common/Input";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const ContactForm = () => {
  const initialValues = {
    phone1: "+2567278234",
    phone2: "",
    email: "finhub.tech@gmail.com",
    address: "Luwum Street, Kampala, uganda",
  };

  const handleSubmit = async (values) => {
    toast.success("Contact updated successfully");
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
    validationSchema: contactValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="border-r pr-5">
      <form onSubmit={submit}>
        {/* Phone 1 */}
        <div className="mt-6">
          <Input
            label="Phone 1*"
            value={values.phone1}
            id="phone1"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone1 && errors.phone1}
          />
          {touched.phone1 && errors.phone1 ? (
            <div className="text-red-600 text-sm">{errors.phone1}</div>
          ) : null}
        </div>
        {/* Phone 2 */}
        <div className="mt-6">
          <Input
            label="Phone 2"
            value={values.phone2}
            id="phone2"
            icon={<FiPhone />}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mt-6">
          <Input
            label="Email address*"
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

        {/* Adress */}
        <div className="mt-6">
          <Input
            label="Physical Address*"
            value={values.address}
            id="address"
            icon={<FiMapPin />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.address && errors.address}
          />
          {touched.address && errors.address ? (
            <div className="text-red-600 text-sm">{errors.address}</div>
          ) : null}
        </div>
        <div className="mt-5">
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

export default ContactForm;
