
import React from 'react';

const SliderCard = ({ image, name }) => {
  return (
    <div className="relative overflow-hidden sliderCardMob" style={{width:'391px',height:'552px'}}>
        <div className="absolute inset-0 changeBg opacity-50"></div>
      <img src={image} alt="Card" className="slickImage"/>
      <div className="absolute inset-0 flex items-end justify-center text-white font-martelSans font-bold uppercase text-2xl mb-5 leading-32 tracking-normal">
         <div className="text-center text-white font-semibold">{name}</div>
       </div>
    </div>
  );
}

export default SliderCard;
