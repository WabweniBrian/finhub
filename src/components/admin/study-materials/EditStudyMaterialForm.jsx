import toast from "react-hot-toast";
import { useFormik } from "formik";
import Input from "../../common/Input";
import { FaSpinner } from "react-icons/fa";
import { useRef, useState } from "react";
import { postValidationSchema } from "../../../utils/validationSchema";

const EditStudyMaterialForm = () => {
  const imageInput = useRef(null);
  const [image, setImage] = useState("");
  const imageRef = useRef();
  //  const [hideProgressWrapper, sethideProgressWrapper] = useState(true);
  const [uploading, setUploading] = useState(false);
  //  const [percentage, setPercentage] = useState(0);
  //  const progressRef = useRef();

  const initialValues = {
    title: "",
    slug: "",
    description: "",
    imageUrl: "",
    content: "",
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
    validationSchema: postValidationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <form onSubmit={submit}>
        {/* Title */}
        <div>
          <Input
            label="Title*"
            id="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            invalid={touched.title && errors.title}
          />
          {touched.title && errors.title ? (
            <div className="text-red-600 text-sm">{errors.title}</div>
          ) : null}
        </div>

        {/* Slug */}
        <div className="mt-6">
          <Input
            label="Slug*"
            id="slug"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.slug}
            invalid={touched.slug && errors.slug}
          />
          {touched.slug && errors.slug ? (
            <div className="text-red-600 text-sm">{errors.slug}</div>
          ) : null}
        </div>

        {/* Description */}
        <div className="mt-6">
          <Input
            multline
            rows={5}
            label="Description*"
            id="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            invalid={touched.description && errors.description}
          />
          {touched.description && errors.description ? (
            <div className="text-red-600 text-sm">{errors.description}</div>
          ) : null}
        </div>

        {/* Content */}
        {/* <div className="mt-4">
          <label htmlFor="content">Content:</label>
          <ReactQuill
            theme="snow"
            id="content"
            name="content"
            value={values.content}
            onChange={handleEditorChange}
            onBlur={handleEditorBlur}
            modules={{ toolbar: toolbarOptions }}
            className={`shadow-sm ${
              touched.content && errors.content && "error"
            }`}
          />
          {touched.content && errors.content ? (
            <div className="text-red-600 text-sm">{errors.content}</div>
          ) : null}
        </div> */}

        {/* Image */}
        <div className="relative mt-6">
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setImage(e.target.files[0])}
            onBlur={handleBlur}
          />
          <img
            src={`${
              image ? URL.createObjectURL(image) : "/images/coverphoto.png"
            }`}
            alt=""
            className={`w-full h-[200px] my-2 cursor-pointer object-cover rounded-md ${
              uploading && "opacity-40 pointer-events-none"
            }`}
            onClick={() => imageInput.current.click()}
            ref={imageRef}
          />
          {/* <div
            className={`absolute top-2 right-2 bg-red-500 hover:opacity-80 text-white h-10 w-10 rounded-full sm:cursor-pointer hidden place-items-center ${
              values.imageUrl && "!grid"
            }`}
            onClick={() => deleteImage(values.imageUrl)}
          >
            <FiTrash />
          </div> */}

          <div className="mt-2">
            {touched.imageUrl && errors.imageUrl ? (
              <div className="text-red-600 text-sm">{errors.imageUrl}</div>
            ) : null}
          </div>
          {/* <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden ${
              uploading && "!block"
            }`}
          >
            <div className="loader"></div>
          </div> */}
        </div>
        {/* <div
          className={`flex-center-between gap-2 ${
            hideProgressWrapper && "!hidden"
          }`}
        >
          <div className="progressbar w-full h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full" ref={progressRef}></div>
          </div>
          <p className="ml-2 flex-shrink-0">{percentage}%</p>
        </div> */}

        <button
          type="submit"
          className="btn block text-center !opacity-100 btn-primary mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Add"}
        </button>
      </form>
    </div>
  );
};

export default EditStudyMaterialForm;
