import Navbar from "@/components/Navbar";
import React from "react";
import BreadCrumb from "../ticket/[id]/common/BreadCrumb";
import Maskapai from "@/assets/logo-maskapai.svg";
import Image from "next/image";

const BookingPage = () => {
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
          </section>
          <section className="h-full max-w-full md:w-1/2">
            <div className="w-full min-h-full">
              <div className="border-b border-bnr-secondary">
                <h1 className="text-xl font-bold">Detail Penerbangan</h1>
                <div className="inline-flex justify-between w-full">
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

export default BookingPage;
