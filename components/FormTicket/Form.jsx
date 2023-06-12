import Image from "next/image"
import From from "@/assets/images/from.svg"
import To from "@/assets/images/to.svg"
import ToTwo from "@/assets/images/toTwo.svg"
import DateSvg from "@/assets/images/date.svg"
import { FiRepeat } from "react-icons/fi"
import Modal from "../Modal/Modal"
import InputPassangers from "./InputPassangers"
import InputSeat from "./InputSeat"

const FormTicket = () => {
    return (
        <div className='flex max-w-full items-center justify-center h-1/2'>
            <form>
                <div className='w-full h-full bg-white shadow-md p-6 rounded-tl-xl rounded-tr-xl'>
                    <h1>Pilih Jadwal Penerbangan special di Tiketku!</h1>
                    <div className="flex justify-between items-center gap-14 py-8">
                        <div className="flex items-center space-x-4 w-96">
                            <Image src={From} alt="fromsvg" />
                            <input type="text" placeholder="From" className="border-b-2 border-b-bnr-secondary outline-none py-3 w-full" />
                        </div>
                        <div className="bg-black p-2 rounded-xl text-white">
                            <FiRepeat />
                        </div>
                        <div className="flex items-center space-x-4 w-96">
                            <Image src={To} alt="fromsvg" />
                            <input type="text" placeholder="From" className="border-b-2 border-b-bnr-secondary outline-none py-3 w-full" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-8">
                        <div className="flex items-center space-x-4 w-96 relative">
                            <Image src={DateSvg} alt="fromsvg" />
                            <div>
                                <label htmlFor="">Departure</label>
                                <input type="text" placeholder="From" className="border-b-2 border-b-bnr-secondary outline-none py-3 w-full" />
                            </div>
                            <div className="">
                                <div className="absolute -right-8">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bnr-primary"></div>
                                    </label>
                                </div>

                                <label htmlFor="">Return</label>
                                <input type="text" placeholder="From" className="border-b-2 border-b-bnr-secondary outline-none py-3 w-full" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 w-96">
                            <Image src={ToTwo} alt="fromsvg" />
                            <div>
                                <label htmlFor="tes">Passengers</label>
                                {/* <input type="text" placeholder="From" className="border-b-2 border-b-bnr-secondary outline-none py-3 w-full" /> */}
                                <Modal>
                                    <InputPassangers />
                                </Modal>
                            </div>
                            <div>
                                <label htmlFor="tes">Seat Class</label>
                                {/* <input type="text" placeholder="From" className="border-b-2 border-b-bnr-secondary outline-none py-3 w-full" /> */}
                                <Modal>
                                    <InputSeat />
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="w-full bg-bnr-primary py-3 text-white rounded-bl-xl rounded-br-xl font-semibold">Cari Penerbangan</button>
            </form>
        </div >
    )
}

export default FormTicket