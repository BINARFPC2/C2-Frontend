"use client"

import Image from "next/image";
import From from "@/assets/images/from.svg";
import To from "@/assets/images/to.svg";
import ToTwo from "@/assets/images/toTwo.svg";
import DateSvg from "@/assets/images/date.svg";
import { FiRepeat } from "react-icons/fi";
import Modal from "../Modal/Modal";
import InputPassangers from "../Beranda/InputPassangers";
import InputSeat from "../Beranda/InputSeat";
import InputKota from "../Beranda/InputKota";
// import InputDate from "./InputDate";
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

  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");

  const handleChangeFrom = (event) => {
    setCityFrom(event.target.value);
  };


  const handleSwap = () => {
    const tempValue = cityFrom;
    setCityFrom(cityTo);
    setCityTo(tempValue);
  };



  const handleChangeTo = (e) => {
    setCityTo(e.target.value);
  };


  return (
    <>



      <div className="flex items-center justify-center md:w-full h-1/2 select-none mx-2">
        <form>
          <div className="md:w-[968px] h-full p-6 bg-white shadow-xl border-2 rounded-tl-xl rounded-tr-xl ">
            <h1 className="font-bold text-xl leading-7">
              Pilih Jadwal Penerbangan special di <span className="text-[#7126B5]">TiketGo!</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between py-2 w-full gap-2">
              <div className="from flex justify-between w-full">
                <div className="mr-2 flex w-full">
                  <Image src={From} alt="fromsvg" />
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full ml-4 py-3 border-b-2 outline-none border-b-bnr-secondary"
                    name="city_from"
                    value={cityFrom}
                    onChange={handleChangeFrom}
                  />
                  {/*<Modal name={"inputKota"}/>*/}
                </div>

                <div className="btn-swap relative inline-flex items-center cursor-pointer" onClick={handleSwap}>
                  <div className="p-2 text-white bg-black rounded-xl my-2 cursor-pointer">
                    <FiRepeat />
                  </div>
                </div>
              </div>

              <div className="to flex w-full">
                <Image src={To} alt="fromsvg" />
                <input
                  type="text"
                  placeholder="To"
                  className="w-full ml-9 py-3 border-b-2 outline-none border-b-bnr-secondary"
                  name="city_to"
                  value={cityTo}
                  onChange={handleChangeTo}
                />
                {/*<Modal name={"inputKota"} />*/}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-2 w-full gap-2">
              <div className="date flex justify-between sm:w-full">
                <Image src={DateSvg} className="mr-2 mt-6" alt="fromsvg" />
                <div className="departure ml-2">
                  <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="">Departure</label>
                  <input
                    type="date"
                    placeholder="Input Tanggal"
                    className="sm:w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                    name="dateDeparture"
                  />
                </div>

                <div className="return ml-4">
                  <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="">Return</label>
                  <input
                    type="date"
                    placeholder="To"
                    className="sm:w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                    name="dateReturn"
                  />
                </div>

                <div className="btn-slider">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bnr-primary"></div>
                  </label>
                </div>
              </div>

              <div className="penumpang flex w-full items-center">
                <Image src={ToTwo} className="mr-2 mt-6" alt="fromsvg" />
                <div className="passengers ml-6">
                  <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="tes">Passengers</label>
                  {/*<input
                      type="number"
                      placeholder="To"
                      className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                      name="passengers"
                    />*/}
                  <Modal name={"inputPassengers"} />
                </div>
                <div className="seat-class ml-4">
                  <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="tes">Seat Class</label>
                  {/*<input
                      type="text"
                      placeholder="To"
                      className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                      name="type_seat"
                    />*/}
                  <Modal name={"inputSeats"} />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full py-3 font-semibold text-white bg-bnr-primary rounded-bl-xl rounded-br-xl">
            Cari Penerbangan
          </button>
        </form>
      </div>






    </>
  );
};

export default FormTicket;
