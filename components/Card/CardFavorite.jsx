import Image from "next/image";
import FavoriteImage from "@/assets/images/favorite-card.png"
import { getMoneyFormat } from "@/utils/helper";

const CardFavorite = ({ from, to, airline, availableDate, price }) => {
    return (
        <div className="max-w-md p-3 bg-white border border-gray-200 rounded-md shadow">
            <Image className="w-full rounded-t-lg" src={FavoriteImage} alt="cardFavorite" />
            <div className="pt-2 space-y-1">
                <h5 className="text-xs font-bold tracking-tight text-gray-900">{from} {"->"} {to}</h5>
                <p className="text-[10px] text-bnr-primary font-bold">{airline}</p>
                <p className="text-[10px]">{availableDate}</p>
                <p className="text-xs">Mulai dari <span className="text-[#FF0000] font-bold">IDR {getMoneyFormat(price)}</span></p>
            </div>
        </div>
    )
}

export default CardFavorite