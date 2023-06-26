"use client"

import Image from "next/image";
import From from "@/assets/images/from.svg";
import To from "@/assets/images/to.svg";
import ToTwo from "@/assets/images/toTwo.svg";
import DateSvg from "@/assets/images/date.svg";
import { FiRepeat } from "react-icons/fi";
import Modal from "../Modal/Modal";
// import InputDate from "./InputDate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addSearchFlight } from "@/store/auth/slice";
import { handleClientScriptLoad } from "next/script";
import ModalPassenger from "../Modal/ModalPassenger";



const FormTicket = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const valueModal = useSelector((state) => state.modal)
  const [values, setValues] = useState(null);
  const [showReturn, setShowReturn] = useState(false)
  const [isDoubleClick, setIsDoubleClick] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleToggle = () => {
    if (isDoubleClick) {
      setShowReturn(!showReturn);
      setIsDoubleClick(false);
    } else {
      setIsDoubleClick(true);
      setTimeout(() => {
        setIsDoubleClick(false);
      }, 300); // 
    }
  };

  console.log("===>show return", showReturn);

  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("passengerr", JSON.stringify(valueModal))
    router.push(`/ticket?dateDeparture=${values?.dateDeparture}&city_from=${values?.city_from}&type_seat=${values?.type_seat}&city_to=${values?.city_to}`)
    console.log(values);
  };

  return (
    <>
      <div className="relative z-30 flex justify-center form-section">
        <div className="mx-2 bg-white border-2 shadow-xl select-none main rounded-xl">
          <form onSubmit={handleSearch}>
            <div className="w-full md:w-[968px] mx-2">
              <div className="p-4 content">
                <h1 className="text-xl font-bold leading-7">
                  Pilih Jadwal Penerbangan special di <span className="text-[#7126B5]">TiketGo!</span>
                </h1>

                <div className="flex flex-col items-center justify-between w-full gap-2 py-2 pilih-kota md:flex-row">
                  <div className="flex justify-between w-full from">
                    <div className="flex w-full mr-2">
                      <Image src={From} alt="fromsvg" />
                      <input
                        type="text"
                        placeholder="From"
                        className="w-full py-3 ml-4 border-b-2 outline-none border-b-bnr-secondary"
                        name="city_from"
                        // value={cityFrom}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative inline-flex items-center cursor-pointer btn-swap">
                      <div className="p-2 my-2 text-white bg-black cursor-pointer rounded-xl">
                        <FiRepeat />
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full to">
                    <Image src={To} alt="fromsvg" />
                    <input
                      type="text"
                      placeholder="To"
                      className="w-full py-3 border-b-2 outline-none ml-9 border-b-bnr-secondary"
                      name="city_to"
                      // value={cityTo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full gap-2 py-2 md:flex-row">
                  <div className="flex w-full pilih-tanggal">
                    <Image src={DateSvg} className="mt-6 mr-2" alt="fromsvg" />

                    <div className="w-1/2 departure">
                      <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="">Departure</label>
                      <input
                        type="date"
                        placeholder="Input Tanggal"
                        className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                        name="dateDeparture"
                        onChange={handleChange}
                      />
                    </div>

                    {showReturn && (
                      <div className="w-1/2 ml-4 return">
                        <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="">Return</label>
                        <input
                          type="date"
                          placeholder="To"
                          className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                          name="dateReturn"
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    <div className="flex button justify-self-end">
                      <div className="btn-slider" onClick={handleToggle}>
                        <label className="relative inline-flex items-center cursor-pointer" >
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bnr-primary"></div>
                        </label>
                      </div>

                    </div>

                  </div>

                  <div className="flex items-center w-full ">
                    <Image src={ToTwo} className="mt-6 mr-2" alt="fromsvg" />
                    <div className="relative ml-6 passengers">
                      <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="tes">Passengers</label>
                      <ModalPassenger name={"passengers"} handleChange={handleChange} />
                    </div>
                    <div className="ml-4 seat-class">
                      <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="tes">Seat Class</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Seat"
                          className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary"
                          name="type_seat"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <button type="submit" className="w-full py-3 font-semibold text-white bg-bnr-primary rounded-bl-xl rounded-br-xl">
              Cari Penerbangan
            </button>
          </form>
        </div>
      </div>






    </>
  );
};

export default FormTicket;
