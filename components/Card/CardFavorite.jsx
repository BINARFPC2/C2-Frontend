import Image from "next/image";
import FavoriteImage from "@/assets/images/favorite-card.png"
import { getMoneyFormat } from "@/utils/formatMoney";

const CardFavorite = ({ from, to, airline, availableDate, price }) => {
    return (
        <div className="max-w-md bg-white border border-gray-200 rounded-md shadow p-3">
            <Image className="rounded-t-lg w-full" src={FavoriteImage} alt="cardFavorite" />
            <div className="space-y-1 pt-2">
                <h5 className="text-xs font-bold tracking-tight text-gray-900">{from} {"->"} {to}</h5>
                <p className="text-[10px] text-bnr-primary font-bold">{airline}</p>
                <p className="text-[10px]">{availableDate}</p>
                <p className="text-xs">Mulai dari <span className="text-[#FF0000] font-bold">IDR {getMoneyFormat(price)}</span></p>
            </div>
        </div>
    )
}

export default CardFavorite