import BtnSearchFavDst from './BtnSearchFavDst';
import CardFilterTicket from './CardFilterTicket';

const FavoriteDestination = () => {

    return (
    <div className='absolute mt-80 px-2 py-2 w-2/3'>
        <div className='flex px-3 mb-3 mt-1'>
            <span className='font-bold'>Destinasi Favorit</span>
        </div>
            
            {/* BUTTON SEARCH */}
            <div className="ml-3 w-80 flex flex-row gap-5">
                
                <BtnSearchFavDst setBtn = {"Semua"} />    
                <BtnSearchFavDst setBtn = {"Asia"} />    
                <BtnSearchFavDst setBtn = {"Amerika"} />    
                <BtnSearchFavDst setBtn = {"Australia"} />    
                <BtnSearchFavDst setBtn = {"Eropa"} />    
                <BtnSearchFavDst setBtn = {"Afrika"} />    
                
            </div>

            {/* CARD */}
            <div className='px-10 my-3 py-2 flex flex-row gap-4 w-full'>
                <CardFilterTicket />
                <CardFilterTicket />
                <CardFilterTicket />
                <CardFilterTicket />
                <CardFilterTicket />
            </div>

    </div>
     )
}

export default FavoriteDestination;