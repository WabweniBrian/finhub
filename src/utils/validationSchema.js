import * as Yup from "yup";

// Users------------------------------------------------------------------------------------------------------------
export const registerValidationSchema = Yup.object().shape({
  username: Yup.string("Username must be a string")
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .email("Email address must be valid")
    .required("Email Address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  password_confirmation: Yup.string()
    .required("Please, confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
