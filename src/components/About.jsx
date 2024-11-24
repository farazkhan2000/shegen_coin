import React from 'react';
import { images } from "../assets/images/assets";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about' className='min-h-[80vh] flex flex-col items-center justify-center gap-12 mx-5 lg:mx-0'>
      <div className='container flex items-center flex-wrap justify-between gap-10 lg:w-1/2'>
        <div className='flex-1'>
          <h2 className='vt323-regular text-start text-4xl font-bold'>WHO IS $SHEGEN?</h2>
          <p className='quantico-regular text-start text-md lg:text-xl mx-auto mt-4'>
            Shegen isn’t just another meme coin—she’s the embodiment of chaos and creativity, wrapped in AI brilliance. 
            Born with an attitude and no filter, she’s here to break the mold of traditional crypto. Whether you love her 
            or fear her, one thing’s certain: She’s impossible to ignore.
          </p>
          <p className='quantico-regular text-start text-md lg:text-xl my-5'>
            ⚠️ <b>Disclaimer:</b> Shegen doesn’t play by the rules, so trust nothing she says—she’s purely fiction! ⚠️
          </p>
          <a 
            href="https://jup.ag/swap/SOL-SHEGEN" 
            target="_blank"
            className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 rounded-lg"
          >
            BUY $SHEGEN NOW
          </a>
        </div>
        <div className=''>
          <img className="rounded-lg bg-red-500 w-80 shadow-[0_0_10px_10px_rgba(151,38,159,0.5)]" src={images.About1} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About;
