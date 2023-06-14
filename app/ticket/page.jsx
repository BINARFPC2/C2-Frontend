"use client";

import React, { useState } from "react";
import Image from "next/image";
import FilterButton from "@/components/FilterButton";
import FilterCard from "@/components/FilterCard";

import BackArrow from "@/assets/fi_arrow.svg";
import Navbar from "@/components/Navbar";
import TicketFilter from "@/components/Ticket/TicketFilter";
import TicketDetail from "@/components/Ticket/TicketDetail";
import TicketCard from "@/components/Ticket/TicketCard";

const TicketPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-5xl">
        <div className="ticket-section">
          <div className="text-heading">
            <h1 className="text-xl font-bold leading-8 mt-20">
              Pilih Penerbangan
            </h1>
          </div>

          <div className="search flex gap-4 mt-4">
            <div className="w-[800px] flex bg-[#A06ECE] h-[50px] rounded-xl items-center text-white font-medium text-base leading-6 gap-1">
              <a href="#">
                <Image
                  className="ml-3 mr-5"
                  src={BackArrow}
                  width={24}
                  height={24}
                  alt=""
                />
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
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
                Hari
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                DD/MM/YYYY
              </div>
            </button>

            <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

            <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
                Hari
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                DD/MM/YYYY
              </div>
            </button>

            <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

            <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
                Hari
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                DD/MM/YYYY
              </div>
            </button>

            <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

            <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
                Hari
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                DD/MM/YYYY
              </div>
            </button>

            <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

            <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
                Hari
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                DD/MM/YYYY
              </div>
            </button>

            <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

            <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
                Hari
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A] hover:text-white active:text-white">
                DD/MM/YYYY
              </div>
            </button>

            <div className="garis w-[1px] h-6 bg-[#D0D0D0] self-center"></div>

            <button className=" w-28 h-[55px] rounded-lg text-center hover:bg-[#A06ECE] active:bg-[#7126B5] hover:text-white active:text-white px-2 py-2 self-center">
              <div className="font-bold text-sm leading-5 hover:text-white active:text-white">
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

            <div className="filter-result flex">
              <div className="filter-menu w-1/3">
                <FilterCard />
              </div>

              <div className="search-result w-3/3 mt-8 justify-center w-full">
                <TicketFilter />
                <TicketDetail />
                <TicketCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
