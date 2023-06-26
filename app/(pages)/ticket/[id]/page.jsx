"use client"

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import BreadCrumb from "./common/BreadCrumb";
import Maskapai from "@/assets/logo-maskapai.svg";
import Image from "next/image";
import { getModal, getMoneyFormat, getToken } from "@/utils/helper";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

async function getTicketId(id) {
    const res = await fetch(`https://c2-backend.up.railway.app/api/v1/tickets/${id}`)
    return res.json()
}

async function postCheckoutTicket(token, data) {
    const res = await fetch(`https://c2-backend.up.railway.app/api/v1/checkout`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

const CheckoutPage = () => {
    const token = getToken();
    const [data, setData] = useState("");
    const [value, setValue] = useState()
    const id = useParams().id
    const fetchTicketDetail = async () => {
        const data = await getTicketId(id);
        setData(data)
    }
    const passengers = useSelector((state) => state.modal.modalInput);
    const index = passengers?.length - 1
    const resultPassangers = passengers[index];
    const length = resultPassangers?.total;
    const dataPassangers = Array.from({ length });

    const ticketData = {
        ticketsId: id,
        passengers: dataPassangers.map((passenger, index) => ({
            name: value?.[`fullName${index}`],
            email: value?.[`email${index}`],
            phone: value?.[`phoneNumber${index}`],
            familyName: value?.[`familyName${index}`],
            title: value?.[`title${index}`],
        })),
        total_passenger: resultPassangers?.total,
    }

    console.log("ticketttttt", ticketData);

    console.log("====>", resultPassangers);

    const handleSubmit = (e) => {
        e.preventDefault()
        postCheckoutTicket(token, ticketData)
        console.log(value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    useEffect(() => {
        fetchTicketDetail()
    }, [id])

    return (
        <>
            <div className="h-full max-w-full">
                <Navbar />
                <section>
                    <div className="flex items-center w-full h-32 px-5 bg-white shadow-md md:px-72">
                        <BreadCrumb />
                    </div>
                </section>
                <main className="flex flex-col w-full gap-5 px-5 py-3 md:flex-row md:px-80">
                    <section className="max-w-full space-y-10 md:w-1/2">
                        <div className="w-full px-5 border border-black rounded-md">
                            <h1 className="py-5 text-xl font-bold">Isi data pemesan </h1>
                            <div className="bg-[#3C3C3C] text-base text-white py-2 px-4 rounded-t-xl">
                                Data Diri Pemesan
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="font-bold text-bnr-primary"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id=""
                                        className="w-full h-10 border rounded border-bnr-secondary"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="font-bold text-bnr-primary"
                                    >
                                        Nama Keluarga
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="w-full h-10 border rounded border-bnr-secondary"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="font-bold text-bnr-primary"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="w-full h-10 border rounded border-bnr-secondary"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="familyName"
                                        className="font-bold text-bnr-primary"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="familyName"
                                        id=""
                                        className="w-full h-10 border rounded border-bnr-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="w-full px-5 border border-black rounded-md">
                                <h1 className="py-5 text-xl font-bold">Isi data pemesan </h1>
                                {
                                    dataPassangers?.map((passanger, index) => (
                                        <>
                                            <div className="bg-[#3C3C3C] text-base text-white py-2 px-4 rounded-t-xl">
                                                Data Diri Pemesan
                                            </div>
                                            <div className="p-4 space-y-3">
                                                <div>
                                                    <label
                                                        htmlFor={`fullName${index}`}
                                                        className="font-bold text-bnr-primary"
                                                    >
                                                        Nama Lengkap
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`fullName${index}`}
                                                        id=""
                                                        className="w-full h-10 border rounded border-bnr-secondary"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor={`title${index}`}
                                                        className="font-bold text-bnr-primary"
                                                    >
                                                        Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`title${index}`}
                                                        id=""
                                                        className="w-full h-10 border rounded border-bnr-secondary"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor={`familyName${index}`}
                                                        className="font-bold text-bnr-primary"
                                                    >
                                                        Nama Keluarga
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`familyName${index}`}
                                                        id=""
                                                        className="w-full h-10 border rounded border-bnr-secondary"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor={`phoneNumber`}
                                                        className="font-bold text-bnr-primary"
                                                    >
                                                        Nomor Telepon
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`phoneNumber${index}`}
                                                        id=""
                                                        className="w-full h-10 border rounded border-bnr-secondary"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor={`email`}
                                                        className="font-bold text-bnr-primary"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`email${index}`}
                                                        id=""
                                                        className="w-full h-10 border rounded border-bnr-secondary"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                            <button type="submit">Simpan</button>
                        </form>
                    </section>
                    <section className="h-full max-w-full md:w-1/2">
                        <div className="w-full min-h-full">
                            <div className="border-b border-bnr-secondary">
                                <h1 className="text-xl font-bold">Detail Penerbangan</h1>
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-base font-bold">{data?.data?.dateTakeoff}</p>
                                    <p className="text-xs font-bold text-bnr-primary">
                                        Keberangkatan
                                    </p>
                                </div>
                                <p className="text-sm">3 Maret 2023</p>
                                <p className="text-sm">{data?.data?.airport_from}</p>
                            </div>
                            <div className="inline-flex items-center w-full gap-2 py-2 border-b border-bnr-secondary">
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
                            <div className="py-2 border-b border-bnr-secondary">
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-base font-bold">{data?.data?.dateLanding}</p>
                                    <p className="text-xs font-bold text-bnr-primary">
                                        Kedatangan
                                    </p>
                                </div>
                                <p className="text-sm">3 Maret 2023</p>
                                <p className="text-sm">{data?.data?.airlines_to}</p>
                            </div>
                            <div className="py-2 border-b border-bnr-secondary">
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