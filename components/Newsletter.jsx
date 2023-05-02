import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#fbbf24]'>
            Contact Us
          </h1>
          <p>Get in touch with us by filling up this form. We will respond to you shortly. </p>
          <p>Soldiers Hills III Subdivision, Barangay 180, Tala, North Caloocan City (10.78 mi) Caloocan, Philippines 1427</p>
<p>+63 709 42 25</p>
        </div>

        <div className='my-4'>
          <form className='flex flex-col space-y-4 items-center justify-between w-full'>
            <input
              className='p-3 rounded-md text-black'
              type='text'
              placeholder='Enter Name *'
            />

<div>
            <input
              className='p-3 rounded-md text-black'
              type='email'
              placeholder='Enter Email *'
            />
            </div>

<div>
            <textarea
									placeholder="Your Message"
									rows={4}
									className="p-3 rounded-md text-black"
									name="user_msg"
								/>
                </div>
                

            <button className='bg-[#fbbf24] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Submit
            </button>
          </form>    
          </div>
      </div>
    </div>
  );
};

export default Newsletter;
