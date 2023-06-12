import Image from 'next/image';
import Search from '@/assets/images/search.svg'

function BtnSearchFavDst(props) {
    return (
        <label className="relative block">
        <button className="h-8 px-4 pl-8 font-medium hover:bg-[#7126B5] hover:text-white text-white text-xs align-middle block bg-[#B792D9] border rounded-xl shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[#7126B5] focus:ring-1 sm:text-sm" placeholder="Semua" type="text" name="search">
            <span className="absolute flex items-center pt-1 -ml-4">
                <Image src={Search} width={12} height={12} alt="Search icon" />
            </span>
            {props.setBtn}
        </button>
        </label>
    );
}

export default BtnSearchFavDst;