/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.png";
import FormTicket from "@/components/FormTicket/Form";
import { FiSearch } from "react-icons/fi";
import { Categories, Favorite, Favorites } from "@/constants";
import CardFavorite from "@/components/Card/CardFavorite";
import { useDispatch, useSelector } from "react-redux";
import React, { Suspense, useEffect, useState } from "react";
import { getToken } from "@/utils/helper";
import { asyncWhoAmI, setAuthUser, unSetAuthUser } from "@/store/auth/slice";
import NavbarLogin from "@/components/NavbarLogin";
import { useRouter } from "next/navigation";
import Loading from "./loading";



export default function Home() {

  return (
    <>
      <Navbar />

      <div className="h-screen md:max-w-full">
        <div className="relative flex items-center justify-center sm:h-1/2">
          <div className="flex md:w-full h-[150px]">
            <div className="hidden w-1/2 bg-[#B792D9] md:block"></div>
            <div className="hidden w-1/2 bg-[#E2D4F0] md:block"></div>
          </div>

          <div className="hidden absolute w-[80%] min-h-56 justify-end md:block ">
            <Image
              src={HeroImage}
              alt="hero-image"
              className="z-0 w-full h-full" />
          </div>
        </div>


        <div className="relative z-30 flex justify-center sm:-mt-28  mb-10">
          <FormTicket />
        </div>
        <div className="container md:w-full min-h-fit flex flex-col">
          <h3 className="font-bold mb-4 sm:mx-32 px-2 text-left">Destinasi Favorit</h3>

          <div className="md:w-full pb-10">
            <div className="flex flex-wrap gap-4 justify-center">
              {Categories.map((category) => (
                <div className="w-auto sm:w-auto md:w-auto flex items-center bg-[#E2D4F0] hover:bg-bnr-primary py-2 px-4 md:py-2 md:px-6 rounded-xl hover:text-white" key={category.id}>
                  <FiSearch className="mr-2 md:mr-3" />
                  <span className="">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-full pb-10">
            <div className="flex flex-wrap gap-4 justify-center">
              {Favorites.map((favorite) => (
                <div className="w-auto sm:w-auto md:w-auto" key={favorite.id}>
                  <CardFavorite
                    from={favorite.from}
                    to={favorite.to}
                    airline={favorite.airline}
                    availableDate={favorite.availableDate}
                    price={favorite.price}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
