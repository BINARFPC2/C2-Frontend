import Image from 'next/image';
import TiketImage from '@/assets/images/tiket.png'
import React, { useState} from 'react'

class CardFilterTicket extends React.Component {
    constructor() {
      super();
      this.state = {
        airport_from: "Jakarta",
        airport_to: "Bangkok",
        maskapai: "Air Asia",
        scheduled: "20 - 30 Maret 2023",
        price: "IDR.950000" 
      }
    } 
  
    render() {
      const card = (
        <div className="card bg-white rounded-sm shadow-md border-1">
          <div className="card-body px-2 py-2">
            <div className=''>
              <span className="">
                <Image className='rounded-md' src={TiketImage} width={120} height={90} alt="Tiket" />
              </span>
            </div>
            <div className="card-title text-xs pt-2 font-bold">{this.state.airport_from} - {this.state.airport_to}</div>
            <div className="text-purple-700 text-[10px] font-bold ">{this.state.maskapai}</div>
            <div className="text-[10px]">{this.state.scheduled}</div>
            <div className="text-xs">Mulai dari <span className="text-red-600 font-bold text-[10px]">{this.state.price}</span></div>
          </div>
        </div>
      );
  
      return card;
    } 
}
  
export default CardFilterTicket;