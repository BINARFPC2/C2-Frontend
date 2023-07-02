import Image from "next/image";
import CloseCircle from "@/assets/x-circle.svg";


const DataSave = () => {
  return (
    <>
      <div className="data-save w-full absolute flex justify-center mx-auto -mt-14">
        <div className="flex justify-center items-center w-[936px] h-[50px] rounded-lg bg-[#73CA5C] mx-2">
          <div className="w-full flex justify-center items-center text-white font-medium md:text-lg p-2  leading 7">
            Data Anda berhasil tersimpan!
          </div>
        </div>

      </div>

    </>
  );
};

export default DataSave;
