import Image from "next/image";
import Kosong from "@/assets/riwayat-kosong.svg";


const RiwayatKosong = () => {
  return (
    <>
      <div className="riwayat-kosong mx-auto mt-16">
            
          <Image
            className="mx-auto"
            src={Kosong}
            width={204}
            height={208}
            alt=""
          />
            

        <div className="content mx-auto text-center mt-5">
          <div className="font-medium text-sm leading-5 text-[#7126B5]">Oops! Riwayat pesanan kosong!</div>
          <div className="font-medium text-sm leading-5">Anda belum melakukan pemesanan penerbangan</div>
          <div className="mt-9">
            <button className="font-medium text-base leading-6 text-white w-[347px] h-[48px] bg-[#7126B5] rounded-xl">Cari Penerbangan</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default RiwayatKosong;
