import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#fbbf24]'>Immaculada Conception </h1>
        <p className='py-4'>Get in touch with us by filling up this form. We will respond to you shortly.

Soldiers Hills III Subdivision, Barangay 180, Tala, North Caloocan City (10.78 mi) Caloocan, Philippines 1427

+63 709 42 25</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            
            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    
   
    
      </div>
    </div>
  );
};

export default Footer;
