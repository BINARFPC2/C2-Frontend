"use client"

import Image from "next/image"
import SideBackground from "@/assets/sidebackground.png"
import InputAuth from "@/components/InputAuth"
import { Form, Formik } from "formik"
import { AuthSchema } from "@/utils/validation"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { asyncRegister, auth } from "@/store/auth/slice"
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const users = useSelector((state) => state.auth);
    console.log(users.registered);

    const handleRegister = (formValue) => {
        dispatch(asyncRegister(formValue))
        console.log(formValue);
    }

    useEffect(() => {
        if (users.registered === true) {
            toast.success("Berhasil Login", {
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
                router.push("/login")
            }, 1000);
        } else if (users.registered === false) {
            toast.error(`${users.message}`, {
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
    }, [router, users, toast])

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
                        <h1 className="w-full pb-6 text-2xl font-bold text-start">Daftar</h1>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                phone: "",
                                password: ""
                            }}
                            onSubmit={(values, { resetForm }) => {
                                handleRegister(values)
                                resetForm()
                            }}
                            validationSchema={AuthSchema}
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
                                            name="name"
                                            type="text"
                                            placeholder="Nama Lengkap"
                                            value={values.name}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.name}
                                            errors={errors.name}
                                        >
                                            Nama
                                        </InputAuth>
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
                                            name="phone"
                                            type="text"
                                            placeholder="+62"
                                            value={values.phone}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.phone}
                                            errors={errors.phone}
                                        >
                                            Nomor Telepon
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
                                            Buat Password
                                        </InputAuth>
                                        <button type="submit" className="px-6 py-3 text-sm text-white rounded-2xl bg-bnr-primary">Daftar</button>
                                    </Form>
                                )
                            }}
                        </Formik>
                        <p className="pt-12 text-sm">Sudah punya akun? <Link href="/login" className="font-bold text-bnr-primary hover:underline hover:transition-all hover:duration-700">Masuk disini</Link></p>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default RegisterPage