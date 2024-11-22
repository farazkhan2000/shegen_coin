import React from 'react';
import { images } from '../assets/images/assets';

const Tokenomics = () => {
  return (
    <section className='h-[100vh] flex flex-col items-center justify-center gap-12'>
      <div className="container flex items-center justify-center w-1/2">
        <div>
          <img src={images.ShegenAvatar} alt="" />
        </div>
        <div>
          <h2 className='vt323-regular text-6xl w-8'>$SHEGEN TOKENOMICS</h2>
          <div className="border-2 border-white rounded-lg overflow-hidden mt-6">
            <div className="flex">
              <span className="quantico-regular bg-white text-black px-4 py-2 font-bold">
                TOTAL SUPPLY
              </span>
              <span className="quantico-regular mx-auto text-center px-4 py-2 flex-grow">
                1,000,000,000 $SHEGEN
              </span>
            </div>
          </div>
          <p className='quantico-regular mt-8 text-lg w-3/5'>No team allocation, no hidden reserves, no pre-sales.</p>
          <p className='quantico-regular mt-4 text-lg '>100% fair launch for the community.</p>
          <button className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 mt-7 rounded-lg">
            BUY $SHEGEN NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics;
