"use client"

import { useState } from "react";
import { useSelector } from "react-redux";
import InputPassangers from "../FormTicket/InputPassangers";

const ModalPassenger = ({ name, handleChange }) => {
    console.log(name);
    const [showModal, setShowModal] = useState(false);
    const passengers = useSelector((state) => state.modal.modalInput);
    const index = passengers?.length - 1
    const resultPassangers = passengers[index];

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <>
            <input name={name} onClick={openModal} value={resultPassangers?.total === undefined ? "0 Passangers" : `${resultPassangers?.total} Passangers`} className="w-full py-3 border-b-2 outline-none border-b-bnr-secondary" onChange={handleChange} autoComplete="off" />
            {showModal ?
                <InputPassangers onClose={closeModal} name={name} /> : null
            }
        </>

    )
}

export default ModalPassenger;
