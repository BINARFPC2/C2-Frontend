"use client";

import Image from "next/image";
import React, { useState } from "react";

import ArrowUpDown from "@/assets/arrow_updown.svg";
import ButtonClose from "@/assets/button-close.svg";
import RoundCheck from "@/assets/round-check.svg";

const TicketFilter = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("");

  const [options, setOptions] = useState([
    { id: 1, isChecked: false, filter: "Harga", label: "Termurah" },
    { id: 2, isChecked: false, filter: "Durasi", label: "Terpendek" },
    { id: 3, isChecked: false, filter: "Keberangkatan", label: "Paling Awal" },
    { id: 4, isChecked: false, filter: "Keberangkatan", label: "Paling Akhir" },
    { id: 5, isChecked: false, filter: "Kedatangan", label: "Paling Awal" },
    { id: 6, isChecked: false, filter: "Kedatangan", label: "Paling Akhir" },
    // Tambahkan elemen lain sesuai kebutuhan
  ]);

  const handleCheckboxChange = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        if (option.id === id) {
          return {
            ...option,
            isChecked: !option.isChecked,
          };
        }
        return option;
      });
    });
  };

  const handleSelectOptions = () => {
    const selected = options.filter((option) => option.isChecked);
    setSelectedOptions(selected.map((option) => option.label).join(", "));
    setShowModal(false);
  };

  console.log("selected options", selectedOptions);

  return (
    <>
      <div className="filter-drop flex justify-end ">
        <button
          className="h-8 mt-8 mb-6 flex gap-2.5 items-center justify-self-center rounded-2xl w-30 font-medium text-xs leading-5 text-[#7126B5] border-solid border-2 border-[#A06ECE]"
          onClick={() => setShowModal(true)}
        >
          <div className="flex mx-2 my-2">
            <Image
              className="items-center"
              src={ArrowUpDown}
              width={20}
              height={20}
              alt=""
            />
            <span>{selectedOptions}</span>
          </div>
        </button>
      </div>

      {showModal && (
        <div className="modal-filter flex absolute outline-none focus:outline-none inset-0 z-50  bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className="relative justify-center left-[900px] top-96 modal-card bg-white w-[400px] h-[410px] rounded-2xl shadow border-2">
            <div className="relative kontent mx-0">
              <div className="close-button h-[44px] flex justify-end">
                <button type="button" onClick={() => setShowModal(false)}>
                  <Image
                    className="mr-4 mt-2"
                    src={ButtonClose}
                    width={16}
                    height={16}
                    alt=""
                  />
                </button>
              </div>

              {options.map((option) => (
                <div
                  key={option.id}
                  className={`option-2 pl-4 py-[2px] h-[48px] border-y-[1px] border-y-[#D0D0D0] font-medium text-sm leading-5 flex justify-between cursor-pointer select-none ${
                    option.isChecked ? "bg-[#7126B5]" : "bg-transparent"
                  }`}
                >
                  <label
                    className={`container h-[40px] py-2 cursor-pointer select-none text-sm flex justify-between ${
                      option.isChecked ? "text-white font-bold" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span
                        className={`font-bold text-sm leading-5 ${
                          option.isChecked ? "text-white font-bold" : ""
                        }`}
                      >
                        {option.filter}
                      </span>
                      <span
                        className={`mx-2 ${
                          option.isChecked ? "text-white font-bold" : ""
                        }`}
                      >
                        -
                      </span>
                      {option.label}
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={option.isChecked}
                        onChange={() => handleCheckboxChange(option.id)}
                      />
                    </div>
                    <span className="checkmark justify-self-end">
                      {option.isChecked && (
                        <Image
                          className="mr-2"
                          src={RoundCheck}
                          width={20}
                          height={20}
                          alt=""
                        />
                      )}
                    </span>
                  </label>
                </div>
              ))}

              <div className="submit-button flex justify-end mr-4">
                <button
                  className="my-3 w-[150px] h-[48px] bg-[#4B1979] rounded-xl text-white font-medium text-base leading-6"
                  type="button"
                  onClick={handleSelectOptions}
                >
                  Pilih
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketFilter;
