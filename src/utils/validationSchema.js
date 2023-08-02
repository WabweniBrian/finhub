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

export const profilevalidationSchema = Yup.object().shape({
  username: Yup.string("Username must be a string")
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .email("Email address must be valid")
    .required("Email Address is required"),
  phone: Yup.string().required("Phone Number is required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  old_password: Yup.string().required("Password is required"),
  new_password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  password_confirmation: Yup.string()
    .required("Please, confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const userValidationSchema = Yup.object().shape({
  username: Yup.string("Username must be a string")
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .email("Email address must be valid")
    .required("Email Address is required"),
  role: Yup.string().required("Role is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  password_confirmation: Yup.string()
    .required("Please, confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

// Roles ---------------------------------------------------------------------------------------------------------------------
export const rolesValidationSchema = Yup.object().shape({
  roleName: Yup.string().required("Role Name is required"),
  description: Yup.string(),
  selectedPermissions: Yup.array()
    .min(1, "Please select at least one permission")
    .required("Please select at least one permission"),
});

// Social Links --------------------------------------------------------------------------------------------------------------
export const socialLinksValidationSchema = Yup.object().shape({
  linkText: Yup.string().required("Link Text is required"),
  linkUrl: Yup.string()
    .required("Pleae, provide the link url")
    .url("Enter a valid link url"),
});

// Social Links --------------------------------------------------------------------------------------------------------------
export const contactValidationSchema = Yup.object().shape({
  phone1: Yup.string().required("Phone Number is required"),
  email: Yup.string()
    .email("Email address must be valid")
    .required("Email Address is required"),
  address: Yup.string().required("Address is required"),
});

// About---------------------------------------------------------------------------------------------------------------------
export const aboutValidationSchema = Yup.object().shape({
  about: Yup.string().required("About is required"),
});

// Package --------------------------------------------------------------------------------------------------------------
export const packageValidationSchema = Yup.object().shape({
  package_name: Yup.string().required("Package Name is required"),
  maximum_amount: Yup.number().required("Maximum Amount is required"),
  interest: Yup.number().required("Please, enter the interest"),
});

// Faqs --------------------------------------------------------------------------------------------------------------
export const faqsValidationSchema = Yup.object().shape({
  question: Yup.string().required("Question is required").min(4),
  answer: Yup.string().required("Answer is required").min(10),
});

// Posts------------------------------------------------------------------------------------------------------------
export const postValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  description: Yup.string().required("Description is required"),
  imageUrl: Yup.string().required("Image is required"),
  content: Yup.string().required("Content is required"),
});
