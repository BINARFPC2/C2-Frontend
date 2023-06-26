import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.png";
import FormTicket from "@/components/FormTicket/Form";
import { FiSearch } from "react-icons/fi";
import { Categories, Favorite, Favorites } from "@/constants";
import CardFavorite from "@/components/Card/CardFavorite";

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


        <div className="relative z-30 flex justify-center mb-10 sm:-mt-28">
          <FormTicket />
        </div>
        <div className="container flex flex-col md:w-full min-h-fit">
          <h3 className="px-5 mb-4 font-bold text-left md:px-52 sm:mx-32">Destinasi Favorit</h3>

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

      </div>
    </>
  );
}
