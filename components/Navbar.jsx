"use client";
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import {
  FiSearch,
  FiLogIn,
  FiBell,
  FiUser,
  FiList,
  FiLogOut,
} from "react-icons/fi";
import Logo from "@/assets/images/logo-tiketku.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "@/utils/helper";
import { asyncWhoAmI, unSetAuthUser } from "@/store/auth/slice";
import ModalNotif from "./Addon/ModalNotif";

const getWhoAmI = async (token) => {
  const response = await fetch(
    "https://c2-backend.up.railway.app/api/v1/whoami",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json();
};

const Navbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const userSelect = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const token = getToken();
  const fetch = async () => {
    const me = await getWhoAmI(token);
    setData(me);
  };


  const handleOpenNotif = () => {
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(unSetAuthUser());
    router.push("/login");
  };

  useEffect(() => {
    setMounted(true);
    if (!token) {
      console.log("error");
    }
    if (token) {
      fetch();
      // dispatch(asyncWhoAmI())
    }
  }, [token]);

  const handlerOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative z-40 h-full md:max-w-full">
      <div className="flex items-center justify-between h-20 bg-white md:px-36 md:w-full drop-shadow-md">
        <Image
          src={Logo}
          className="ml-4"
          width={78}
          height={33}
          alt="Picture of the author"
        />
        {mounted && token ? (
          <div className="flex mr-5 text-2xl md:ml-96">
            <Link href={"/riwayat"}>
              <FiList className="cursor-pointer mr-5" />
            </Link>
            {/* <Link href={"/notif"}> */}
            {/* <div className="relative">
                <FiBell />
                <span class="top-0 left-3 absolute  w-3.5 h-3.5 bg-red-600 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div> */}
            <button onClick={handleOpenNotif}><FiBell className="mr-5" /></button>
            <ModalNotif show={showNotif} onClose={handleCloseNotif} />
            {/* </Link> */}
            <FiUser onClick={handlerOpen} className="cursor-pointer" />
          </div>
        ) : (
          <div className="flex mr-4">
            <Link href="/login">
              <button className="md:w-full h-full rounded-xl text-[#FFFFFF] bg-[#7126B5]">
                <div className="inline-flex items-center px-4 py-3">
                  <FiLogIn className="mr-2" />
                  Masuk
                </div>
              </button>
            </Link>
          </div>
        )}
      </div>
      {
        open ? (
          <div className="absolute z-50 w-32 -mt-5 transition-all duration-300 ease-in-out bg-white border-2 rounded-lg shadow-lg select-none right-20 drop-shadow-md">

            <Link href="/user">
              <button type="button" className="z-40 inline-flex items-center w-full px-3 py-1 text-xl cursor-pointer p-2 border-b-2 hover:bg-[#9d4edd] hover:text-white">
                <FiUser className="mr-2" />
                Profil
              </button>
            </Link>
            <button type="button" className="z-40 inline-flex items-center w-full px-3 py-1 text-xl cursor-pointer hover:bg-[#9d4edd] hover:text-white" onClick={handleLogout} >
              <FiLogOut className="mr-2" />
              Keluar
            </button>
          </div>
        ) : null
      }
    </div>
  );
};

export default Navbar;
