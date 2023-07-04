import Image from "next/image";
import LogoMaskapai from "@/assets/logo-maskapai.svg";
import { getDateFormat, getMoneyFormat, getToken } from "@/utils/helper";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const getTicket = async (token, id) => {
  const response = await fetch("https://c2-backend.up.railway.app/api/v1/eticket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      checkoutId: id
    })
  })
  return await response.json()
}

const DetailPemesanan = ({ key, data, idTicket }) => {
  const token = getToken();

  const handlePrintTiket = (e) => {
    e.preventDefault();
    getTicket(token, data?.id);
    toast.success(`Berhasil cetak ticket, cek email anda`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      {idTicket === data.id ? (
        <div
          className="content mx-3 duration-500 transition-all ease-in-out"
          key={key}
        >
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <div className="detail">
            <div className="detail-pesanan flex justify-between">
              <div className="font-bold text-lg leading-7">Detail Ticket</div>
              <div className="label w-[70px] h-[28px] bg-[#73CA5C] rounded-xl flex justify-center items-center">
                {" "}
                <span className="ticket-status flex text-white text-sm leading-5">
                  Issued
                </span>{" "}
              </div>
            </div>

            <div className="code font-normal text-lg leading-7">
              <div className="my-5 p-2 bg-bnr-primary text-white rounded-lg">
                Departure Ticket
              </div>
              Booking Code:{" "}
              <span className="font-bold text-lg leading-7 text-[#7126B5]">
                {data?.departureTicket?.booking_code}
              </span>{" "}
            </div>
          </div>

          <div className="info-keberangkatan mt-3 border-b-2 pb-4">
            <div className="departure ">
              <div className="flex justify-between">
                <div className="time font-bold text-base leading-6">
                  {data?.departureTicket?.dateTakeoff}
                </div>
                <div className="text-xs font-bold leading-5 text-[#A06ECE]">
                  Keberangkatan
                </div>
              </div>

              <div className="date font-normal text-sm leading-5">
                {getDateFormat(data?.departureTicket?.dateDeparture)}
              </div>
              <div className="airport font-medium text-sm leading-5">
                {data?.departureTicket?.airport_from}
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
                    {data?.departureTicket?.airlines} -{" "}
                    {data?.departureTicket?.type_seat}
                  </div>
                  <div className="type font-bold text-sm leading-5">
                    {data?.departureTicket?.code}
                  </div>
                </div>
                <div className="font-bold text-sm leading-5">Informasi</div>
                {data?.passengers.map((item, index) => (
                  <>
                    <div className="penumpang">
                      <div className="nama text-sm font-medium text-[#4B1979]">
                        <span>Penumpang {index + 1}:</span>
                        <span> {item.name}</span>
                      </div>
                      <div className="id text-sm">
                        <span>ID :</span>
                        <span>{item.id}</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="info-kedatangan border-b-2 pb-4">
            <div className="arrive">
              <div className="flex justify-between">
                <div className="time font-bold text-base leading-6">21:10</div>
                <div className="text-xs font-bold leading-5 text-[#A06ECE]">
                  Kedatangan
                </div>
              </div>

              <div className="date font-normal text-sm leading-5">
                {data?.departureTicket?.dateLanding}
              </div>
              <div className="airport font-medium text-sm leading-5">
                {data?.departureTicket?.airport_to}
              </div>
            </div>
          </div>
          {data?.returnTicket ? (
            <div className="detail">
              <div className="code font-normal text-lg leading-7">
                <div className="my-5 p-2 bg-bnr-primary text-white rounded-lg">
                  Return Ticket
                </div>
                Booking Code:{" "}
                <span className="font-bold text-lg leading-7 text-[#7126B5]">
                  {data?.returnTicket?.booking_code}
                </span>{" "}
              </div>
              <div className="info-keberangkatan mt-3 border-b-2 pb-4">
                <div className="departure ">
                  <div className="flex justify-between">
                    <div className="time font-bold text-base leading-6">
                      {data?.returnTicket?.dateTakeoff}
                    </div>
                    <div className="text-xs font-bold leading-5 text-[#A06ECE]">
                      Keberangkatan
                    </div>
                  </div>

                  <div className="date font-normal text-sm leading-5">
                    {getDateFormat(data?.departureTicket?.dateDeparture)}
                  </div>
                  <div className="airport font-medium text-sm leading-5">
                    {data?.returnTicket?.airport_from}
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
                        {data?.returnTicket?.airlines} -{" "}
                        {data?.returnTicket?.type_seat}
                      </div>
                      <div className="type font-bold text-sm leading-5">
                        {data?.returnTicket?.code}
                      </div>
                    </div>
                    <div className="font-bold text-sm leading-5">Informasi</div>
                    {data?.passengers.map((item, index) => (
                      <>
                        <div className="penumpang">
                          <div className="nama text-sm font-medium text-[#4B1979]">
                            <span>Penumpang {index + 1}:</span>
                            <span> {item.name}</span>
                          </div>
                          <div className="id text-sm">
                            <span>ID :</span>
                            <span>{item.id}</span>
                          </div>
                        </div>
                      </>
                    ))}
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
                    {data?.returnTicket?.dateLanding}
                  </div>
                  <div className="airport font-medium text-sm leading-5">
                    {data?.returnTicket?.airport_to}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="info-harga mt-2">
            <div className="rincian border-b-2 pb-2">
              <div className="font-bold text-sm leading-5">Rincian Harga</div>
              <div className="ticket-adults flex justify-between text-sm leading-5">
                <div>
                  <span>
                    {data?.total_passenger}
                    {data?.total_passenger > 1 ? " Passengers" : " Passenger"}
                  </span>
                </div>
                <div>IDR {getMoneyFormat(data?.total_price)}</div>
              </div>
            </div>
            <div className="total-harga flex justify-between mt-4">
              <div className="font-bold text-base leading-6">Total</div>
              <div className="font-bold text-lg leading-7 text-[#7126B5]">
                IDR {getMoneyFormat(data?.total_price)}
              </div>
            </div>
          </div>
          <form onSubmit={handlePrintTiket}>
            <div className="button mt-8">
              <button type="submit" className="w-full h-[62px] text-xl leading-7 text-white bg-[#7126B5] rounded-xl">
                Cetak Tiket
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default DetailPemesanan;
