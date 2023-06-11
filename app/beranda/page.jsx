import React from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Banner from '@/assets/images/banner.svg'

const Beranda = () => {
    return (
        // Navbar
        <div className='bg-white'>
            <Navbar />

            <div className="flex justify-center mt-16 w-full h-24 bg-gradient-to-r from-[#B792D9] to-[#E2D4F0]">
                <div className='max-w-full'>
                    <Image className='relative -mt-9 object-cover w-full' src={Banner} alt="Search icon" />
                    <div className='absolute top-60 z-50 bg-slate-400 w-full h-60'></div>
                </div>
            </div>
        </div>
    )
}

export default Beranda;