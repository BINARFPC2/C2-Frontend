"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const InputDate = ({ name }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <>
      {name === "inputDeparture" ? (
        <div>
          <Datepicker
            name="inputDeparture"
            placeholder={"Departure"}
            asSingle={true}
            inputClassName="border-b-2 border-b-bnr-secondary outline-none py-3 w-full"
            value={value.startDate}
            onChange={(newStartDate) =>
              handleValueChange({ ...value, startDate: newStartDate })
            }
          />
        </div>
      ) : (
        <div>
          <Datepicker
            name="inputReturn"
            placeholder="Pilih tanggal"
            asSingle={true}
            inputClassName="border-b-2 border-b-bnr-secondary outline-none py-3 w-full"
            value={value.endDate}
            onChange={(newEndDate) =>
              handleValueChange({ ...value, endDate: newEndDate })
            }
          />
        </div>
      )}
    </>
  );
};
export default InputDate;
