"use client";

import { addInputSeat } from "@/store/auth/slice";
import { useEffect } from "react";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useDispatch } from "react-redux";

import Image from "next/image";
import RoundCheck from "@/assets/round-check.svg";

const packages = [
  { id: 1, name: "Economy", price: 4950000 },
  { id: 2, name: "Premium Economy", price: 7550000 },
  { id: 3, name: "Business", price: 29220000 },
  { id: 4, name: "First Class", price: 87620000 },
];

const InputSeat = ({ onClose }) => {
  const dispatch = useDispatch();
  const [selectedPackages, setSelectedPackeges] = useState([]);

  const handleCheckboxChange = (selectedPackage) => {
    if (
      selectedPackages.length === 1 &&
      selectedPackages.includes(selectedPackage)
    ) {
      return;
    }

    const isPackageSelected = selectedPackages.some(
      (p) => p.id === selectedPackage.id
    );

    let updatedSelectedPackages;

    if (isPackageSelected) {
      updatedSelectedPackages = selectedPackages.filter(
        (p) => p.id !== selectedPackage.id
      );
    } else {
      updatedSelectedPackages = [...selectedPackages, selectedPackage];
    }

    setSelectedPackeges(updatedSelectedPackages);
  };

  useEffect(() => {
    dispatch(addInputSeat(selectedPackages));
  }, [dispatch, selectedPackages]);

  console.log(selectedPackages);
  return (
    <div className="w-full top-16">
      <div className="">
        {packages.map((packege, packegeIdx) => (
          <div
            key={packegeIdx}
            className="flex items-center justify-between space-x-2 border-y-[1px] cursor-pointer"
            onClick={() => handleCheckboxChange(packege)}
          >
            <input
              type="checkbox"
              checked={selectedPackages.includes(packege)}
              className="hidden"
              onChange={() => { }}
              disabled={
                selectedPackages.length > 1 &&
                selectedPackages.includes(packege)
              }
            />
            <div
              className={
                selectedPackages.includes(packege)
                  ? "flex flex-col text-white font-bold bg-[#4B1979] w-full py-2 relative space-y-2 hover:text-white px-3"
                  : "flex flex-col w-full py-2 relative px-3"
              }
            >
              <span className={
                selectedPackages.includes(packege)
                  ? "text-sm font-bold text-white leading-5"
                  : "text-sm font-medium leading-5"
              }
              >{packege.name}</span>

              <span className={
                selectedPackages.includes(packege)
                  ? "text-sm font-bold text-white leading-5"
                  : "text-sm font-medium leading-5 text-[#7126B5]"
              }
              >IDR {packege.price}</span>
            </div>
            <div className="absolute right-14">
              {selectedPackages.includes(packege) && (
                // <FiCheck className="text-bnr-primary w-6 h-6 bg-[#73CA5C] rounded-full" />
                <Image
                  className="mr-2"
                  src={RoundCheck}
                  width={20}
                  height={20}
                  alt=""
                />
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex rounded-md border border-transparent bg-[#4B1979] px-4 py-2 text-sm font-medium text-white hover:bg-[#5d2f86] focus:outline-none focus-visible:ring-2 mt-4"
          >
            Simpan
          </button>

        </div>

      </div>
    </div>
  );
};

export default InputSeat;
