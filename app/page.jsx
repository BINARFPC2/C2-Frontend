'use client'
import React, { useState} from 'react'
import Navbar from '@/components/Navbar';
import SearchFlight from '@/components/SearchFlight';
import FavoriteDestination from '@/components/FavoriteDestination';

// BERANDA
const Beranda = () => {
    
    return (
        // Navbar
        <div className='bg-white'>
            {/* NAVBAR */}
            <Navbar />
            <div className="flex justify-center mt-16 w-full h-24 bg-gradient-to-r from-[#B792D9] to-[#E2D4F0]">
                {/* SEARCH FLIGHT */}
                <SearchFlight />
                {/* FAVORITE DESTINATION */}
                <FavoriteDestination />
            </div>
        </div>
    )
}

export default Beranda;