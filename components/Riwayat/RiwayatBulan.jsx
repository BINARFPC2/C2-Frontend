import Image from "next/image";
import IconLocation from "@/assets/icon-location.svg";
import ArrowLong from "@/assets/long-arrow.svg";



const RiwayatBulan = () => {
  return (
    <>
      <div className="riwayat-month mx-2">
              <div className="font-bold text-base leading-6 my-3">Bulan 2023</div>

              <div className="card-riwayat sm:w-[468px] h-[200px] border-2 rounded-xl shadow cursor-pointer hover:border-[#7126B5]">

                <div className="content mx-3.5 my-3">
                  <div className="label w-[70px] h-[28px] bg-[#73CA5C] rounded-xl flex justify-center items-center"> <span className="ticket-status flex text-white text-sm leading-5">Issued</span> </div>

                  <div className="info flex mt-5 justify-between border-b-2 pb-4">
                    <div className="keberangkatan flex">

                      <div className="mr-3">
                        <Image
                          className=""
                          src={IconLocation}
                          width={16}
                          height={20}
                          alt=""
                        />
                      </div>

                      <div>
                        <div className="font-bold text-sm leading-5"> Jakarta</div>
                        <div className="font-medium text-xs"> 5 Maret 2023</div>
                        <div className="font-medium text-xs"> 19:10</div>
                      </div>

                    </div>
                    <div className="time justify-center items-center my-auto">

                      <div className="font-medium text-xs text-[#3C3C3C] my-auto text-center">4h 0m</div>
                      <div>
                        <Image
                          className="h-4"
                          src={ArrowLong}
                          width={164}
                          height={3}
                          alt=""
                        />
                      </div>

                    </div>
                    <div className="destination flex">

                      <div className="mr-3">
                        <Image
                          className=""
                          src={IconLocation}
                          width={16}
                          height={20}
                          alt=""
                        />
                      </div>


                      <div>
                        <div className="font-bold text-sm leading-5"> Jakarta</div>
                        <div className="font-medium text-xs"> 5 Maret 2023</div>
                        <div className="font-medium text-xs"> 19:10</div>
                      </div>

                    </div>
                  </div>

                  <div className="info flex justify-between mt-2">
                    <div className="booking-code">
                      <div className="text-xs font-bold mb-px">Booking Code:</div>
                      <div className="text-xs font-normal">6723y2GHK</div>
                    </div>
                    <div className="class">
                      <div className="text-xs font-bold mb-px">Class:</div>
                      <div className="text-xs font-normal">Economy</div>
                    </div>
                    <div className="price my-auto">
                      <div className="text-sm font-bold text-[#4B1979]">IDR 9.850.000</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
    </>
  );
};

export default RiwayatBulan;
