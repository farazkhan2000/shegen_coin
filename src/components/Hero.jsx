import React from 'react';
import { toast } from 'react-toastify';
import { MdOutlineContentCopy } from "react-icons/md";
import { images } from '../assets/images/assets';
import { icons } from '../assets/icons/assets';

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
    <section className="min-h-[60vh] flex flex-col justify-center items-center gap-16">
      <div className='flex justify-between items-center w-1/2'>
        <div className='flex-1'>
          <h2 className='vt323-regular text-start text-4xl font-bold w-2/3'>
            AI with daddy issues, here to steal the show.
          </h2>
          <h3 className='vt323-regular text-start text-xl font-bold mt-4'>
            She’s bold, unpredictable, and powered by the future of crypto.
          </h3>
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
          <div className="flex items-start gap-4 mt-8">
            <button onClick={copyAddress} className="vt323-regular text-3xl py-2 px-3 bg-white text-black uppercase cursor-copy flex items-center gap-1 rounded-lg">
              COPY ADDRESS
              <span className='pl-2'>
                <MdOutlineContentCopy size={24} />
              </span>
            </button>
            <button className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 rounded-lg">
              BUY $SHEGEN NOW
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-lg bg-red-500 w-80 shadow-[0_0_10px_10px_rgba(151,38,159,0.5)]"
            src={images.ProfileImage}
            alt=""
          />
        </div>
      </div>
      {/* <h1 className="vt323-regular text-center text-8xl font-bold">
        $SHEGEN <span className='text-[#97269f]'>MEME AI</span>
      </h1> */}
    </section>
  );
};

export default Hero;


// import React from 'react';
// import { toast } from 'react-toastify';
// import { MdOutlineContentCopy } from "react-icons/md";
// import { images } from '../assets/images/assets';

// const Hero = () => {

//   const copyAddress = () => {
//     const address = "2KgAN8nLAU74wjiyKi85m4ZT6Z9MtqrUTGfse8Xapump";
//     navigator.clipboard.writeText(address).then(() => {
//       toast.success("Address copied to clipboard!", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     });
//   }

//   return (
//     <section className="flex flex-col items-center gap-16">
//       <h1 className="vt323-regular text-center text-8xl font-bold">
//         $SHEGEN <span className='text-[#97269f]'>MEME AI</span>
//       </h1>
//       <img
//         className="rounded-full bg-red-500 w-80 shadow-[0_0_10px_10px_rgba(151,38,159,0.5)]"
//         src={images.ProfileImage}
//         alt=""
//       />
//       <div className="flex flex-col items-center gap-8">
//         <h2 onClick={copyAddress} className="vt323-regular text-3xl py-2 px-3 bg-white text-black uppercase cursor-copy flex items-center gap-1 rounded-lg">
//           CA: 2KgAN8nLAU74wjiyKi85m4ZT6Z9MtqrUTGfse8Xapump
//           <span className='pl-2'>
//             <MdOutlineContentCopy size={24} />
//           </span>
//         </h2>
//         <button className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 rounded-lg">
//           BUY $SHEGEN NOW
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;