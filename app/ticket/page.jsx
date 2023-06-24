"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import FilterButton from "@/components/FilterButton";
import FilterCard from "@/components/FilterCard";

import BackArrow from "@/assets/fi_arrow.svg";
import Navbar from "@/components/Navbar";
import TicketFilter from "@/components/Ticket/TicketFilter";
import TicketDetail from "@/components/Ticket/TicketDetail";
// import TicketCard from "@/components/Ticket/TicketCard";
// import TicketHabis from "@/components/Ticket/TicketHabis";
// import TicketNotFound from "@/components/Ticket/TicketNotFound";
// import TicketLoading from "@/components/Ticket/TicketLoading";


import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import NoTicket from "@/assets/images/noTicketImage.png"
import Loading from "@/assets/images/loading.png"

import Draggable from 'react-draggable';
import TicketCard from "@/components/Ticket/TicketCard";

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

  // const {
  //   city_from,
  //   city_to,
  //   dateDeparture,
  //   dateReturn,
  //   type_seat,
  //   total_passenger,
  // } = useSelector((state) => state.search.searchFlight)

  // console.log("dateeeselector", dateDeparture);
  // console.log("dateeeselector", city_from);
  const valueModal = useSelector((state) => state.modal)

  console.log("value modal", valueModal);
  const searchFlight = useSearchParams();
  const dateDeparture = searchFlight.get("dateDeparture");
  const city_from = searchFlight.get("city_from");
  const city_to = searchFlight.get("city_to");
  const type_seat = searchFlight.get("type_seat")
  const fetchData = async () => {
    const data = await getTicketData(dateDeparture, city_from, city_to, type_seat);
    setValue(data)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
    fetchData();
    setLoading(false)
  }, [])
  console.log(value);

  const dateData = [
    { day: 'Senin', date: '27/08/2023' },
    { day: 'Selasa', date: '27/08/2023' },
    { day: 'Rabu', date: '27/08/2023' },
    { day: 'Kamis', date: '27/08/2023' },
    { day: 'Jumat', date: '27/08/2023' },
    { day: 'Sabtu', date: '27/08/2023' },
    { day: 'Minggu', date: '27/08/2023' },
  ];

  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [maxDragX, setMaxDragX] = useState(0);

  useEffect(() => {
    const carousel = document.getElementById('carousel');
    const content = document.getElementById('carousel-content');

    const carouselWidth = carousel.offsetWidth;
    setContainerWidth(carouselWidth);

    const contentWidth = content.offsetWidth;
    setContentWidth(contentWidth);

    const maxDragX = contentWidth - carouselWidth;
    setMaxDragX(maxDragX);
  }, []);

  return (
    <>
      <Navbar />
      <div className="md:mx-36 max-w-7xl">
        <div className="ticket-section mx-2">
          <div className="text-heading">
            <h1 className="mt-10 text-xl font-bold leading-8">
              Pilih Penerbangan
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4 search">
            <div className="md:w-[800px] flex bg-[#A06ECE] h-[50px] rounded-xl items-center text-white font-medium leading-6 gap-1">
              <a href="#">
                <Image
                  className="ml-3 md:mr-5"
                  src={BackArrow}
                  width={24}
                  height={24}
                  alt="" />
              </a>

              <div className="flex gap-1 w-full">
                <div className="text-sm md:text-base">JKT</div>
                <div className="text-sm md:text-base">&gt;</div>
                <div className="text-sm md:text-base">MLB</div>
                <div className="text-sm md:text-base">-</div>
                <div className="text-sm md:text-base"><span className="text-sm md:text-base">2</span> Penumpang</div>
                <div className="text-sm md:text-base">-</div>
                <div className="text-sm md:text-base">Premium Economy</div>
              </div>

            </div>
            <div className="hidden button-search md:block">
              <a href="#">
                {" "}
                <button className="w-[220px] bg-[#73CA5C] hover:bg-[#67b552] h-[50px] rounded-xl text-white text-base font-bold leading-8">
                  Ubah Pencarian
                </button>{" "}
              </a>
            </div>
          </div>


          <div id="carousel" className="overflow-x-hidden mt-3.5 h-[96px] flex justify-between border-b-2 border-b-[#D0D0D0] content-center self-center my-auto pb-4">
            <Draggable
              axis="x"
              bounds={{ left: -maxDragX, right: 0 }}
            >
              <div id="carousel-content" className="flex md:justify-between md:w-full">
                {dateData.map((button, index) => (
                  <React.Fragment key={index}>
                    <button className="w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                      <div className="text-sm font-bold leading-5">
                        {button.day}
                      </div>
                      <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                        {button.date}
                      </div>
                    </button>
                    {index !== dateData.length - 1 && (
                      <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Draggable>
          </div>

        </div>
        <div className="ticket-result">
          {/*<TicketHabis/>*/}

          {/*isi Loading, TicketHabis, TicketNotFound*/}



          <div className="flex filter-result mx-auto">
            <div className="hidden w-full sm:w-1/3 md:block mx-auto">
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
    </>
  )
}

export default TicketPage;
