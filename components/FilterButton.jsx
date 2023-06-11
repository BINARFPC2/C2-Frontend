import React, { useState } from 'react';
import Image from 'next/image';

const FilterButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
            <div className="filter-drop flex justify-end ">
              <button className="h-8 mt-8 flex gap-2.5 items-center justify-self-center rounded-2xl w-28 font-medium text-xs leading-5 text-[#7126B5] border-solid border-2 border-[#A06ECE]"
              onClick={() => setShowModal(true)}
              >

                <div className="flex mx-auto">
                  <Image
                    className="items-center"
                    src="/arrow_updown.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <h2>Termurah</h2>
                </div>

              </button>
            </div>
    </>
  );
};

export default FilterButton
