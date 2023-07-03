"use client";

import Image from "next/image";
import SideBackground from "@/assets/sidebackground.png";
import InputAuth from "@/components/InputAuth";
import Link from "next/link";
import { Form, Formik } from "formik";
import { LoginSchema } from "@/utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogin, auth } from "@/store/auth/slice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from "@/utils/helper";

const LoginPage = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const token = getToken()

    const router = useRouter();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth);

    const handleLogin = (formValue) => {
        dispatch(asyncLogin(formValue));
        setSubmitButtonClicked(true);
    };

    useEffect(() => {
        if (token) {
            router.push("/")
        }
        if (submitButtonClicked && users.authenticated) {
            localStorage.setItem("token", users.token);
            toast.success(`Welcome Brooo`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                router.push("/");
            }, 1000);
        }
        if (users.status === "error") {
            // localStorage.setItem("token", users.token);
            toast.error(`Password Or Email is Wrong`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setSubmitButtonClicked(false);
    }, [users, token]);

    // if (users.status === "false") {
    // localStorage.setItem("token", users.token);
    // toast.success(`Welcome Brooo`, {
    //     position: "top-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    // });
    // setTimeout(() => {
    //     router.push("/");
    // }, 1000);
    // }

    console.log("auth", users.authenticated);
    return (
        <main>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <section>
                <div className="flex h-full max-w-full">
                    <div className="hidden w-1/2 h-full md:block">
                        <Image src={SideBackground} alt="sidebackground" className="object-cover w-full h-screen" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-screen px-4 md:px-32 md:w-1/2">
                        <h1 className="w-full pb-6 text-2xl font-bold text-start">Masuk</h1>
                        {showAlert && <p>{alertMessage}</p>}
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            onSubmit={(values, { resetForm }) => {
                                handleLogin(values)
                                resetForm()
                            }}
                            validationSchema={LoginSchema}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                } = props;
                                return (
                                    <Form className="flex flex-col w-full space-y-4">
                                        <InputAuth
                                            name="email"
                                            type="text"
                                            placeholder="Masukkan Email"
                                            value={values.email}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.email}
                                            errors={errors.email}
                                        >
                                            Email
                                        </InputAuth>
                                        <InputAuth
                                            name="password"
                                            type="password"
                                            placeholder="Masukkan Password"
                                            value={values.password}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.password}
                                            errors={errors.password}
                                        >
                                            Password
                                        </InputAuth>
                                        <button type="submit" className={!showAlert ? "px-6 py-3 text-sm text-white rounded-2xl bg-bnr-primary" : "px-6 py-3 text-sm text-slate-400 rounded-2xl bg-slate-300"} disabled={showAlert && false}>
                                            Masuk
                                        </button>
                                    </Form>
                                )
                            }}
                        </Formik>
                        <p className="pt-12 text-sm">Belum punya akun? <Link href="/register" className="font-bold text-bnr-primary hover:underline hover:transition-all hover:duration-700">Daftar di sini</Link></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage