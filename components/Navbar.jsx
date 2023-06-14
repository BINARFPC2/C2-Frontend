import Image from "next/image";
import { FiSearch, FiLogIn } from "react-icons/fi";
import Logo from "@/assets/images/logo-tiketku.svg";

const Navbar = () => {
  return (
    <div className="h-full max-w-full">
      <div className="flex items-center justify-between w-full h-20 px-32 bg-white drop-shadow-md">
        <div className="flex items-center w-1/2">
          <Image
            src={Logo}
            width={78}
            height={33}
            alt="Picture of the author"
          />
          <div className="w-full ml-8">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <input
                className="h-10 align-middle placeholder:text-[#8A8A8A] block bg-[#EEEEEE] w-full border rounded-xl py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[#7126B5] focus:ring-1 sm:text-sm"
                placeholder="Cari disini ..."
                type="text"
                name="search"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <FiSearch />
              </span>
            </label>
          </div>
        </div>
        <div className="flex ml-96">
          <button className="w-full h-full rounded-xl text-[#FFFFFF] bg-[#7126B5]">
            <div className="inline-flex items-center px-4 py-3">
              <FiLogIn className="mr-2" />
              Masuk
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
