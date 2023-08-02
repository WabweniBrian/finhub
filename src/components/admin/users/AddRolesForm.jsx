import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiUsers, FiTag, FiCheckSquare } from "react-icons/fi";
import Input from "../../common/Input";
import { FaSpinner } from "react-icons/fa";
import { rolesValidationSchema } from "../../../utils/validationSchema";

const AddRolesForm = () => {
  const permissions = [
    {
      id: 1,
      displayName: "Can add users",
      name: "add_user",
      category: "users",
    },
    {
      id: 2,
      displayName: "Can update users",
      name: "update_user",
      category: "users",
    },
    {
      id: 3,
      displayName: "Can delete users",
      name: "delete_user",
      category: "users",
    },
    {
      id: 4,
      displayName: "Can add roles",
      name: "add_roles",
      category: "roles",
    },
    {
      id: 5,
      displayName: "Can assign roles",
      name: "assign_roles",
      category: "roles",
    },
  ];

  const initialValues = {
    roleName: "",
    description: "",
    selectedPermissions: [],
  };

  const handleSubmit = async (values) => {
    console.log(values);
    // Your logic to save the role data goes here
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
    validationSchema: rolesValidationSchema,
    onSubmit: handleSubmit,
  });

  const handlePermissionChange = (permissionId, checked) => {
    let selectedPermissions = [...values.selectedPermissions];
    if (checked) {
      selectedPermissions.push(permissionId);
    } else {
      selectedPermissions = selectedPermissions.filter(
        (id) => id !== permissionId
      );
    }
    setFieldValue("selectedPermissions", selectedPermissions);
  };

  const isPermissionSelected = (permissionId) =>
    values.selectedPermissions.includes(permissionId);

  const permissionsByCategory = permissions.reduce((acc, permission) => {
    acc[permission.category] = acc[permission.category] || [];
    acc[permission.category].push(permission);
    return acc;
  }, {});

  const handleSelectAll = (checked) => {
    const allPermissionIds = permissions.map((permission) => permission.id);
    if (checked) {
      setFieldValue("selectedPermissions", allPermissionIds);
    } else {
      setFieldValue("selectedPermissions", []);
    }
  };

  return (
    <div className="border-r pr-5">
      <form onSubmit={submit}>
        {/* Role Name */}
        <div className="mt-6">
          <Input
            label="Role Name*"
            id="roleName"
            value={values.roleName}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.roleName && errors.roleName}
          />
          {touched.roleName && errors.roleName && (
            <div className="text-red-600 text-sm">{errors.roleName}</div>
          )}
        </div>

        {/* Description */}
        <div className="mt-6">
          <Input
            label="Description"
            multline
            rows={4}
            id="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.description && errors.description}
          />
          {touched.description && errors.description && (
            <div className="text-red-600 text-sm">{errors.description}</div>
          )}
        </div>

        {/* Permissions */}
        <div className="mt-6">
          <div className="flex-center-between">
            <h3 className="text-xl font-semibold">Permissions</h3>

            {/* Select All */}
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={
                    values.selectedPermissions.length === permissions.length
                  }
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
                <span className="ml-2">Select All</span>
              </label>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 border p-4 rounded-lg mt-4">
            {Object.entries(permissionsByCategory).map(
              ([category, categoryPermissions]) => (
                <div key={category}>
                  <h4 className="mt-4 mb-2 uppercase text-muted">{category}</h4>
                  {categoryPermissions.map((permission) => (
                    <div key={permission.id} className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id={permission.id}
                        checked={isPermissionSelected(permission.id)}
                        onChange={(e) =>
                          handlePermissionChange(
                            permission.id,
                            e.target.checked
                          )
                        }
                      />
                      <label
                        htmlFor={permission.id}
                        className="ml-2 cursor-pointer capitalize"
                      >
                        {permission.displayName}
                      </label>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
          {touched.selectedPermissions && errors.selectedPermissions && (
            <div className="text-red-600 text-sm mt-2">
              {errors.selectedPermissions}
            </div>
          )}
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="btn block text-center !opacity-100 btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Add Role"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRolesForm;
