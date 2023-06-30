'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import NavbarLogin from "@/components/NavbarLogin";
import RiwayatKosong from "@/components/Riwayat/RiwayatKosong";
import Notifikasi from "@/components/Riwayat/Notifikasi";
import User from "@/components/Riwayat/User";
import ModalDate from "@/components/Riwayat/ModalDate";
import ModalSearch from "@/components/Riwayat/ModalSearch";
import RiwayatBulan from "@/components/Riwayat/RiwayatBulan"
import DetailPemesanan from "@/components/Riwayat/DetailPemesanan"


import BackArrow from "@/assets/fi_arrow.svg";
import IconFilter from "@/assets/icon-filter.svg";
import IconSearch from "@/assets/icon-search.svg";
import { getToken } from '@/utils/helper';


const getTransaction = async (token) => {
  try {
    const res = await fetch("https://c2-backend.up.railway.app/api/v1/transaction", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const HistoryPage = () => {
  const token = getToken();
  const [data, setData] = useState()
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const fetchTransaction = async () => {
    const data = await getTransaction(token);
    setData(data)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <>
      <NavbarLogin />
      <div className="container mx-auto max-w-[968px]">

        <div className="ticket-section pb-4 border-b-2 drop-shadow-md mx-2">
          <div className="text-heading">
            <h1 className="text-xl font-bold leading-8 mt-12">Riwayat Pemesanan</h1>
          </div>

          <div className="search flex flex-col sm:flex-row gap-4 mt-4">

            <div className="sm:w-[800px] flex bg-[#A06ECE] h-[50px] rounded-xl items-center text-white font-medium text-base leading-6 gap-1">
              <a href="#"><Image
                className="ml-3 mr-5"
                src={BackArrow}
                width={24}
                height={24}
                alt=""
              /></a>
              <span>Beranda</span>
            </div>


            <div className="flex justify-between gap-x-4">
              <div className="items-center my-auto">
                <button className="flex items-center rounded-2xl w-[90px] font-normal text-base leading-6 border-2 border-[#A06ECE]" onClick={() => setShowModal(true)}>
                  <div className="flex h-8 mx-auto ">
                    <Image
                      className="items-center mr-2.5"
                      src={IconFilter}
                      width={17}
                      height={17}
                      alt=""
                    />
                    <span className="self-center" >Filter</span>
                  </div>
                </button>
              </div>

              <div className="my-auto" >
                <Image
                  className=""
                  src={IconSearch}
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </div>


          </div>


        </div>

        {showModal && <ModalSearch showModal={showModal} handleCloseModal={handleCloseModal} />}


        <div className="main flex flex-col sm:flex-row mx-auto">



          <div className="section-pemesanan w-full sm:w-[518px] mx-auto">
            {data?.data?.map((item, index) => (
              <RiwayatBulan key={index} />
            ))}

          </div>


          <div className="section-detail w-full sm:w-[370px] mt-7 mx-auto">

            <DetailPemesanan />

          </div>



        </div>




      </div>
    </>
  );
};

export default HistoryPage;
