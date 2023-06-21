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
      <div className="h-screen max-w-full">
        <div className="relative flex items-center justify-center h-1/2">
          <div className="w-full h-32 bg-purple-400"></div>
          <div className="absolute w-[80%] min-h-56 justify-end">
            <Image
              src={HeroImage}
              alt="hero-image"
              className="z-0 w-full h-full" />
          </div>
        </div>
        <div className="relative z-30 flex justify-center -mt-28">
          <FormTicket />
        </div>
        <div className="w-full min-h-fit px-72">
          <h3 className="py-5 font-bold">Destinasi Favorit</h3>
          <div className="flex gap-4">
            {Categories.map((category) => (
              <div
                key={category.id}
                className="inline-flex items-center bg-bnr-primary py-[14px] px-6 rounded-xl text-white"
              >
                <FiSearch className="mr-3" />
                {category.name}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full pb-10 px-72">
          <h3 className="py-5 font-bold">Destinasi Favorit</h3>
          <div className="flex gap-4">
            {Favorites.map((favorite) => (
              <CardFavorite
                key={favorite.id}
                from={favorite.from}
                to={favorite.to}
                airline={favorite.airline}
                availableDate={favorite.availableDate}
                price={favorite.price} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
