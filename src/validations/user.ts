import * as Yup from "yup";

export const registerValidate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
  full_name: Yup.string().min(3).required("Full name is Required"),
});

export const loginValidate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
});
