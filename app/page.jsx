import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.png";
import FormTicket from "@/components/FormTicket/Form";
import { FiSearch } from "react-icons/fi";
import { Categories, Favorite, Favorites } from "@/constants";
import CardFavorite from "@/components/Card/CardFavorite";
import Logo from "@/assets/images/logo-tiketku.svg";
import Banner from "@/assets/images/banner.svg";

import LogoBRI from "@/assets/Logo_BRI.svg";
import LogoMandiri from "@/assets/Logo_Mandiri.svg";
import LogoBCA from "@/assets/Logo_BCA.svg";
import LogoBNI from "@/assets/Logo_BNI.svg";

import Facebook from "@/assets/images/fb.svg";
import Instagram from "@/assets/images/instagram.svg";
import Twitter from "@/assets/images/twitter.svg";
import Tiktok from "@/assets/images/tiktok.svg";
import Youtube from "@/assets/images/youtube.svg";
import PlayStore from "@/assets/images/googleplay.svg";
import AppStore from "@/assets/images/appstore.svg";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen md:max-w-full">
        <div className="relative z-10 flex items-center justify-center sm:h-1/2">
          <div className="flex md:w-full h-[150px]">
            <div className="hidden w-1/2 bg-[#B792D9] md:block"></div>
            <div className="hidden w-1/2 bg-[#E2D4F0] md:block"></div>
          </div>
          <div className="hidden absolute z-20 w-[80%] min-h-56 justify-end md:block ">
            <Image
              src={Banner}
              alt="hero-image"
              className="z-0 w-full h-full" />
          </div>
        </div>
        <div className="relative z-30 flex justify-center mb-10 sm:-mt-28">
          <FormTicket />
        </div>
        <div className="container flex flex-col w-full min-h-fit mx-auto">
          <h3 className="mb-4 font-bold text-left mx-2 md:mx-32">Favorite Destinations</h3>

          <div className="pb-10 md:w-full">
            <div className="flex flex-wrap justify-center gap-4">
              {Categories.map((category) => (
                <div className="w-auto sm:w-auto md:w-auto flex items-center bg-[#E2D4F0] hover:bg-bnr-primary py-2 px-4 md:py-2 md:px-6 rounded-xl hover:text-white" key={category.id}>
                  <FiSearch className="mr-2 md:mr-3" />
                  <span className="">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-10 md:w-full">
            <div className="flex flex-wrap justify-center gap-4">
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
        <Footer />

      </div>
    </>
  );
}
