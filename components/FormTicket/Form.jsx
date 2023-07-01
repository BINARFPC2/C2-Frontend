"use client"

import Image from "next/image";
import From from "@/assets/images/from.svg";
import To from "@/assets/images/to.svg";
import ToTwo from "@/assets/images/toTwo.svg";
import DateSvg from "@/assets/images/date.svg";
import { FiRepeat } from "react-icons/fi";
import Modal from "../Modal/Modal";
// import InputDate from "./InputDate";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addSearchFlight } from "@/store/auth/slice";
import { handleClientScriptLoad } from "next/script";
import ModalPassenger from "../Modal/ModalPassenger";
import { useComponentContext } from "@/app/context/store";


import Select from "react-select";

const FormTicket = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const valueModal = useSelector((state) => state.modal)
  const [values, setValues] = useState(null);


  const { handleToggle, showReturn } = useComponentContext();

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
    localStorage.setItem("passengerr", JSON.stringify(valueModal))
    // const { dateDeparture, dateReturn, city_from, type_seat, city_to } = values;
    if (showReturn) {
      router.push(`/ticket?dateDeparture=${values?.dateDeparture}&dateReturn=${values?.dateReturn}&city_from=${values?.city_from}&type_seat=${values?.type_seat}&city_to=${values?.city_to}`)
    } else {
      router.push(`/ticket?dateDeparture=${values?.dateDeparture}&city_from=${values?.city_from}&type_seat=${values?.type_seat}&city_to=${values?.city_to}`)
    }
    console.log(values);
  };

  console.log("showreturn", showReturn);

// Date


// Seat
const options = [
    { value: "economy", label: "Economy" },
    { value: "premium economy", label: "Premium Economy" },
    { value: "business", label: "Business" },
    { value: "first class", label: "First Class" },
  ];
  const [selected, setSelected] = useState(null);

  const handleSelect = (selectedOption, { name }) => {
   setSelected(selectedOption);
   handleChange({ target: { name, value: selectedOption.value } });
 };

 const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff" : state.isFocused ? "white" : "black",
      backgroundColor: state.isSelected ? "#7400b8" : state.isFocused ? "#9d4edd" : "#fff",
      fontSize:  "16px"
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#fff",
      padding: "5px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "black" }),
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
                    <Image src={DateSvg} className="mt-6 mr-4" alt="fromsvg" />

                    <div className="departure border-b-2">
                      <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="">Departure</label>
                      <div className="mt-2">
                      <input
                        type="date"
                        placeholder="Input Tanggal"
                        className="md:w-[160px] w-[100px] py-3 border-b-2 outline-none border-b-bnr-secondary"
                        name="dateDeparture"
                        onChange={handleChange}
                      />
                      </div>
                    </div>

                    {showReturn && (
                      <div className="ml-4 return">
                        <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="">Return</label>
                        <div className="mt-2">
                        <input
                          type="date"
                          placeholder="Input Tanggal"
                          className="md:w-[160px] w-[100px] py-3 border-b-2 outline-none border-b-bnr-secondary"
                          name="dateReturn"
                          onChange={handleChange}
                        />
                        </div>
                      </div>
                    )}

                    <div className="flex button justify-self-end">
                      <div className="btn-slider">
                        <label className="relative inline-flex items-center cursor-pointer" onClick={handleToggle} >
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bnr-primary"></div>
                        </label>
                      </div>

                    </div>

                  </div>

                  <div className="flex items-center w-full">
                    <Image src={ToTwo} className="mt-6 mr-2" alt="fromsvg" />
                    <div className="relative w-1/2 ml-6 passengers">
                      <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="tes">Passengers</label>
                      <ModalPassenger name={"passengers"} handleChange={handleChange} />
                    </div>
                    <div className="w-1/2 ml-4 seat-class border-b-2 border-b-bnr-secondary">
                      <label className="text-base leading-6 font-normal text-[#8A8A8A]" htmlFor="tes">Seat Class</label>
                      <div>
                      <div className="select">
                        <div className="m-auto w-50 ">
                          <Select options={options} onChange={(selectedOption) => handleSelect(selectedOption, { name: "type_seat" })} value={selected} autoFocus={true} styles={customStyles}  />
                        </div>
                      </div>
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
