"use client";

import { FiX } from "react-icons/fi";
import TicketDetailCard from "../Ticket/TicketDetailCard";
import { useState } from "react";
import { useEffect } from "react";
import { getMoneyFormat } from "@/utils/helper";
import Image from "next/image";

import LogoMaskapai from "@/assets/logo-maskapai.svg";
import LongArrow from "@/assets/icon_long-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useComponentContext } from "@/app/context/store";
import { useRouter } from "next/navigation";
import { addTotal } from "@/store/auth/slice";

async function getTicketId(...flights) {
  const ticketPromises = flights.map(async (flight) => {
    const res = await fetch(
      `https://c2-backend.up.railway.app/api/v1/tickets/${flight.id}`
    );
    return res.json();
  });

  const ticketData = await Promise.all(ticketPromises);

  if (flights.length === 1 || !flights[1].id) {
    return [ticketData[0]];
  } else {
    return ticketData;
  }
}

const ModalTicket = ({ modal, closeModal, data, flightOne, flightTwo }) => {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [dataTes, setDataTes] = useState();
  const passengers = useSelector((state) => state.modal.modalInput);
  const totalPrice = useSelector((state) => state.modal.totalPrice);
  const index = passengers?.length - 1;
  const resultPassangers = passengers[index];
  const totalPassangers = resultPassangers?.total;

  const router = useRouter();
  const dispatch = useDispatch();
  const { showReturn } = useComponentContext();

  console.log("total", totalPrice);

  const fetchDataTicket = async () => {
    try {
      const data = await getTicketId(flightOne, flightTwo);
      setDataTes(data);
    } catch (error) {
      console.error("Error fetching ticket data:", error);
    }
  };

  // console.log("cekk", dataTes[0].data.price);
  useEffect(() => {
    fetchDataTicket();
  }, []);

  const handleChooseTicket = (money) => {
    dispatch(addTotal(money));
    const oneWay = [
      {
        id: flightOne.id,
      },
    ];

    const twoWays = [
      {
        id: flightOne.id,
      },
      {
        id: flightTwo.id,
      },
    ];
    if (!showReturn) {
      localStorage.setItem("booking", JSON.stringify(oneWay));
      router.push("/booking");
      return;
    }
    if (showReturn) {
      localStorage.setItem("booking", JSON.stringify(twoWays));
      router.push("/booking");
      return;
    }
  };

  const handleMoney = (t) => {
    const money = getMoneyFormat(t);
    console.log("tess money");
    dispatch(addTotal(money));
    console.log("moeny", money);
  };

  console.log("showwwww", showReturn);

  // useEffect(() => {
  //     if (flightOne.id && !flightTwo.id) {
  //         const selectedTicket = data.data.find(item => item.id === flightOne.id);
  //         setSelectedTickets([selectedTicket]);
  //     }

  //     if (flightOne.id && flightTwo.id && showReturn) {
  //         const selectedTickets = data.data.filter(item => flightOne.id === item.id || flightTwo.id === item.id);
  //         setSelectedTickets(selectedTickets);
  //     }
  // }, [data, flightOne.id, flightTwo.id, showReturn]);

  // console.log("detalll", dataTes.length);
  console.log("flightone", flightOne);
  console.log("flighttow", flightTwo);

  // const takeoffTime = detailFlight?.dateTakeoff;
  // const landingTime = detailFlight?.dateLanding;

  // // Get current date
  // const currentDate = new Date();

  // // Extract hour and minute from the takeoff time
  // const [takeoffHour, takeoffMinute] = takeoffTime.split(":").map(Number);

  // // Create new date object for takeoff time
  // const takeoffDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), takeoffHour, takeoffMinute, 0);

  // // Format the takeoff date string as "YYYY-MM-DDTHH:MM:SS"
  // const formattedTakeoffDateTime = takeoffDate.toISOString();

  // // Extract hour and minute from the landing time
  // const [landingHour, landingMinute] = landingTime.split(":").map(Number);

  // // Create new date object for landing time
  // const landingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), landingHour, landingMinute, 0);

  // // Format the landing date string as "YYYY-MM-DDTHH:MM:SS"
  // const formattedLandingDateTime = landingDate.toISOString();

  // const takingOffConvert = new Date(formattedTakeoffDateTime);
  // const landingConvert = new Date(formattedLandingDateTime);

  // const durationInMilliseconds = landingConvert - takingOffConvert;
  // const durationInMinutes = Math.floor(durationInMilliseconds / 60000);
  // const hours = Math.floor(durationInMinutes / 60);
  // const minutes = durationInMinutes % 60;

  // const duration = `${hours} jam ${minutes} menit`;

  // console.log(duration);
  return (
    <div className="relative z-50">
      <div
        className={`fixed top-0 right-0 h-screen bottom-0 bg-black bg-opacity-50 transition-all ease-in-out duration-700 transform w-full ${modal ? "translate-x-0" : "md:hidden translate-y-full"
          }`}
      >
        <div className="w-full h-full px-4 py-4 transition-all duration-500 bg-black bg-opacity-50 rounded-lg"></div>
        <div
          className={`fixed md:h-screen md:w-1/2 ${modal ? "bottom-0" : "right-0"
            } right-0 w-full  p-8 transition-all duration-500 ease-out bg-white rounded-tl-3xl rounded-bl-3xl transform ${modal ? "translate-y-0" : "translate-x-full md:translate-y-full"
            }`}
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-md cursor-pointer text-bnr-primary"
            onClick={closeModal}
          >
            <FiX className="text-3xl" />
          </div>
          <div>
            {dataTes?.map((detail, index) => (
              <div
                key={index}
                className="flex justify-center w-full pt-5 space-y-5"
              >
                <div className="w-full h-[127px] bg-white drop-shadow-md border border-bnr-secondary rounded-lg p-5 mx-auto space-y-2">
                  <div className="flex items-center">
                    <Image
                      className="items-center mr-2"
                      src={LogoMaskapai}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <span className="text-xs font-medium leading-5 text-center">
                      {detail.data?.type_seat}
                    </span>
                    <span className="mx-1 text-center">-</span>
                    <span className="text-xs font-medium leading-5 text-center">
                      {detail?.data.airlines}
                    </span>
                  </div>

                  <div className="flex justify-between mx-4 my-auto">
                    <div className="my-auto w-11">
                      <div className="text-sm font-bold leading-5">
                        {detail.data?.dateTakeoff}
                      </div>
                      <div className="text-xs font-medium leading-5">
                        {detail.data?.city_from}
                      </div>
                    </div>

                    <div className="my-auto text-center w-60">
                      <div className="font-medium text-xs leading-5 text-[#8A8A8A]">
                        4h 0m
                      </div>
                      <div>
                        <Image
                          className="items-center"
                          src={LongArrow}
                          width={232}
                          height={1}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-xs leading-5 text-[#8A8A8A]">
                        Direct
                      </div>
                    </div>

                    <div className="my-auto w-11">
                      <div className="text-sm font-bold leading-5">
                        {detail.data?.dateLanding}
                      </div>
                      <div className="text-xs font-medium leading-5">
                        {detail.data?.city_to}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {dataTes?.map((item, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="w-full inline-flex justify-between items-center mt-40"
                >
                  <div>
                    <h3 className="text-base font-medium">Total</h3>
                    <h3 className="text-2xl font-semibold text-bnr-primary">
                      Rp.
                      {getMoneyFormat(
                        totalPassangers *
                        (dataTes.length > 1
                          ? item.data.price + item.data.price
                          : item.data.price)
                      )}
                    </h3>
                  </div>
                  <button
                    className="px-5 py-3 text-white rounded-lg bg-bnr-primary"
                    onClick={() =>
                      handleChooseTicket(
                        totalPassangers *
                        (dataTes.length > 1
                          ? item.data.price + item.data.price
                          : item.data.price)
                      )
                    }
                  >
                    Lanjut Booking
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalTicket;
