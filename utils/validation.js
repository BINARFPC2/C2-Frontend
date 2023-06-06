import * as Yup from "yup"

export const AuthSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^(\+62|62|0)8[1-9][0-9]{6,9}$/g, "Phone number is not valid"),
    email: Yup.string().email("Invalid email address format").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be 8 characters at minimum")
        .required("Password is required")
});