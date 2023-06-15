import Image from "next/image";
import LogoMaskapai from "@/assets/logo-maskapai.svg";



const DetailPemesanan = () => {
  return (
    <>
      <div className="content mx-3">
              <div className="detail">
                <div className="detail-pesanan flex justify-between">
                  <div className="font-bold text-lg leading-7"> Detail Pesanan</div>
                  <div className="label w-[70px] h-[28px] bg-[#73CA5C] rounded-xl flex justify-center items-center"> <span className="ticket-status flex text-white text-sm leading-5">Issued</span> </div>
                </div>

                <div className="code font-normal text-lg leading-7">Booking Code: <span className="font-bold text-lg leading-7 text-[#7126B5]">6723y2GHK</span> </div>

              </div>

              <div className="info-keberangkatan mt-3 border-b-2 pb-4">
                <div className="departure ">
                  <div className="flex justify-between">
                    <div className="time font-bold text-base leading-6">
                      07:00
                    </div>
                    <div className="text-xs font-bold leading-5 text-[#A06ECE]">
                      Keberangkatan
                    </div>
                  </div>

                  <div className="date font-normal text-sm leading-5">
                    3 Maret 2023
                  </div>
                  <div className="airport font-medium text-sm leading-5">
                    Soekarno Hatta - Terminal 1A Domestik
                  </div>

                </div>

              </div>


              <div className="info-airline mb-4 border-b-2 pb-4">
                <div className="detail-airline flex mt-2">
                  <div className="logo my-auto">
                    <Image
                      className="items-center mr-2"
                      src={LogoMaskapai}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="airline mb-4">
                      <div className="name font-bold text-sm leading-5">
                        Jet Air - Economy
                      </div>
                      <div className="type font-bold text-sm leading-5">
                        JT - 203
                      </div>
                    </div>

                    <div className="font-bold text-sm leading-5">Informasi</div>
                    <div className="penumpang">
                      <div className="nama text-sm font-medium text-[#4B1979]">
                        <span>Penumpang 1:</span>
                        <span> Mr. Harry Potter</span>
                      </div>
                      <div className="id text-sm">
                        <span>ID :</span>
                        <span> 1234567</span>
                      </div>
                    </div>

                    <div className="penumpang">
                      <div className="nama text-sm font-medium text-[#4B1979]">
                        <span>Penumpang 1:</span>
                        <span> Mr. Harry Potter</span>
                      </div>
                      <div className="id text-sm">
                        <span>ID :</span>
                        <span> 1234567</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <div className="info-kedatangan border-b-2 pb-4">
                <div className="arrive">
                  <div className="flex justify-between">
                    <div className="time font-bold text-base leading-6">
                      21:10
                    </div>
                    <div className="text-xs font-bold leading-5 text-[#A06ECE]">
                      Kedatangan
                    </div>
                  </div>

                  <div className="date font-normal text-sm leading-5">
                    3 Maret 2023
                  </div>
                  <div className="airport font-medium text-sm leading-5">
                    Melbourne International Airport
                  </div>

                </div>

              </div>

              <div className="info-harga mt-2">

                <div className="rincian border-b-2 pb-2">
                  <div className="font-bold text-sm leading-5">Rincian Harga</div>
                  <div className="ticket-adults flex justify-between text-sm leading-5">

                    <div>
                      <span>1</span>
                      <span> Adults</span>
                    </div>

                    <div>IDR 9.550.000</div>
                  </div>

                  <div className="ticket-baby flex justify-between text-sm leading-5">
                    <div>
                      <span>0</span>
                      <span> Baby</span>
                    </div>

                    <div>IDR 0</div>
                  </div>
                  <div className="tax flex justify-between text-sm leading-5">
                    <div>Tax</div>
                    <div>IDR 300.000</div>
                  </div>
                </div>

                <div className="total-harga flex justify-between mt-4">
                  <div className="font-bold text-base leading-6">Total</div>
                  <div className="font-bold text-lg leading-7 text-[#7126B5]">IDR 9.850.000</div>


                </div>

              </div>

              <div className="button mt-8">
                <button className="w-full h-[62px] text-xl leading-7 text-white bg-[#7126B5] rounded-xl">Cetak Tiket</button>
              </div>

            </div>
    </>
  );
};

export default DetailPemesanan;
