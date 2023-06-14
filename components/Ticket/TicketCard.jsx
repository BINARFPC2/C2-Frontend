import Image from "next/image";

import LogoMaskapai from "@/assets/logo-maskapai.svg";
import IconDrop from "@/assets/icon-drop.svg";
import LongArrow from "@/assets/icon_long-arrow.svg";
import IconTime from "@/assets/icon-time.svg";

const TicketCard = () => {
  return (
    <div className="ticket-seacrh flex justify-center w-full">
      <div className="flex justify-center pb-4">
        <div className="w-[657px] h-[127px] border-2 shadow rounded-lg">
          <div className="flex mx-4 my-2.5 justify-between">
            <div className="flex items-center">
              <Image
                className="items-center mr-2"
                src={LogoMaskapai}
                width={24}
                height={24}
                alt=""
              />
              <span className="font-medium text-xs leading-5 text-center">
                Nama Maskapai
              </span>
              <span className="mx-1 text-center">-</span>
              <span className="font-medium text-xs leading-5 text-center">
                Class
              </span>
            </div>

            <Image
              className="items-center"
              src={IconDrop}
              width={24}
              height={24}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-4 my-auto">
            <div className="w-11 my-auto">
              <div className="font-bold text-sm leading-5">07:00</div>
              <div className="font-medium text-xs leading-5">JKT</div>
            </div>

            <div className="w-60 text-center my-auto">
              <div className="font-medium text-xs leading-5 text-[#8A8A8A]">
                4h 0m
              </div>
              <div>
                <Image
                  className="items-center"
                  src={LongArrow}
                  width={232}
                  height={1}
                  alt=""
                />
              </div>
              <div className="font-medium text-xs leading-5 text-[#8A8A8A]">
                Direct
              </div>
            </div>

            <div className="w-11 my-auto">
              <div className="font-bold text-sm leading-5">11:00</div>
              <div className="font-medium text-xs leading-5">MLB</div>
            </div>

            <div className="w-5 my-auto">
              <Image
                className="items-center"
                src={IconTime}
                width={18}
                height={20}
                alt=""
              />
            </div>

            <div className="w-52 my-auto">
              <div className="flex justify-end font-bold text-base leading-6 text-[#7126B5] pb-1.5">
                IDR 4.950.000
              </div>
              <div className="flex justify-end">
                <button className="w-[100px] h-[32px] bg-[#4B1979] rounded-xl text-white font-medium text-base leading-6">
                  Pilih
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
