import React, { useEffect } from "react";
import Image from "next/image";
import CloseCircle from "@/assets/x-circle.svg";




const MustLogin = ({ show, onClose }) => {
  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';

    return () => {
      document.body.style.overflow = 'visible'; // Reset overflow saat komponen dilepas
    };
  }, [show]);

  return (
    <>
      {show && (
      <div className="must-login fixed inset-0 pt-28 flex justify-center mx-auto backdrop-blur overflow-hidden">
        <div className="flex justify-center items-center w-[936px] h-[50px] mx-2 rounded-lg bg-[#FF0000]">
          <div className="w-full flex justify-center items-center text-white font-medium text-lg leading 7">
            Anda harus login terlebih dahulu!
          </div>
          <div className="flex items-end mr-2">
          <button onClick={onClose}>
            <Image
              src={CloseCircle}
              width={36}
              height={36}
              alt=""
              />
          </button>
          </div>

        </div>

      </div>
    )}
    </>
  );
};

export default MustLogin;
