import Newsletter from "@/pages/Newsletter";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare, FaMailBulk, FaYahoo } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			{/*  leftside footer */}

			<footer className="footer footer-center p-5 bg-primary">
				<div>
					<Image
						width={150}
						height={75}
						className='  '
						src="/immaculada.png"
						alt="/"
					/>
					<p className="font-bold">IMMACULADA CONCEPTION COLLEGE</p>
					<p className="w-72">
						Immaculada Concepcion College, Soldiers Hills III Subdivision,
						Barangay 180, North Caloocan City, Caloocan, Philippines
					</p>
				</div>
				<div>
					<div className="grid grid-flow-col gap-4">
						<Link href={"https://www.facebook.com/icccaloocan"}>
							<FaFacebookSquare size={30} />
						</Link>
						<Link href={"mailto:<icc_caloocan@yahoo.com.ph>"}>
							<FaYahoo size={30} />
						</Link>
					</div>
				</div>
			</footer>

			{/* <footer className="footer p-10 bg-primary">
				<div className="flex flex-row items-center">
					<Image
						width={120}
						height={60}
						className='  '
						src="/immaculada.png"
						alt="/"
					/>
					<p className="w-64">
						Soldiers Hills III Subdivision, Barangay 180, Tala, North Caloocan
						City (10.78 mi) Caloocan, Philippines 1427
					</p>
				</div>
				<div>
					<span className="footer-title">Social</span>
					<div className="grid grid-flow-col gap-4">
						<Link href={"https://www.facebook.com/icccaloocan"}>
							<FaFacebookSquare size={30} />
						</Link>
						<Link href={"mailto:<icc_caloocan@yahoo.com.ph>"}>
							<FaYahoo size={30} />
						</Link>
					</div>
				</div>
			</footer> */}

			{/* <div className="mx-auto bg-primary flex flex-row mt-10">
				<Image src="/immaculada.png" alt="" width={200} height={100} />

				<div className="mx-60 ">
					<h1 className='w-full text-4xl font-bold md:text-4xl sm:text-3xl  py-2 my-4'>
						Immaculada Conception{" "}
					</h1>
					<p className='py-4'>
						Soldiers Hills III Subdivision, Barangay 180, Tala, North Caloocan
						City (10.78 mi) Caloocan, Philippines 1427
					</p>
					<p>+63 709 42 25</p>
					<div className='flex'>
						<div className="mx-10">
							<Link href={"https://www.facebook.com/icccaloocan"}>
								<FaFacebookSquare size={30} />
							</Link>
						</div>
						<Link href={"mailto:<icc_caloocan@yahoo.com.ph>"}>
							<FaYahoo size={30} />
						</Link>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Footer;
