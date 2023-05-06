import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className='bg-primary flex justify-between items-center h-20  mx-auto px-4 md:flex md:items-center md:justify-between'>
			<Image
				className=' mt-28 mx-5'
				height={80}
				width={160}
				src="/immaculada.png"
				alt="/"
			/>

			<h1 className='w-full text-xl font-bold '>
				IMMACULADA CONCEPTION COLLEGE{" "}
			</h1>

			<ul className='hidden md:flex md:items-center items-center gap-5 mx-5'>
				<li className="">
					<Link href='/'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className="p-4 hover:bg-accent rounded-xl"
						>
							Home
						</motion.button>
					</Link>
				</li>

				<li className="">
					<Link href="/Event">
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='p-4 hover:bg-accent rounded-xl'
						>
							Events
						</motion.button>
					</Link>
				</li>

				<li className="">
					<Link href="/Admission">
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='p-4 hover:bg-accent rounded-xl'
						>
							Admissions
						</motion.button>
					</Link>
				</li>

				<li className="">
					<Link href="/Organization">
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='p-4 hover:bg-accent rounded-xl'
						>
							Organization
						</motion.button>
					</Link>
				</li>

				<li className="">
					<Link href="/Newsletter">
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='p-4 hover:bg-accent rounded-xl'
						>
							Contact
						</motion.button>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
