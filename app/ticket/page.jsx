"use client";

import React, { useEffect, useState } from "react";
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

const getTicketData = async (dateDeparture, city_from, city_to, type_seat) => {
  console.log("datedepartureee", dateDeparture);
  try {
    const response = await fetch(`https://c2-backend.up.railway.app/api/v1/tickets?dateDeparture=${dateDeparture}&city_from=${city_from}&type_seat=${type_seat}&city_to=${city_to}`);
    if (!response.ok) {
      throw new Error('Error fetching ticket data');
    }
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
    fetchData();
  }, [])
  console.log(value);
  return (
    <>
      {loading ? "tes" :
        <><Navbar /><div className="container mx-auto max-w-7xl">
          <div className="ticket-section">
            <div className="text-heading">
              <h1 className="mt-20 text-xl font-bold leading-8">
                Pilih Penerbangan
              </h1>
            </div>

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
              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>

              <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>

              <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>

              <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>

              <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>

              <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>

              <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

              <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
                <div className="text-sm font-bold leading-5 hover:text-white active:text-white">
                  Hari
                </div>
                <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                  DD/MM/YYYY
                </div>
              </button>
            </div>
          </div>

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
                  {/* <TicketDetail /> */}
                  <TicketCard data={value} />
                </div>
              </div>
            </div>
          </div>
        </div></>
      }
    </>
  );
};

export default TicketPage;
