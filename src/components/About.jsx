import React from 'react';

const About = () => {
  return (
    <section id='#about' className='h-[100vh] flex flex-col items-center justify-center gap-12'>
      <div className='container flex flex-col items-center justify-center gap-12'>
        <h2 className='vt323-regular text-center text-8xl font-bold'>WHO IS SHEGEN?</h2>
        <p className='quantico-regular text-center text-3xl w-1/2 mx-auto mt-4'>
          Shegen isn’t just another meme coin—she’s the embodiment of chaos and creativity, wrapped in AI brilliance. 
          Born with an attitude and no filter, she’s here to break the mold of traditional crypto. Whether you love her 
          or fear her, one thing’s certain: She’s impossible to ignore.
        </p>
        <p className='quantico-regular text-center text-3xl w-1/2 mx-auto mt-4'>
          ⚠️ <b>Disclaimer:</b> Shegen doesn’t play by the rules, so trust nothing she says—she’s purely fiction! ⚠️
        </p>
        <button className="vt323-regular text-3xl bg-[#97269f] text-white py-2 px-4 rounded-lg">
          BUY $SHEGEN NOW
        </button>
      </div>
    </section>
  )
}

export default About;
