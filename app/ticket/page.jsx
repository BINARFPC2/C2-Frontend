"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import FilterButton from "@/components/FilterButton";
import FilterCard from "@/components/FilterCard";

import BackArrow from "@/assets/fi_arrow.svg";
import Navbar from "@/components/Navbar";
import TicketFilter from "@/components/Ticket/TicketFilter";
import TicketDetail from "@/components/Ticket/TicketDetail";
import TicketCard from "@/components/Ticket/TicketCard";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import NoTicket from "@/assets/images/noTicketImage.png"
import Loading from "@/assets/images/loading.png"

const getTicketData = async (dateDeparture, city_from, city_to, type_seat) => {
  try {
    const response = await fetch(`https://c2-backend.up.railway.app/api/v1/tickets?dateDeparture=${dateDeparture}&city_from=${city_from}&type_seat=${type_seat}&city_to=${city_to}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

const TicketPage = () => {
  const [value, setValue] = useState()
  const [loading, setLoading] = useState(false)
  const searchFlight = useSearchParams();
  const dateDeparture = searchFlight.get("dateDeparture");
  const city_from = searchFlight.get("city_from");
  const city_to = searchFlight.get("city_to");
  const type_seat = searchFlight.get("type_seat")
  const fetchData = async () => {
    if (dateDeparture && city_from && city_to && type_seat) {
      const data = await getTicketData(dateDeparture, city_from, city_to, type_seat);
      setValue(data)
      return
    }
  }

  console.log("data", value);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
    fetchData();
    setLoading(false)
  }, [])
  console.log("loading", loading);
  console.log(value);
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl">
        <div className="ticket-section">
          <div className="text-heading">
            <h1 className="mt-20 text-xl font-bold leading-8">
              Pilih Penerbangan
            </h1>
          </div>

          <div className="flex gap-4 mt-4 search">


            <div className="flex gap-4 mt-4 search">
              <div className="w-[800px] flex bg-[#A06ECE] h-[50px] rounded-xl items-center text-white font-medium text-base leading-6 gap-1">
                <a href="#">
                  <Image
                    className="ml-3 mr-5"
                    src={BackArrow}
                    width={24}
                    height={24}
                    alt="" />
                </a>

                <span>JKT</span>
                <span>&gt;</span>
                <span>MLB</span>
                <span>-</span>
                <span>Jumlah Penumpang</span>
                <span>-</span>
                <span>Kelas Pesawat</span>
              </div>
              <div className="button-search">
                <a href="#">
                  {" "}
                  <button className="w-[220px] bg-[#73CA5C] hover:bg-[#67b552] h-[50px] rounded-xl text-white text-base font-bold leading-8">
                    Ubah Pencarian
                  </button>{" "}
                </a>
              </div>
            </div>
            <div className="mt-3.5 h-[96px] flex justify-between border-b-2 border-b-[#D0D0D0] content-center self-center my-auto pb-4">
            </div>
          </div>

          <div className="mt-3.5 h-[96px] flex justify-between border-b-2 border-b-[#D0D0D0] content-center self-center my-auto pb-4">
          </div >

          <div className="ticket-result">
            {/*<TicketHabis/>*/}

            <div className="filter-section">
              <FilterButton />

              <div className="flex filter-result">
                <div className="w-1/3 filter-menu">
                  <FilterCard />
                </div>

                <div className="justify-center w-full mt-8 search-result w-3/3">
                  <TicketFilter />
                  {loading ? (
                    <>
                      {value?.status !== "Error" ? <TicketCard data={value} /> :
                        <div className="flex flex-col justify-center items-center">
                          <Image
                            width={300}
                            height={300}
                            src={NoTicket}
                            alt="sd" />
                          <div className="text-center pt-10">
                            <p>Maaf, Tiket Terjual Habis</p>
                            <p className="text-bnr-primary">Coba cari perjalanan lainnya!</p>
                          </div>
                        </div>
                      }
                    </>
                  ) :
                    <div className="animate-pulse transition-all ease-in">
                      <Image src={Loading} alt="loading" />
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketPage;
