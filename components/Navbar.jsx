import Image from 'next/image';
import Logo from '@/assets/images/logo.svg'
import Search from '@/assets/images/search.svg'
import Login from '@/assets/images/login.svg'

const Navbar = () => {
    return (
        // Navbar
        <div>
            <div className="drop-shadow-md flex flex-row bg-white pl-4 pb-2 pt-2 items-center sm:pl-32 sm:max-w-80">
                <div className="">
                    <Image src={Logo} width={78} height={33} alt="Picture of the author"/>
                </div>
                <div className="ml-8 w-80">
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <input className="h-8 align-middle placeholder:text-[#8A8A8A] block bg-[#EEEEEE] w-full border rounded-xl py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[#7126B5] focus:ring-1 sm:text-sm" placeholder="Cari disini ..." type="text" name="search" />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <Image src={Search} width={16} height={16} alt="Search icon" />
                        </span>
                    </label>
                </div>
                <div className="flex ml-96 ps-28">
                    <label className="relative block">
                    <button className="w-24 h-8 rounded-xl text-[#FFFFFF] bg-[#7126B5]">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 gap-2">
                        <Image src={Login} width={16} height={16} alt="Search icon" />
                        Masuk
                    </span>
                    </button>
                    </label>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar