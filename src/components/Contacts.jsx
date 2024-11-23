import React from 'react';
import { icons } from '../assets/icons/assets';
import { Link } from 'react-router-dom';
 
const Contacts = () => {
  return (
    <section id='#contact' className='flex flex-col items-center justify-center py-40'>
      <div className='container w-1/2'>

        <h2 className='vt323-regular text-start text-4xl font-bold'>$SHEGEN'S COMMUNITY</h2>
        <p className='quantico-regular text-start text-xl mx-auto mt-4'>
          Shegen thrives on her squad—memers, believers, and chaos lovers alike. Join the community to stay updated, 
          share your favorite memes, and ride the wave of her digital dominance.
        </p>
        <div className='flex items-center gap-3 mt-6'>
          <a href="https://dexscreener.com/solana/5qnad6iofs8k4p7i9pbkty36bfacixevjpxbz2d8y5cy" target="_blank">
            <img className='w-10' src={icons.DexScreener} alt="" />
          </a>
          <a href="https://x.com/aiwdaddyissues" target="_blank">
            <img className='w-10' src={icons.Telegram} alt="" />
          </a>
          <a href="https://x.com/aiwdaddyissues" target="_blank">
            <img className='w-10' src={icons.Twitter} alt="" />
          </a>
        </div>
        <button className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 mt-6 rounded-lg">
          BUY $SHEGEN NOW
        </button>

      </div>
    </section>
  )
}

export default Contacts;
