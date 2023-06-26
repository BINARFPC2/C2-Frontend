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
  const [open, setOpen] = useState(false)
  const [data, setData] = useState("")
  const userSelect = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const token = getToken();
  const fetch = async () => {
    const me = await getWhoAmI(token)
    setData(me)
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(unSetAuthUser());
    router.push("/login")
  }

  useEffect(() => {
    setMounted(true)
    if (!token) {
      console.log("error");
    }
    if (token) {
      fetch()
      // dispatch(asyncWhoAmI())
    }
  }, [token])

  const handlerOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative h-full md:max-w-full">
      <div className="flex items-center justify-between h-20 bg-white md:px-36 md:w-full drop-shadow-md">
        <Image
          src={Logo}
          className="ml-4"
          width={78}
          height={33}
          alt="Picture of the author"
        />
        {mounted && token ? (
          <div className="flex mr-5 space-x-5 text-2xl md:ml-96">
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
