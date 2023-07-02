import Image from "next/image";

import ButtonClose from "@/assets/button-close.svg";
import NotifBell from "@/assets/notif-bell.svg";
import EllipseSucces from "@/assets/ellipse_succes.svg";


const ModalNotif = ({ show, onClose }) => {

  return (
    <>
    {show && (
      <div className="absolute inset-x-0 top-auto z-50 flex justify-end -mt-4 outline-none modal-filter focus:outline-none">
        <div className="modal-card bg-white w-[400px] h-[194px] rounded-2xl shadow border-2">
          <div className="relative mx-0 kontent">
            <div className="close-button h-[44px] flex justify-end border-b-2">
              <button type="button" onClick={onClose}>
                <Image
                  className="mt-2 mr-4"
                  src={ButtonClose}
                  width={16}
                  height={16}
                  alt=""
                />
              </button>
            </div>

            <div className="main flex flex-col sm:flex-row mx-auto">
              <div className="notifikasi mx-2">
                  <div className="notif-card flex sm:w-[800px] my-4 border-b-2 pb-2 cursor-pointer">
                     <div className="notif-bell mr-5">
                      <Image
                        className=""
                        src={NotifBell}
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="message grid grid-cols-1 w-full">
                      <div className="ket-message flex justify-between mb-2">
                        <div className="flex">
                          <div className="tanggal font-normal text-end text-sm leading-3 text-[#8A8A8A]">
                          30 Juni 2023
                          </div>
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
                      <div className="head-message font-normal text-base leading-5 mb-2">
                      Pembayaran Tiket Berhasil

                      </div>

                    </div>
                  </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ModalNotif;
