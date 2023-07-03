"use client"

import Image from "next/image"
import SideBackground from "@/assets/sidebackground.png"
import InputAuth from "@/components/InputAuth"
import { Form, Formik } from "formik"
import { ResetPasswordSchema } from "@/utils/validation"
import { useSearchParams } from "next/navigation"
import { asyncResetPassword } from "@/store/auth/slice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"

const ResetPage = () => {
    const dispatch = useDispatch()
    const searchParams = useSearchParams();
    const tes = searchParams.get("token");
    const router = useRouter()
    console.log("t", tes);
    // if (searchParams.has("token")) {
    const handleReset = (values) => {
        // console.log("sadfjsfhksdf", token);
        dispatch(asyncResetPassword(values));
        router.push("/login")
    }
    // }
    return (
        <main>
            <section>
                <div className="flex h-full max-w-full">
                    <div className="hidden w-1/2 h-full md:block">
                        <Image src={SideBackground} alt="sidebackground" className="object-cover w-full h-screen" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-screen px-4 md:px-32 md:w-1/2">
                        <h1 className="w-full pb-6 text-2xl font-bold text-start">Reset Password</h1>
                        <Formik
                            initialValues={{
                                password: "",
                                confirmPassword: ""
                            }}
                            onSubmit={(values, {
                                resetForm }) => {
                                handleReset(values)
                                resetForm()
                            }}
                            validationSchema={ResetPasswordSchema}
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
                                    <Form className="flex flex-col w-full space-y-4">
                                        <InputAuth
                                            name="password"
                                            type="password"
                                            placeholder="Password Baru"
                                            value={values.password}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.password}
                                            errors={errors.password}
                                        >
                                            Masukkan Password Baru
                                        </InputAuth>
                                        <InputAuth
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="Ulangi Password"
                                            value={values.confirmPassword}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched.passwordConfirmation}
                                            errors={errors.passwordConfirmation}
                                        >
                                            Ulangi Password Baru
                                        </InputAuth>
                                        <button type="submit" className="px-6 py-3 text-sm text-white rounded-2xl bg-bnr-primary" disabled={isSubmitting}>Simpan</button>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ResetPage