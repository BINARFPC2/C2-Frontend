"use client"

import Navbar from "@/components/Navbar";
import React from "react";
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
import BreadCrumb from "./common/BreadCrumb";

const PaymentPage = () => {
    return (
        <>
            <div className="h-full max-w-full">
                <Navbar />
                <section>
                    <div className="flex items-center w-full h-32 px-5 bg-white shadow-md md:px-72">
                        <BreadCrumb />
                    </div>
                </section>
                <main className="flex flex-col w-full gap-5 px-5 py-3 md:flex-row md:px-80 mt-8">
                    <section className="max-w-full space-y-10 md:w-1/2">
                        <div className="w-full px-2 rounded-md">
                            <h1 className="py-2 text-xl font-bold">Isi Data Pembayaran </h1>
                            <div className="w-full pt-2">
                                <div className="mx-auto w-full  rounded-2xl bg-white p-2">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#3C3C3C] px-4 py-2 text-left text-sm font-medium text-white focus:bg-[#7126B5] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                    <span>Gopay</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-white`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
                                                    <div className="mt-2">
                                                        <label className="text-xm leading-6 font-medium text-[#151515]" htmlFor="">Masukkan Nomor Gopay Anda</label>
                                                        <input
                                                            type="text"
                                                            placeholder="+62 "
                                                            className="w-full py-2 border-b-2 outline-none border-b-bnr-secondary"
                                                            name="cardHolder"
                                                        // onChange={handleChange}
                                                        />
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#3C3C3C] px-4 py-2 text-left text-sm font-medium text-white focus:bg-[#7126B5] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                    <span>Virtual Account</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-white`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    <div className="mt-2">
                                                        <div className="flex mb-4">
                                                            <input
                                                                type="radio"
                                                                name="cardHolder"
                                                                value="BRI"
                                                            // onChange={handleChange}
                                                            />
                                                            <label for="BRI">
                                                                <Image
                                                                    className="ml-4"
                                                                    src={LogoBRI}
                                                                    width={127}
                                                                    height={30}
                                                                    alt=""
                                                                /></label>
                                                        </div>

                                                        <div className="flex mb-4">
                                                            <input
                                                                type="radio"
                                                                name="cardHolder"
                                                                value="Mandiri"
                                                            // onChange={handleChange}
                                                            />
                                                            <label for="BRI">
                                                                <Image
                                                                    className="ml-4"
                                                                    src={LogoMandiri}
                                                                    width={127}
                                                                    height={30}
                                                                    alt=""
                                                                /></label>
                                                        </div>

                                                        <div className="flex mb-4">
                                                            <input
                                                                type="radio"
                                                                name="cardHolder"
                                                                value="BRI"
                                                            // onChange={handleChange}
                                                            />
                                                            <label for="BCA">
                                                                <Image
                                                                    className="ml-4"
                                                                    src={LogoBCA}
                                                                    width={127}
                                                                    height={30}
                                                                    alt=""
                                                                /></label>
                                                        </div>

                                                        <div className="flex mb-4">
                                                            <input
                                                                type="radio"
                                                                name="cardHolder"
                                                                value="BRI"
                                                            // onChange={handleChange}
                                                            />
                                                            <label for="BNI">
                                                                <Image
                                                                    className="ml-4"
                                                                    src={LogoBNI}
                                                                    width={127}
                                                                    height={20}
                                                                    alt=""
                                                                /></label>
                                                        </div>

                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#3C3C3C] px-4 py-2 text-left text-sm font-medium text-white focus:bg-[#7126B5] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                    <span>Credit Card</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-white`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    <div>
                                                        <Image
                                                            className=""
                                                            src={PaymentOption}
                                                            width={296}
                                                            height={20}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <label className="text-xm leading-6 font-medium text-[#151515]" htmlFor="">Card number</label>
                                                        <input
                                                            type="text"
                                                            placeholder="4480 0000 0000 0000"
                                                            className="w-full py-2 border-b-2 outline-none border-b-bnr-secondary"
                                                            name="cardNumber"
                                                        // onChange={handleChange}
                                                        />

                                                        <div className="mt-4">
                                                            <label className="text-xm leading-6 font-medium text-[#151515]" htmlFor="">Card holder name</label>
                                                            <input
                                                                type="text"
                                                                placeholder="John Doe"
                                                                className="w-full py-2 border-b-2 outline-none border-b-bnr-secondary"
                                                                name="cardHolder"
                                                            // onChange={handleChange}
                                                            />
                                                        </div>

                                                        <div className="mt-4 flex w-full">
                                                            <div className="w-1/2">
                                                                <label className="text-xm leading-6 font-medium text-[#151515]" htmlFor="">CVV</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="000"
                                                                    className="w-full py-2 border-b-2 outline-none border-b-bnr-secondary"
                                                                    name="cardHolder"
                                                                // onChange={handleChange}
                                                                />
                                                            </div>

                                                            <div className="w-1/2 ml-2">
                                                                <label className="text-xm leading-6 font-medium text-[#151515]" htmlFor="">Expiry date</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="07/24"
                                                                    className="w-full py-2 border-b-2 outline-none border-b-bnr-secondary"
                                                                    name="cardHolder"
                                                                // onChange={handleChange}
                                                                />
                                                            </div>

                                                        </div>

                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <button className="w-full rounded-xl text-white bg-[#7126B5] mt-4 py-2">Bayar</button>
                                </div>
                            </div>

                        </div>

                    </section>
                    <section className="h-full max-w-full md:w-1/2">
                        <div className="w-full min-h-full">
                            <div className="border-b border-bnr-secondary">
                                <h1 className="text-lg font-bold">Booking Code : <span className="text-[#7126B5]">6723y2GHK</span> </h1>
                                <div className="inline-flex justify-between w-full mt-4">
                                    <p className="text-base font-bold">07.00</p>
                                    <p className="text-xs font-bold text-bnr-primary">
                                        Keberangkatan
                                    </p>
                                </div>
                                <p className="text-sm">3 Maret 2023</p>
                                <p className="text-sm">Soekarno Hatta - Terminal 1A Domestik</p>
                            </div>
                            <div className="inline-flex items-center w-full gap-2 py-2 border-b border-bnr-secondary">
                                <Image src={Maskapai} alt="maskapai" />
                                <div className="text-sm">
                                    <h5 className="font-bold">Jet Air - Economy</h5>
                                    <h5 className="font-bold">JT - 203</h5>
                                    <div className="mt-5">
                                        <h5 className="font-bold">Informasi</h5>
                                        <p>Baggage 20 kg</p>
                                        <p>Cabin baggage 7 kg</p>
                                        <p>In Flight Entertainment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 border-b border-bnr-secondary">
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-base font-bold">11.00</p>
                                    <p className="text-xs font-bold text-bnr-primary">
                                        Kedatangan
                                    </p>
                                </div>
                                <p className="text-sm">3 Maret 2023</p>
                                <p className="text-sm">Melbourne International Airport</p>
                            </div>
                            <div className="py-2 border-b border-bnr-secondary">
                                <h1 className="text-base font-bold">Rincian Harga</h1>
                                <div className="inline-flex justify-between w-full">
                                    <p>2 Adults</p>
                                    <p>IDR 9.550.000</p>
                                </div>
                                <div className="inline-flex justify-between w-full">
                                    <p>1 Baby</p>
                                    <p>IDR 0</p>
                                </div>
                                <div className="inline-flex justify-between w-full">
                                    <p>Tax</p>
                                    <p>IDR 300.000</p>
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="inline-flex justify-between w-full">
                                    <p className="text-lg font-bold">Total</p>
                                    <p className="text-lg font-bold text-bnr-primary">
                                        IDR 9.850.000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default PaymentPage;
