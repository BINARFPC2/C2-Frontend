"use client"
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { FiSearch, FiLogIn, FiBell, FiUser, FiList, FiLogOut } from "react-icons/fi";
import Logo from "@/assets/images/logo-tiketku.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "@/utils/helper";
import { asyncWhoAmI, unSetAuthUser } from "@/store/auth/slice";

const getWhoAmI = async (token) => {
  const response = await fetch("https://c2-backend.up.railway.app/api/v1/whoami", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return await response.json()
}

const Navbar = () => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState("")
  const userSelect = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const token = getToken();
  const fetch = async () => {
    const me = await getWhoAmI(token)
    setData(me)
  }

  console.log("=====> saya", data);
  // console.log(userSelect)

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(unSetAuthUser());
    router.push("/login")
    // console.log("tessssssssssssss");
  }

  useEffect(() => {
    setMounted(true)
    if (!token) {
      // dispatch(unSetAuthUser())
      console.log("error");
    }
    if (token) {
      fetch()
      // dispatch(asyncWhoAmI())
    }
  }, [token])
  const [open, setOpen] = useState(false)

  const handlerOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  // const userData = data;
  // console.log(userData);
  // console.log(""userSelect)
  return (
    <div className="relative h-full md:max-w-full">
      <div className="flex items-center justify-between md:w-full h-20 bg-white drop-shadow-md">
        <Image
          src={Logo}
          className="ml-4"
          width={78}
          height={33}
          alt="Picture of the author"
        />
        <div className="sm:w-[300px] mx-2">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <input
              className="h-10 align-middle placeholder:text-[#8A8A8A] block bg-[#EEEEEE] sm:w-full border rounded-xl py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[#7126B5] focus:ring-1 sm:text-sm"
              placeholder="Cari disini ..."
              type="text"
              name="search"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <FiSearch />
            </span>
          </label>
        </div>
        {mounted && token ? (
          <div className="flex space-x-5 text-2xl ml-96">
            <FiList />
            <FiBell />
            <FiUser onClick={handlerOpen} />
            {
              open ? (
                // <div className="absolute w-32 p-2 transition-all duration-300 ease-in-out bg-red-300 right-20 -bottom-10 drop-shadow-md">
                <button type="button" className="z-40 inline-flex items-center w-full px-3 py-1 text-xl text-white rounded-lg cursor-pointer bg-bnr-primary" onClick={handleLogout} >
                  <FiLogOut />
                  Keluar
                </button>
                // </div>
              ) : null
            }

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
    </div>
  )
};

export default Navbar;
