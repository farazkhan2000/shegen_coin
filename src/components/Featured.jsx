import React from 'react';
import Marquee from "react-fast-marquee";
import { icons } from '../assets/icons/assets';

const Featured = (prop) => {

  return (
    <div className='py-16'>
      <h2 className='vt323-regular orbitron text-center text-4xl font-bold mb-16'>
        FEATURED BY
      </h2> 
      <div className='flex items-center justify-center flex-wrap gap-12 lg:gap-24'>
        <a 
          href="https://www.forbes.com/sites/digital-assets/2024/10/18/ai-chatbots-behind-the-latest-memecoin-trend/"
          target='_black'
        >
          <img className='w-48' src={icons.Forbes} alt="" />
        </a>
        <a 
          href="https://www.forbes.com/sites/digital-assets/2024/10/18/ai-chatbots-behind-the-latest-memecoin-trend/"
          target='_black'
        >
          <img className='w-48' src={icons.YahooFinance} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Featured;
