import React from 'react';
import { toast } from 'react-toastify';
import { MdOutlineContentCopy } from "react-icons/md";
import { images } from '../assets/images/assets';

const Hero = () => {

  const copyAddress = () => {
    const address = "2KgAN8nLAU74wjiyKi85m4ZT6Z9MtqrUTGfse8Xapump";
    navigator.clipboard.writeText(address).then(() => {
      toast.success("Address copied to clipboard!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  }

  return (
    <section className="flex flex-col items-center gap-16">
      <h1 className="vt323-regular text-center text-8xl font-bold">
        $SHEGEN <span className='text-[#97269f]'>MEME AI</span>
      </h1>
      <img
        className="rounded-full bg-red-500 w-80 shadow-[0_0_10px_10px_rgba(151,38,159,0.5)]"
        src={images.ProfileImage}
        alt=""
      />
      <div className="flex flex-col items-center gap-8">
        <h2 onClick={copyAddress} className="vt323-regular text-3xl py-2 px-3 bg-white text-black uppercase cursor-copy flex items-center gap-1 rounded-lg">
          CA: 2KgAN8nLAU74wjiyKi85m4ZT6Z9MtqrUTGfse8Xapump
          <span className='pl-2'>
            <MdOutlineContentCopy size={24} />
          </span>
        </h2>
        <button className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 rounded-lg">
          BUY $SHEGEN NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
