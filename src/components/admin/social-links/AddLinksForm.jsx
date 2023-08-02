import React from "react";
import { socialLinksValidationSchema } from "../../../utils/validationSchema";
import { FiGlobe, FiTag } from "react-icons/fi";
import Input from "../../common/Input";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const AddLinksForm = () => {
  const initialValues = {
    linkText: "",
    linkUrl: "",
  };

  const handleSubmit = async (values) => {
    toast.success("Link added successfully");
    console.log(values);
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
    validationSchema: socialLinksValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="border-r pr-5">
      <form onSubmit={submit}>
        {/* Link Text */}
        <div className="mt-6">
          <Input
            label="Link Text*"
            value={values.linkText}
            id="linkText"
            icon={<FiTag />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.linkText && errors.linkText}
          />
          {touched.linkText && errors.linkText ? (
            <div className="text-red-600 text-sm">{errors.linkText}</div>
          ) : null}
        </div>

        {/* Link Url */}
        <div className="mt-6">
          <Input
            label="Link Url*"
            value={values.linkUrl}
            id="linkUrl"
            icon={<FiGlobe />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.linkUrl && errors.linkUrl}
          />
          {touched.linkUrl && errors.linkUrl ? (
            <div className="text-red-600 text-sm">{errors.linkUrl}</div>
          ) : null}
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="btn block text-center !opacity-100 btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Add Link"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLinksForm;
