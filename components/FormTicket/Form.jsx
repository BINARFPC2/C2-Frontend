"use client"

import Image from "next/image";
import From from "@/assets/images/from.svg";
import To from "@/assets/images/to.svg";
import ToTwo from "@/assets/images/toTwo.svg";
import DateSvg from "@/assets/images/date.svg";
import { FiRepeat } from "react-icons/fi";
import Modal from "../Modal/Modal";
import InputPassangers from "./InputPassangers";
import InputSeat from "./InputSeat";
import InputDate from "./InputDate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addSearchFlight } from "@/store/auth/slice";

const FormTicket = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [values, setValues] = useState(null);
  const pathname = usePathname("/ticket");
  const query = useSearchParams()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(addSearchFlight({
      city_from: values.city_from,
      city_to: values.city_to,
      dateDeparture: values.dateDeparture,
      dateReturn: values.dateReturn,
      type_seat: values.type_seat,
      total_passenger: values.passengers
    }))
    // getTicketData(values)
    // router.refresh()
    router.push(`/ticket?dateDeparture=${values.dateDeparture}&city_from=${values.city_from}&type_seat=${values.type_seat}&city_to=${values.city_to}`)
    // const { city_from, city_to, departure_date, return_date, passengers, seat_class } = values;

    // // Update the query object with the new values
    // const updatedQuery = {
    //   ...query,
    //   from: city_from,
    //   to: city_to,
    //   departure: departure_date,
    //   return: return_date,
    //   passengers: passengers,
    //   seat: seat_class
    // };

    // // Redirect to the "/ticket" page with the updated query parameters
    // router.push({
    //   pathname: pathname,
    //   query: updatedQuery
    // });
    console.log(values);
  };
  // const getTicketData = async (values) => {
  //   // console.log("datedepartureee", dateDeparture);
  //   try {
  //     const response = await fetch(`https://c2-backend.up.railway.app/api/v1/tickets?city_from=${values.city_from}&city_to=${values.city_to}`);
  //     if (!response.ok) {
  //       throw new Error('Error fetching ticket data');
  //     }
  //     const data = await response.json();

  //     for (const ticket of data.data) {
  //       const updatedTicket = {
  //         dateDeparture: values.dateDeparture,
  //         dateReturn: values.dateReturn,
  //         total_passenger: values.total_passenger,
  //       };
  //       const ticketId = ticket.id;
  //       await updateTicketDate(ticketId, updatedTicket);
  //     }
  //     return data;
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     // Handle the error or throw it further if needed
  //     throw error;
  //   }
  // }

  // const updateTicketDate = (ticketId, updatedTicket) => {
  //   const updateUrl = `https://c2-backend.up.railway.app/api/v1/tickets/${ticketId}`;

  //   fetch(updateUrl, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(updatedTicket),
  //   })
  //     .then(function (response) {
  //       console.log("Tanggal tiket berhasil diperbarui:", response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Gagal memperbarui tanggal tiket:", error);
  //     });
  // };

  return (
    <div className="flex items-center justify-center max-w-full h-1/2">
      <form onSubmit={handleSearch}>
        <div className="w-full h-full p-6 bg-white shadow-md rounded-tl-xl rounded-tr-xl">
          <h1>Pilih Jadwal Penerbangan special di Tiketku!</h1>
          <div className="flex items-center justify-between py-8 gap-14">
            <div className="flex items-center space-x-4 w-96">
              <Image src={From} alt="fromsvg" />
              <input
                type="text"
                placeholder="From"
                className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                name="city_from"
                onChange={handleChange}
              />
            </div>
            <div className="p-2 text-white bg-black rounded-xl">
              <FiRepeat />
            </div>
            <div className="flex items-center space-x-4 w-96">
              <Image src={To} alt="fromsvg" />
              <input
                type="text"
                placeholder="To"
                className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                name="city_to"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="relative flex items-center space-x-4 w-96">
              <Image src={DateSvg} alt="fromsvg" />
              <div>
                <label htmlFor="">Departure</label>
                {/* <InputDate name={"inputDeparture"} handleChange={handleChange} /> */}
                <input
                  type="date"
                  placeholder="To"
                  className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                  name="dateDeparture"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <div className="absolute -right-8">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bnr-primary"></div>
                  </label>
                </div>
                <label htmlFor="">Return</label>
                {/* <InputDate name={"inputReturn"} handleChange={handleChange} /> */}
                <input
                  type="date"
                  placeholder="To"
                  className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                  name="dateReturn"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 w-96">
              <Image src={ToTwo} alt="fromsvg" />
              <div>
                <label htmlFor="tes">Passengers</label>
                {/* <Modal name={"inputPassengers"} /> */}
                <input
                  type="number"
                  placeholder="To"
                  className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                  name="passengers"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tes">Seat Class</label>
                {/* <Modal name={"inputSeats"} /> */}
                <input
                  type="text"
                  placeholder="To"
                  className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                  name="type_seat"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full py-3 font-semibold text-white bg-bnr-primary rounded-bl-xl rounded-br-xl">
          Cari Penerbangan
        </button>
      </form>
    </div>
  );
};

export default FormTicket;
