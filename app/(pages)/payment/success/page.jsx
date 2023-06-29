"use client"

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Maskapai from "@/assets/logo-maskapai.svg";
import Image from "next/image";

import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import PaymentOption from "@/assets/payment-options.svg";
import LogoBRI from "@/assets/Logo_BRI.svg";
import LogoMandiri from "@/assets/Logo_Mandiri.svg";
import LogoBCA from "@/assets/Logo_BCA.svg";
import LogoBNI from "@/assets/Logo_BNI.svg";
import { getBookingId, getToken, getMoneyFormat, getDateFormat } from "@/utils/helper";
import { useSelector } from "react-redux";
import Success from "@/assets/images/success.png"
import BreadCrumb from "./common/BreadCrumb";
import Link from "next/link";

const SuccessPage = () => {
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
                        <p className="text-bnr-primary">Selamat!</p>
                        <h3>Transaksi Pembayaran Tiket sukses!</h3>
                        <Link href={"/"}>
                            <button className="bg-bnr-primary px-10 text-white rounded-lg py-2 mt-5">Cari penerbangan lain</button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SuccessPage;
