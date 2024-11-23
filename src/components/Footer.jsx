import React from 'react';
import { SiSolana } from "react-icons/si";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 border-t border-t-white'>
      <p className='vt323-regular text-2xl flex justify-center items-center text-center gap-4'>
        POWERED BY  
        <SiSolana size={18} />
        SOL
      </p>
      <p className='vt323-regular text-xl w-1/2 mt-4 text-center pb-4'>
        Shegen is a fictional AI meme coin designed for entertainment and engagement. Any financial decisions 
        involving $Shegen should be made with caution, as this project is not investment advice.
      </p>
    </div>
  )
}

export default Footer;
