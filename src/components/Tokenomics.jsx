import React from 'react';
import { images } from '../assets/images/assets';
import { MdOutlineContentCopy } from 'react-icons/md';

const Tokenomics = () => {

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
    <section className='min-h-[100vh] flex flex-col items-center justify-center gap-12'>
      <div className="container w-1/2">
        <div>
          <h2 className='vt323-regular text-4xl'>$SHEGEN TOKENOMICS</h2>
          <div className='flex items-center justify-between gap-3'>
            <div className="border-2 border-white rounded-lg overflow-hidden mt-6">
              <div className="flex">
                <span className="quantico-regular bg-white text-black px-4 py-2 font-bold">
                  TOTAL SUPPLY
                </span>
                <span className="quantico-regular mx-auto text-center px-14 py-2 flex-grow">
                  1,000,000,000 $SHEGEN
                </span>
              </div>
            </div>
            <div className="border-2 border-white rounded-lg overflow-hidden mt-6">
              <div className="flex">
                <span className="quantico-regular bg-white text-black px-4 py-2 font-bold">
                  TOTAL SUPPLY
                </span>
                <span className="quantico-regular mx-auto text-center px-14 py-2 flex-grow">
                  1,000,000,000 $SHEGEN
                </span>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className="border-2 border-white rounded-lg overflow-hidden mt-6">
              <div className="flex">
                <span className="quantico-regular bg-white text-black px-4 py-2 font-bold">
                  TOTAL SUPPLY
                </span>
                <span className="quantico-regular mx-auto text-center px-14 py-2 flex-grow">
                  1,000,000,000 $SHEGEN
                </span>
              </div>
            </div>
            <div className="border-2 border-white rounded-lg overflow-hidden mt-6">
              <div className="flex">
                <span className="quantico-regular bg-white text-black px-4 py-2 font-bold">
                  TOTAL SUPPLY
                </span>
                <span className="quantico-regular mx-auto text-center px-14 py-2 flex-grow">
                  1,000,000,000 $SHEGEN
                </span>
              </div>
            </div>
          </div>
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
          <div className='mt-7 flex items-center gap-3'>
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
      </div>
    </section>
  )
}

export default Tokenomics;
