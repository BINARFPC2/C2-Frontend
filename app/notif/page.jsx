import Image from "next/image";
import NotifBell from "@/assets/notif-bell.svg";
import EllipseSucces from "@/assets/ellipse_succes.svg";
import NavbarLogin from "@/components/NavbarLogin";
import BackArrow from "@/assets/fi_arrow.svg";
import IconFilter from "@/assets/icon-filter.svg";
import IconSearch from "@/assets/icon-search.svg";

const NotifPage = () => {

  return (
    <>
      <NavbarLogin />

      <div className="container mx-auto max-w-[968px]">

        <div className="ticket-section pb-4 border-b-2 drop-shadow-md mx-2">
          <div className="text-heading">
            <h1 className="text-xl font-bold leading-8 mt-12">Notifikasi</h1>
          </div>

          <div className="search flex flex-col sm:flex-row gap-4 mt-4">

            <div className="sm:w-[800px] flex bg-[#A06ECE] h-[50px] rounded-xl items-center text-white font-medium text-base leading-6 gap-1">
              <a href="#"><Image
                className="ml-3 mr-5"
                src={BackArrow}
                width={24}
                height={24}
                alt=""
              /></a>
              <span>Beranda</span>
            </div>


            <div className="flex justify-between gap-x-4">
              <div className="items-center my-auto">
                <button className="flex items-center rounded-2xl w-[90px] font-normal text-base leading-6 border-2 border-[#A06ECE]">
                  <div className="flex h-8 mx-auto ">
                    <Image
                      className="items-center mr-2.5"
                      src={IconFilter}
                      width={17}
                      height={17}
                      alt=""
                    />
                    <span className="self-center" >Filter</span>
                  </div>
                </button>
              </div>

              <div className="my-auto" >
                <Image
                  className=""
                  src={IconSearch}
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </div>


          </div>
        </div>

        <div className="main flex flex-col sm:flex-row mx-auto">

          <div className="notifikasi mt-12 mx-2">

            <div className="notif-card flex sm:w-[800px] border-b-2 pb-2 cursor-pointer">
              <div className="notif-bell mr-5">
                <Image
                  className=""
                  src={NotifBell}
                  width={24}
                  height={24}
                  alt=""
                />
              </div>

              <div className="message w-full">
                <div className="ket-message flex justify-between mb-2">
                  <div className="info font-normal text-sm leading-3 text-[#8A8A8A]">Promosi</div>

                  <div className="flex">
                    <div className="tanggal font-normal text-sm leading-3 text-[#8A8A8A]">20 Maret, 14:04</div>
                    <span className="status">
                      <Image
                        className="ml-2"
                        src={EllipseSucces}
                        width={8}
                        height={8}
                        alt=""
                      />
                    </span>
                  </div>

                </div>


                <div className="head-message font-normal text-base leading-5 mb-2">Dapatkan Potongan 50% Tiket!</div>
                <div className="add-message font-normal text-sm leading-3 text-[#8A8A8A] mb-px">Syarat dan Ketentuan berlaku!</div>

              </div>



            </div>


          </div>

        </div>



      </div>

    </>
  );
};

export default NotifPage;
