"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import InputPassangers from "../FormTicket/InputPassangers";
import InputSeat from "../FormTicket/InputSeat";

const Modal = ({ name }) => {
  const dataModal = useSelector((state) => state.modal);
  const [seatInput, setSeatInput] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const index = dataModal.modalInput?.length - 1;
  const passengerData = dataModal.modalInput[index]?.total;

  useEffect(() => {
    if (dataModal.seatData.length > 0) {
      const index = dataModal.seatData?.length - 1;
      const lastSeatData = dataModal?.seatData[index];
      const nameIndex = lastSeatData?.length - 1;
      const name = lastSeatData[nameIndex]?.name;
      setSeatInput(name);
    }
  }, [dataModal.seatData]);

  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={
            name === "inputSeats"
              ? seatInput
              : name === "inputPassengers"
              ? passengerData
              : null
          }
          onClick={openModal}
          className="border-b-2 bg-white border-b-bnr-secondary outline-none py-3 w-full"
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="inline-flex w-full justify-end rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900"
                    onClick={closeModal}
                  >
                    <FiX className="text-2xl" />
                  </button>
                  <div className="mt-2">
                    {name === "inputPassengers" ? (
                      <InputPassangers onClose={closeModal} />
                    ) : name === "inputSeats" ? (
                      <InputSeat onClose={closeModal} />
                    ) : null}
                  </div>

                  <div className="mt-4 flex justify-end w-full">
                    {/* <button
                      type="button"
                      className="inline-flex rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2"
                      onClick={closeModal}
                    >
                      Simpan
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
