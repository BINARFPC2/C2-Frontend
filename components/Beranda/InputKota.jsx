"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { Formik, Form, Field } from "formik";

import ButtonClose from "@/assets/button-close.svg";
import FiSearch from "@/assets/fi-search.svg";
import ClearBtn from "@/assets/clear-btn.svg";


const InputKota = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);


    const results = [
      "Result 1",
      "Result 2",
      "Result 3",
    ].filter((result) => result.includes(term));

    setSearchResults(results);
    setShowSuggestions(true);
  };

  const handleSearchSubmit = (values, { resetForm }) => {
    addToSearchHistory(values.searchTerm);
    setShowSuggestions(false);
    resetForm();
  };

  const addToSearchHistory = (term) => {
    if (!searchHistory.includes(term)) {
      setSearchHistory((prevHistory) => [...prevHistory, term]);
    }
  };

  const handleResultClick = (result) => {
    setSearchTerm(result);
    setShowSuggestions(false);
    addToSearchHistory(result);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  const removeFromSearchHistory = (index) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      newHistory.splice(index, 1);
      return newHistory;
    });
  };



  return (
    <>
      <div className="">
        <div className="modal rounded-xl bg-white w-full h-[348px]">
          <div className="modal-content">

            <div className="input-search flex border-b-2">
              <div className="w-[340px] h-[40px] flex items-center rounded">
                <Image
                  className="ml-4 "
                  src={FiSearch}
                  width={20}
                  height={20}
                  alt=""
                />

                <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSearchSubmit}>
                  <Form>
                    <Field
                      type="text"
                      name="searchTerm"
                      placeholder="Masukkan Kota atau Negara"
                      defaultValue={searchTerm}
                      onChange={handleSearchChange}
                      className="ml-2.5 w-[280px] h-[20px]"
                    />
                  </Form>
                </Formik>

              </div>

            </div>





            {showSuggestions && (
              <div className="mt-4">
                <h3 className="font-medium text-base leading-6">Search Suggestions:</h3>
                <ul>
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className="cursor-pointer"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <div className="flex justify-between">
                <h3 className="font-medium text-base leading-6">Pencarian Terkini</h3>
                <button
                  className="text-[#FF0000] font-medium"
                  onClick={handleClearHistory}
                >
                  Hapus
                </button>
              </div>

              <ul>
                {searchHistory.map((term, index) => (
                  <li key={index} onClick={() => handleResultClick(term)} className="mt-4 cursor-pointer flex justify-between w-full h-[40px] my-auto border-b-2">
                    <div className="flex items-center">{term}</div>
                    <button
                      className="text-red-500 ml-2"
                      onClick={() => removeFromSearchHistory(index)}
                    >
                      <Image
                        className="ml-4 "
                        src={ClearBtn}
                        width={12}
                        height={12}
                        alt=""
                      />
                    </button>
                  </li>
                ))}
              </ul>


            </div>

          </div>
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


    </>
  );
};

export default InputKota;
