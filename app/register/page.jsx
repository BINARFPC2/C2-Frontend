"use client"

import Image from "next/image"
import SideBackground from "@/assets/sidebackground.png"
import InputAuth from "@/components/InputAuth"
import { Formik } from "formik"
import { AuthSchema } from "@/utils/validation"
import Link from "next/link"

const RegisterPage = () => {
    return (
        <main>
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
                                phoneNumber: "",
                                password: ""
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    console.log("Logging in", values);
                                    setSubmitting(false);
                                }, 500);
                            }}
                            validationSchema={AuthSchema}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
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
                                            name="phoneNumber"
                                            type="text"
                                            placeholder="+62"
                                            value={values.phoneNumber}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.phoneNumber}
                                            errors={errors.phoneNumber}
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
                                        <button type="submit" className="px-6 py-3 text-sm text-white rounded-2xl bg-bnr-primary" disabled={isSubmitting}>Daftar</button>
                                    </form>
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