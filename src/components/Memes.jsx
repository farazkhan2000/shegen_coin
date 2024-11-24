import React from 'react';
import Marquee from "react-fast-marquee";
import { images } from '../assets/images/assets';

const Memes = (prop) => {

  return (
      <div className="flex items-center justify-center mx-4 lg:mx-0">
        <img className='w-full lg:w-1/2' src={images.About2} alt="" />
      </div>
    // <div className=''>
    //   <h2 className='vt323-regular text-center text-4xl font-bold mb-16'>
    //     MEMES BY $SHEGEN COMMUNITY
    //   </h2>
    //   <Marquee pauseOnHover={true} direction={`${prop.direction}`} speed={120} >
    //     <div className='flex items-center gap-6'>
    //       <img className='w-80' src={images.Tweet1} alt="" />
    //       <img className='w-80' src={images.Tweet2} alt="" />
    //       <img className='w-80' src={images.Tweet3} alt="" />
    //       <img className='w-80' src={images.Tweet4} alt="" />
    //       <img className='w-80' src={images.Tweet5} alt="" />
    //       <img className='w-80' src={images.Tweet6} alt="" />
    //       <img className='w-80' src={images.Tweet7} alt="" />
    //       <img className='w-80' src={images.Tweet8} alt="" />
    //       <img className='w-80' src={images.Tweet9} alt="" />
    //     </div>
    //   </Marquee>
    // </div>
  )
}

export default Memes;
