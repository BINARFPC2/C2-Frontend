import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Search from '@/assets/images/search.svg'
import Banner from '@/assets/images/banner.svg'
import From from '@/assets/images/from.svg'
import To from '@/assets/images/to.svg'
import DateImg from '@/assets/images/date.svg'
import DateTo from '@/assets/images/DateTo.svg'
import Adult from '@/assets/images/adult.svg'
import Child from '@/assets/images/child.svg'
import Baby from '@/assets/images/baby.svg'
import Reverse from '@/assets/images/reverse.svg'
import Datepicker from "react-tailwindcss-datepicker";
import ModalCreate from './ModalOnCenter';
import { Select, Option } from "@material-tailwind/react";
import  ModalRightCreate from './ModalOnRight'


const SearchFlight = () => {
    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date(new Date()).setMonth(11) 
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 

        const a = newValue.startDate
        const b = newValue.endDate
        console.log("Start Date Value:", a);
        console.log("End Date Value:", b);
        setValue({ startDate: a, endDate: b });
        }
    
    const [primaryColor] = useState("purple");
    const DatePicked =  <Datepicker value={value} onChange={handleValueChange} primaryColor={primaryColor}/>
    
    // DESTINATION FROM
    const DestinationFrom = () => {
        return (
            <>
            <label className="absolute block w-[600px]">
                <span className="sr-only">Search</span>
                    <input className="h-8 align-middle placeholder:text-[#8A8A8A] block bg-[#EEEEEE] peer-focus:outline-purple-400 w-full border rounded-sm py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[#7126B5] focus:ring-1 focus:cursor-text sm:text-sm" placeholder="Masukkan Kota atau Negara" type="text" name="search" />
                    
                    <span className="absolute inset-1 ml-2 flex items-center pr-4">
                        <Image src={Search} width={16} height={16} alt="Search icon" />
                    </span>
            </label>
            
            <button className='text-black text-xl absolute ml-[608px] pt-1' onClick={() => onClose()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className='mt-12 text-xs font-semibold flex flex-col'>
            <span className='absolute'>Pencarian Terkini</span>
            <button className='text-red-600 text-xs font-semibold absolute place-self-end -mt-1' onClick={() => onClose()}>
                Hapus
            </button>
            </div>

            <table className="table-auto text-sm mt-9">
            <tbody>
                <tr><td className='border-b-[1px] py-1 border-[#D0D0D0]'>Malcolm Lockyer</td></tr>
                <tr><td className='border-b-[1px] py-1 border-[#D0D0D0]'>Malcolm Lockyer</td></tr>
                <tr><td className='border-b-[1px] py-1 border-[#D0D0D0]'>Malcolm Lockyer</td></tr>
            </tbody>
            </table></>
        )
    }

    // DESTINATION TO

    // SEAT CLASS
    const SeatClass = () => {
        return (
                <div className="w-80 mb-5 mt-5">
                <Select className="m-0 pb-7 shadow-none h-14 bg-purple-950 text-white">
                    <Option className="bg-white mx-2 px-3ss  border-b-2 hover:bg-purple-950 h-14 rounded-none" value="A">
                        <div className="flex flex-col">
                        <span className="font-semibold hover:text-white">Economy</span>
                        <span className="text-purple-400 hover:text-white">IDR 4.950.000</span>
                        </div>
                    </Option>
                    <Option className="bg-white mx-2 px-3  border-b-2 py-2 hover:bg-purple-950 h-14 rounded-none" value="A">
                        <div className="flex flex-col">
                        <span className="font-semibold hover:text-white">Premium Economy</span>
                        <span className="text-purple-400 hover:text-white">IDR 7.550.000</span>
                        </div>
                    </Option>
                    <Option className="bg-white mx-2 px-3  border-b-2 py-2 hover:bg-purple-950 h-14 rounded-none" value="A">
                        <div className="flex flex-col">
                        <span className="font-semibold hover:text-white">Business</span>
                        <span className="text-purple-400 hover:text-white">IDR 29.220.000</span>
                        </div>
                    </Option>
                    <Option className="bg-white mx-2 px-3  border-b-2 py-2 hover:bg-purple-950 h-14 rounded-none" value="A">
                        <div className="flex flex-col">
                        <span className="font-semibold hover:text-white">First Class</span>
                        <span className="text-purple-400 hover:text-white">IDR 87.620.000</span>
                        </div>
                    </Option>
                </Select>
                </div>
        )
    }

    // PASSANGERS

    const [amount, setAmount] = useState(0)
    const [numberAdult, setNumberAdult] = useState (0)
    const [numberChild, setNumberChild] = useState (0)
    const [numberBaby, setNumberBaby] = useState (0)

    useEffect(() => {
        const totalAmount = numberAdult + numberChild + numberBaby;
        setAmount(totalAmount);
      }, [numberAdult, numberChild, numberBaby]);

      const handleSubmit = async (event) => {
        event.preventDefault();
        // Mengirim data atau melakukan tindakan lainnya
        console.log('Jumlah penumpang:', amount);
        console.log('Jumlah Dewasa:', numberAdult);
        console.log('Jumlah Anak:', numberChild);
        console.log('Jumlah Bayi:', numberBaby);
    };

    // const handleSaveAndClose = async () => {
    //     await handleSubmit();
    //     handleClose();
    // };

    const Passangers = () => {
        numberAdult,
        setNumberAdult,
        numberChild,
        setNumberChild,
        numberBaby,
        setNumberBaby,
        handleSubmit

        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-5 mt-5 w-80">
                <table className="table-auto w-full">
                    <tbody className=''>
                        <tr className=''>
                            <td className='px-2 py-2 border-b-2'>
                                <div className='flex flex-col'>
                                <span className="absolute">
                                    <Image className='' src={Adult} width={16} height={16} alt="Search icon" />
                                </span>
                                <span className='pl-6 font-bold text-sm'>Dewasa</span>
                                <span className='pl-6 text-xs'>(12 Tahun keatas)</span>
                                </div>
                            </td>
                            <td className='border-b-2'>
                                <button onClick={() => setNumberAdult((prev) => prev - 1)} className={`px-3 py-1 border-purple-400 border-2 mx-1 rounded-md ${numberAdult <= 0 ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={numberAdult <= 0}>-</button>
                                <button className='px-5 py-1 disabled border-2 border-gray-300 mx-1 rounded-md'>{numberAdult}</button>
                                <button onClick={() => setNumberAdult((prev) => prev + 1)} className='px-3 py-1 border-purple-400 border-2 mx-1 rounded-md'>+</button>
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className=' px-2 py-2'>
                                <div className='flex flex-col'>
                                <span className="absolute">
                                    <Image className='' src={Child} width={16} height={16} alt="Search icon" />
                                </span>
                                <span className='pl-6 font-bold text-sm'>Anak</span>
                                <span className='pl-6 text-xs'>(2 - 11 Tahun)</span>
                                </div>
                            </td>
                            <td className='border-b-2'>
                                <button onClick={() => setNumberChild((prev) => prev - 1)} className={`px-3 py-1 border-purple-400 border-2 mx-1 rounded-md ${numberChild <= 0 ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={numberChild <= 0}>-</button>
                                <button className='px-5 py-1 disabled border-2 border-gray-300 mx-1 rounded-md'>{numberChild}</button>
                                <button onClick={() => setNumberChild((prev) => prev + 1)} className='px-3 py-1 border-purple-400 border-2 mx-1 rounded-md'>+</button>
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className=' px-2 py-2'>
                                <div className='flex flex-col'>
                                <span className="absolute">
                                    <Image className='' src={Baby} width={16} height={16} alt="Search icon" />
                                </span>
                                <span className='pl-6 font-bold text-sm'>Bayi</span>
                                <span className='pl-6 text-xs'>(Dibawah 2 Tahun)</span>
                                </div>
                            </td>
                            <td className='border-b-2'>
                                <button onClick={() => setNumberBaby((prev) => prev - 1)} className={`px-3 py-1 border-purple-400 border-2 mx-1 rounded-md ${numberBaby <= 0 ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`} disabled={numberBaby <= 0}>-</button>
                                <button className='px-5 py-1 disabled border-2 border-gray-300 mx-1 rounded-md'>{numberBaby}</button>
                                <button onClick={() => setNumberBaby((prev) => prev + 1)} className='px-3 py-1 border-purple-400 border-2 mx-1 rounded-md'>+</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                <div className=''>
                <button className='text-white bg-purple-950 rounded-md ml-56 mt-9 px-6 py-2 text-xs absolute align-bottom place-self-end' type='submit'>
                    Simpan
                </button>
                </div>
                </div>
                </form>
        )
    }
      
    // SWITCH TOGGLE
    const [toggle, setToggle] = useState(true);
    const toggleClass = ["transform", "translate-x-5"];
    const handleToggle = (event) => {
        event.preventDefault();
        setToggle(!toggle);

        console.log('Set toggle:', toggle);
      };

    // RETURN SEARCH FLIGHT
    return (

        <form action="" method="post">
        <div className=''>
            <Image className='relative h-48 -mt-10' src={Banner} alt="Search icon" />
            <div className='flex justify-center'>
                <div className='-mt-5 absolute top-60 bg-white w-2/3 h-52 rounded-lg shadow-lg'>
                    <div className='px-5 py-2'>
                        <span className='font-bold'>Pilih Jadwal Penerbangan spesial di</span> <span className='font-bold text-[#7126B5]'>Tiketku!</span> 
                    </div>
                    <div className="grid pl-5 grid-cols-6 gap-1 border-spacing-4 mb-4">
                        <div className="col-start-1 h-12">
                            <span className="absolute flex items-center pl-1">
                                <Image className='w-16 h-14 pb-1' src={From} width={40} height={40} alt="Search icon" />
                            </span>
                        </div>


                        {/* DESTINATON FROM */}
                        <div className="col-span-2 -ml-10 mr-4">
                            <ModalCreate body={DestinationFrom()} id="destinationFrom" className="bg-white text-base font-semibold border-b-2 border-[#D0D0D0] text-gray-900 peer-focus:outline-indigo-300 focus:outline-none focus:cursor-text focus:ring-0 block w-full p-1"/>
                            <div>
                                <button className='text-black text-xl absolute place-self-end ml-2 pt-1'  onClick={() => onClose()}>
                                    <span className="absolute flex items-center pl-1">
                                        <Image className='w-16 h-14 pb-1' src={From} width={40} height={40} alt="Search icon" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white col-start-4 h-12  ml-14">
                            <div className="col-start-1 h-12">
                            <span className="absolute flex items-center pl-1 pt-3">
                                <Image className='w-12 h-7 pb-1' src={To} width={40} height={40} alt="Flight to" />
                            </span>
                            </div>
                        </div>

                        <div className='absolute place-self-center mb-24 ml-12'>
                            <button className='bg-black border-2 px-1 py-1 border-purple-950 hover:bg-white rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-4 h-4 hover:stroke-black"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
                            </button>
                        </div>


                        {/* DESTINATION TO */}
                        <div className="col-span-2 mr-2">
                            <ModalCreate body={DestinationFrom()} id="destinationTo" className="bg-white text-base font-semibold border-b-2 border-[#D0D0D0] text-gray-900 peer-focus:outline-indigo-300 focus:outline-none focus:cursor-text focus:ring-0 block w-full p-1"/>
                            <div>
                                <button className='text-black text-xl absolute place-self-end ml-2 pt-1'  onClick={() => onClose()}>
                                    <span className="absolute flex items-center pl-1">
                                        <Image className='w-16 h-14 pb-1' src={From} width={40} height={40} alt="Search icon" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-start-1 h-14">
                            <span className="absolute flex items-center pl-1">
                                <Image className='w-16 h-14' src={DateImg} width={40} height={40} alt="Search icon" />
                            </span>
                        </div>


                        {/* DEPARTURE */}
                        <div className="col-start-2  -ml-10 mr-8">
                            <label className="text-[#8A8A8A] text-sm">Departure</label>
                            <ModalCreate body={DatePicked} value={value} id="startDate" className="bg-white text-sm font-semibold border-b-2 border-[#D0D0D0] text-gray-900 peer-focus:outline-indigo-300 focus:outline-none focus:cursor-text focus:ring-0 block w-full p-1"/>
                        </div>


                        {/* RETURN */}
                        <div className="absolute justify-center items-center place-self-center">
                            {/* Switch Container */}
                            <div className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-purple-950 rounded-full p-1 cursor-pointer" onClick={handleToggle} >
                            {/* Switch */}
                            <div className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md duration-300 ease-in-out ${toggle ? '' : toggleClass.join(' ')}`} ></div>
                            </div>
                        </div>
                        <div className="col-start-3 -ml-6 mr-4"> <label className="text-[#8A8A8A] text-sm">Return</label>
                            <ModalCreate body={DatePicked} value={value} id="endDate" className="bg-white text-sm font-semibold border-b-2 border-[#D0D0D0] text-gray-900 peer-focus:outline-indigo-300 focus:outline-none focus:cursor-text focus:ring-0 block w-full p-1" disabled={toggle} />
                        </div>


                        <div className="bg-white col-start-4 h-14 ml-14">
                            <span className="absolute flex items-center pl-2 pt-1">
                            <Image className="w-12 h-12" src={DateTo} width={40} height={40} alt="Search icon" />
                            </span>
                        </div>


                        {/* PASSANGERS */}
                        <div className="col-start-5 col-end-6">
                            <label className="text-[#8A8A8A] text-sm">Passangers</label>
                            <ModalRightCreate body={Passangers()} value={amount} id="passangers" className="bg-white text-base font-semibold border-b-2 border-[#D0D0D0] text-gray-900 peer-focus:outline-indigo-300 focus:outline-none focus:cursor-text focus:ring-0 block w-full p-1 mr-1"/>
                        </div>


                        {/* SEAT CLASS */}
                        <div className="col-start-6 col-end-6 row-span-2 mr-2">
                            <label className="text-[#8A8A8A] text-sm">Seat Class</label>
                            <ModalRightCreate body={SeatClass()} id="seatclass" className="bg-white text-base font-semibold border-b-2 border-[#D0D0D0] text-gray-900 peer-focus:outline-indigo-300 focus:outline-none focus:cursor-text focus:ring-0 block w-full p-1 mr-1"/>
                        </div>
                    </div>
                    <div className=''>
                        <button className='bg-[#7126B5] text-white mt-2 rounded-bl-lg rounded-br-lg h-8 font-bold text-center w-full absolute'>Cari Penerbangan</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default SearchFlight;