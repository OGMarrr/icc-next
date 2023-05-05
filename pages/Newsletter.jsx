import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { FaEnvelope, FaFolder, FaPhone } from "react-icons/fa";

const Newsletter = () => {
	const router = useRouter();

	return (
		<>
			<Navbar />

			<div className="h-screen">
				<div
					className=' py-10 mx-80 text-success flex flex-col bg-secondary shadow-xl mt-20 rounded-lg'
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
						<div className='lg:col-span-2 my-4'>
							<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-5 '>
								Contact Us
							</h1>
							<p className="w-80 text-lg">
								Get in touch with us by filling up this form. We will respond to
								you shortly.{" "}
							</p>

							<div className="flex items-center text-lg mt-4">
								<p className="pr-2 ">
									<FaPhone />
								</p>
								<p>285845150</p>
							</div>
							<div className="flex items-center text-lg">
								<p className="pr-2">
									<FaEnvelope />
								</p>
								<p>icc_caloocan@yahoo.com.ph</p>
							</div>
						</div>

						<div className='my-4 bg-neutral rounded-btn shadow-lg p-5 px-0 lg:px-5 max-w-xl '>
							<form className='flex flex-col space-y-4'>
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
										className="p-3 rounded-md text-success ml-2"
										name="user_msg"
									/>
								</div>

								<button className='bg-primary ml-2 text-white rounded-md font-medium w-[200px]  my-6 px-6 py-3'>
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
