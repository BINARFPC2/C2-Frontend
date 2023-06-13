import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.png";
import FormTicket from "@/components/FormTicket/Form";
import { FiSearch } from "react-icons/fi";
import { Categories, Favorite, Favorites } from "@/constants";
import CardFavorite from "@/components/Card/CardFavorite";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-screen max-w-full">
        <div className="relative flex items-center justify-center h-1/2">
          <div className="w-full h-32 bg-purple-400"></div>
          <div className="absolute w-[80%] min-h-56 justify-end">
            <Image
              src={HeroImage}
              alt="hero-image"
              className="w-full z-0 h-full"
            />
          </div>
        </div>
        <div className="relative z-30 flex justify-center -mt-28">
          <FormTicket />
        </div>
        <div className="w-full min-h-fit px-72">
          <h3 className="font-bold py-5">Destinasi Favorit</h3>
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
        <div className="w-full px-72 pb-10">
          <h3 className="font-bold py-5">Destinasi Favorit</h3>
          <div className="flex gap-4">
            {Favorites.map((favorite) => (
              <CardFavorite
                key={favorite.id}
                from={favorite.from}
                to={favorite.to}
                airline={favorite.airline}
                availableDate={favorite.availableDate}
                price={favorite.price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
