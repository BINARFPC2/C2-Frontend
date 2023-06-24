import Navbar from "@/components/Navbar";
import React from "react";
import BreadCrumb from "./common/BreadCrumb";
import Maskapai from "@/assets/logo-maskapai.svg";
import Image from "next/image";
import { getMoneyFormat } from "@/utils/helper";
// import { useSelector } from "react-redux";

async function getTicketId(id) {
    const res = await fetch(`https://c2-backend.up.railway.app/api/v1/tickets/${id}`)
    return res.json()
}

const CheckoutPage = async ({ params: { id } }) => {
    const data = await getTicketId(id);
    return (
        <>
            <div className="max-w-full h-full">
                <Navbar />
                <section>
                    <div className="w-full h-32 flex items-center bg-white shadow-md px-5 md:px-72">
                        <BreadCrumb />
                    </div>
                </section>
                <main className="flex flex-col md:flex-row w-full px-5 md:px-80 gap-5 py-3">
                    <section className="max-w-full md:w-1/2 space-y-10">
                        <div className="w-full border border-black px-5 rounded-md">
                            <h1 className="text-xl font-bold py-5">Isi data pemesan </h1>
                            <div className="bg-[#3C3C3C] text-base text-white py-2 px-4 rounded-t-xl">
                                Data Diri Pemesan
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nama Keluarga
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full border border-black px-5 rounded-md">
                            <h1 className="text-xl font-bold py-5">Isi data pemesan </h1>
                            <div className="bg-[#3C3C3C] text-base text-white py-2 px-4 rounded-t-xl">
                                Data Diri Pemesan
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nama Keluarga
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full border border-black px-5 rounded-md">
                            <h1 className="text-xl font-bold py-5">Isi data pemesan </h1>
                            <div className="bg-[#3C3C3C] text-base text-white py-2 px-4 rounded-t-xl">
                                Data Diri Pemesan
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nama Keluarga
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="text-bnr-primary font-bold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="border border-bnr-secondary rounded w-full h-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-full h-full md:w-1/2">
                        <div className="w-full min-h-full">
                            <div className="border-b border-bnr-secondary">
                                <h1 className="text-xl font-bold">Detail Penerbangan</h1>
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-base font-bold">{data?.data?.dateTakeoff}</p>
                                    <p className="text-bnr-primary text-xs font-bold">
                                        Keberangkatan
                                    </p>
                                </div>
                                <p className="text-sm">3 Maret 2023</p>
                                <p className="text-sm">{data?.data?.airport_from}</p>
                            </div>
                            <div className="inline-flex gap-2 items-center border-b border-bnr-secondary w-full py-2">
                                <Image src={Maskapai} alt="maskapai" />
                                <div className="text-sm">
                                    <h5 className="font-bold">{data?.data?.airlines}</h5>
                                    {/* <h5 className="font-bold">JT - 203</h5> */}
                                    <div className="mt-5">
                                        <h5 className="font-bold">Informasi</h5>
                                        <p className="w-36">{data?.data?.information}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-bnr-secondary py-2">
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-base font-bold">{data?.data?.dateLanding}</p>
                                    <p className="text-bnr-primary text-xs font-bold">
                                        Kedatangan
                                    </p>
                                </div>
                                <p className="text-sm">3 Maret 2023</p>
                                <p className="text-sm">{data?.data?.airlines_to}</p>
                            </div>
                            <div className="border-b border-bnr-secondary py-2">
                                <h1 className="text-base font-bold">Rincian Harga</h1>
                                <div className="inline-flex justify-between w-full">
                                    <p>2 Passangers</p>
                                    <p>{getMoneyFormat(data?.data?.price)}</p>
                                </div>
                                {/* <div className="inline-flex justify-between w-full">
                                    <p>1 Baby</p>
                                    <p>IDR 0</p>
                                </div>
                                <div className="inline-flex justify-between w-full">
                                    <p>Tax</p>
                                    <p>IDR 300.000</p>
                                </div> */}
                            </div>
                            <div className="py-3">
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-lg font-bold">Total</p>
                                    <p className="text-lg font-bold text-bnr-primary">
                                        IDR {getMoneyFormat(data?.data?.price)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default CheckoutPage