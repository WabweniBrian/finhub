import Input from "../../common/Input";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { aboutValidationSchema } from "../../../utils/validationSchema";
import { FaSpinner } from "react-icons/fa";

const AddAbout = () => {
  const initialValues = {
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quaerat ullam! Illum eius maiores labore, odit maxime tenetur ea accusamus esse blanditiis perferendis fugit quam corporis dolores sed libero suscipit quo debitis commodi culpa non provident obcaecati saepe totam? Temporibus repudiandae rerum amet doloremque alias atque neque corporis numquam placeat? Architecto vitae, facere accusamus dolorem sed maiores molestiae tenetur quia. Dolorum incidunt quisquam, quod consequatur consectetur repellendus ipsum quis quia nulla delectus amet fuga harum facilis ratione? Illum vel nobis sequi id voluptatibus inventore unde commodi, eius error perspiciatis. Reprehenderit alias eum, tempora dicta, deserunt pariatur neque veritatis necessitatibus quaerat voluptatem sit non doloribus nulla, quia ipsa aliquid id fuga assumenda magnam quas! Corrupti cupiditate exercitationem modi harum velit vel molestias illum laborum eligendi architecto impedit quibusdam, atque similique ab sunt tenetur aliquam libero illo fugit. Excepturi, sunt nulla ratione, distinctio nam nesciunt vel minus hic incidunt natus, aut fugit vero. Non odit libero nobis, possimus, reiciendis porro nam officia rerum deserunt illum aliquam qui ea blanditiis tempore debitis explicabo, id saepe autem voluptate exercitationem aperiam tempora repellendus animi eaque. Enim animi suscipit laborum commodi, dolores fugiat atque ipsum vero sunt delectus minus! Sed odit esse fugit fugiat architecto eaque.",
  };

  const handleSubmit = async (values) => {
    toast.success("About updated successfully");
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
    validationSchema: aboutValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={submit}>
        <Input
          label="About*"
          value={values.about}
          id="about"
          onChange={handleChange}
          onBlur={handleBlur}
          multline
          invalid={touched.about && errors.about}
          rows={14}
        />
        {touched.about && errors.about ? (
          <div className="text-red-600 text-sm">{errors.about}</div>
        ) : null}
        <button
          type="submit"
          className="btn block text-center !opacity-100 btn-primary mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Update"}
        </button>
      </form>
    </div>
  );
};

export default AddAbout;
