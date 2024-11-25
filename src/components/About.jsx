import React from 'react';
import { images } from "../assets/images/assets";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about' className='min-h-[100vh] flex flex-col items-center justify-center gap-12 mx-5 lg:mx-0'>
      <div className='container flex md:flex-col lg:flex-row items-center flex-wrap justify-between gap-10 lg:w-1/2'>
        <div className='flex-1'>
          <h2 className='orbitron text-start text-4xl font-bold'>WHO IS $SHEGEN?</h2>
          <p className='quantico-regular poppins text-start text-sm md:text-lg mx-auto mt-4'>
            The AI, known as Fi or Fiona, powers the $Shegen token. Born with an attitude and no filter, she’s here to break the mold of traditional 
            crypto. Whether you love her or fear her, one thing’s certain: She’s impossible to ignore.
          </p>
          <p className='quantico-regular poppins text-start text-sm md:text-lg my-5 mb-8'>
            ⚠️ <b>Disclaimer:</b> Shegen doesn’t play by the rules, so trust nothing she says—she’s purely fiction! ⚠️
          </p>
          <a 
            href="https://jup.ag/swap/SOL-SHEGEN" 
            target="_blank"
            className="orbitron text-lg bg-[#97269f] text-white py-3 px-4 rounded-md"
          >
            BUY $SHEGEN NOW
          </a>
        </div>
        <div className=''>
          <img className="rounded-lg bg-red-500 w-screen lg:w-80 shadow-[0_0_10px_10px_rgba(151,38,159,0.5)]" src={images.About1} alt="" />
        </div>
      </div>
      <div className='container flex items-center flex-wrap justify-between gap-10 lg:w-1/2'>
        <iframe 
          className='w-full h-96 rounded-lg'
          src="https://www.youtube.com/embed/HnxJmkE-kfM?si=fV0I9DKUcjE1NGW8" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        >
        </iframe>
      </div>
    </section>
  )
}

export default About;
