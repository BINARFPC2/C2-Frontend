"use client"

import Image from "next/image";
import DewasaIcon from "@/assets/images/dewasa.svg"
import AnakIcon from "@/assets/images/anak.svg"
import BayiIcon from "@/assets/images/bayi.svg"
import { useState } from "react";

const Counter = ({ count, decrease, increase }) => {
    return (
        <div className="flex items-center max-w-full space-x-2 item">
            <button
                className="w-10 h-10 border border-bnr-primary rounded-md text-2xl text-bnr-primary"
                onClick={decrease}
            >
                -
            </button>
            <input
                type="text"
                name=""
                id=""
                className="outline-none border border-bnr-primary w-14 h-10 rounded-md text-center"
                value={count}
                readOnly
            />
            <button
                className="w-10 h-10 border border-bnr-primary rounded-md text-2xl text-bnr-primary"
                onClick={increase}
            >
                +
            </button>
        </div>
    );
};

const InputPassangers = () => {
    const [dewasaCount, setDewasaCount] = useState(0);
    const [bayiCount, setBayiCount] = useState(0);
    const [anakCount, setAnakCount] = useState(0);

    const decreaseHandler = (category) => {
        switch (category) {
            case "dewasa":
                setDewasaCount((prev) => prev > 0 ? prev - 1 : 0);
                break;
            case "anak":
                setAnakCount((prev) => prev > 0 ? prev - 1 : 0);
                break;
            case "bayi":
                setBayiCount((prev) => prev > 0 ? prev - 1 : 0);
                break;
        }
    }

    const increaseHandler = (category) => {
        switch (category) {
            case "dewasa":
                setDewasaCount((prev) => prev + 1);
                break;
            case "anak":
                setAnakCount((prev) => prev + 1);
                break;
            case "bayi":
                setBayiCount((prev) => prev + 1);
                break;
        }
    }
    return (
        <>
            <div className="flex items-center justify-between border-b-2">
                <div className="flex items-start space-x-4">
                    <Image src={DewasaIcon} alt="dewasa" width={12} height={12} />
                    <div>
                        <p className="text-sm font-bold">Dewasa</p>
                        <span className="text-xs text-[#8A8A8A]">(12 tahun keatas)</span>
                    </div>
                </div>
                <div className="flex items-center max-w-full space-x-2 item">
                    <Counter
                        count={dewasaCount}
                        decrease={() => decreaseHandler("dewasa")}
                        increase={() => increaseHandler("dewasa")}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between border-b-2 py-3">
                <div className="flex items-start space-x-4">
                    <Image src={AnakIcon} alt="anak" width={12} height={12} />
                    <div>
                        <p className="text-sm font-bold">Anak</p>
                        <span className="text-xs text-[#8A8A8A]">(2 - 11 tahun keatas)</span>
                    </div>
                </div>
                <div className="flex items-center max-w-full space-x-2 item">
                    <Counter
                        count={anakCount}
                        decrease={() => decreaseHandler("anak")}
                        increase={() => increaseHandler("anak")}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between border-b-2">
                <div className="flex items-start space-x-4">
                    <Image src={DewasaIcon} alt="bayi" width={12} height={12} />
                    <div>
                        <p className="text-sm font-bold">Bayi</p>
                        <span className="text-xs text-[#8A8A8A]">(Dibawah 2 tahun)</span>
                    </div>
                </div>
                <div className="flex items-center max-w-full space-x-2 item">
                    <Counter
                        count={bayiCount}
                        decrease={() => decreaseHandler("bayi")}
                        increase={() => increaseHandler("bayi")}
                    />
                </div>
            </div>
        </>
    )
}

export default InputPassangers