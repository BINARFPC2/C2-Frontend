"use client"

import Navbar from "@/components/Navbar";
import BreadCrumb from "../common/Breadcumb";
import Image from "next/image";
import Link from "next/link";
import Success from "@/assets/images/success.png"

const SuccessSection = () => {
    return (
        <>
            <div className="h-full max-w-full">
                <Navbar />
                <section>
                    <div className="flex items-center w-full h-32 px-5 bg-white shadow-md md:px-72">
                        <BreadCrumb />
                    </div>
                </section>
                <section className="flex flex-col justify-center space-y-10 items-center mt-20">
                    <Image src={Success} alt="succes" />
                    <div className="text-center">
                        <p className=" font-medium text-bnr-primary">Selamat!</p>
                        <h3 className="font-medium">Transaksi Pembayaran Tiket sukses!</h3>

                        <div>
                            <Link href={"payment/cetak"}>
                                <button className="bg-bnr-primary w-full text-white rounded-lg py-2 mt-5">Cetak Tiket</button>
                            </Link>
                        </div>

                        <div>
                            <Link href={"/"}>
                                <button className="bg-[#D0B7E6] w-full text-white rounded-lg py-2 mt-2">Cari penerbangan lain</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SuccessSection;
