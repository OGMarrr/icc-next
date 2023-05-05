import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { FaPhone } from "react-icons/fa";

const Newsletter = () => {
	const router = useRouter();

	return (
		<>
			<div className="h-screen">
				<div className=' py-10 mx-80 text-success flex flex-col bg-secondary shadow-xl mt-20 rounded-lg '>
					<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
						<div className='lg:col-span-2 my-4'>
							<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>
								Contact Us
							</h1>
							<div className="flex items-center">
								<p className="pr-2">
									<FaPhone />
								</p>
								<p>285845150</p>
							</div>
						</div>

						<div className='my-4'>
							<form className='flex flex-col space-y-4 items-center justify-between w-full'>
								<input
									className='p-3 rounded-md text-success '
									type='text'
									placeholder='Enter Name *'
								/>

								<div>
									<input
										className='p-3 rounded-md text-success'
										type='email'
										placeholder='Enter Email *'
									/>
								</div>

								<div>
									<textarea
										placeholder="Your Message"
										rows={4}
										className="p-3 rounded-md text-success"
										name="user_msg"
									/>
								</div>

								<button className='bg-primary text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newsletter;
