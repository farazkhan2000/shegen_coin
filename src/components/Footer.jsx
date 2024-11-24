import React from 'react';
import { SiSolana } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center py-10 border-t border-t-white'>
      <p className='vt323-regular orbitron text-2xl flex justify-center items-center text-center gap-4'>
        POWERED BY  
        <SiSolana size={18} />
        SOL
      </p>
      <p className='vt323-regular poppins text-md lg:text-xl w-full lg:w-3/5 mt-4 text-center pb-4 px-5 lg:px-0'>
        Shegen is a fictional AI meme coin designed for entertainment and engagement. Any financial decisions 
        involving $Shegen should be made with caution, as this project is not investment advice.
      </p>
    </footer>
  )
}

export default Footer;
