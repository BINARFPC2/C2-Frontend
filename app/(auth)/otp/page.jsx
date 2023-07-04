"use client";

import Image from "next/image";
import SideBackground from "@/assets/sidebackground.png";
import InputAuth from "@/components/InputAuth";
import Link from "next/link";
import { Form, Formik } from "formik";
import { LoginSchema } from "@/utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogin, asyncOtpVerify, auth } from "@/store/auth/slice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getEmail, getToken } from "@/utils/helper";
import OTPInput from "react-otp-input";

const OtpPage = () => {
    const [otp, setOtp] = useState();
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false)
    const users = useSelector((state) => state.auth);
    const router = useRouter();
    const email = getEmail();

    const handleOtp = (e) => {
        e.preventDefault()
        dispatch(asyncOtpVerify(otp));
        setSubmit(true)
    }

    useEffect(() => {
        if (submit && users.status === "Success") {
            alert("Berhasil")
            localStorage.removeItem("email")
            router.push("/login")
            return;
        }
        if (submit && users.status === "error") {
            alert("gagal")
            return;
        }
        // setSubmit(false)
    }, [users])

    console.log("user", users.status);
    return (
        <main>
            <section>
                <div className="flex h-full max-w-full">
                    <div className="flex flex-col items-center justify-center w-full h-screen px-4 md:px-32">
                        <h1 className="w-full pb-6 text-2xl font-bold text-center">Masukkan OTP</h1>
                        <p>Ketik 6 digit kode yang dikirimkan ke {email}</p>
                        <div className="flex flex-col justify-center items-center gap-6 py-6 mb-16">
                            <div className="flex flex-col justify-center items-center gap-11">
                                <form onSubmit={handleOtp} className="space-x-5">
                                    <OTPInput
                                        inputStyle="input-otp"
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderInput={(props) => <input {...props} />}
                                        containerStyle="input-otp__container"
                                    />
                                    <button type="submit">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OtpPage