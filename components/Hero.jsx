import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#fbbf24] text-2xl font-bold p-2'>
          Our Mission & Vision
        </p>
        <p className='md:text-lg sm:text-lg text-lg font-bold md:py-6'>
        Immaculada Concepcion College aims to provide high quality education designed to nurture highly-skilled, well rounded and confident life-long learners to be productive contributors of the global society.
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            ICC Offers
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['Primary', 'Highschool', 'Tertiary']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-1xl text-xl font-bold text-gray-500'>We offer various courses to cater to every students' individuality and provide them with guided education as a stable stepping stone to their career. </p>
        <button className='bg-[#fbbf24] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
