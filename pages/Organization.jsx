import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";

const OrganizationPage = () => {
	const router = useRouter();
	return (
		<>
			<Navbar />

			<div>
				<div className=" py-[8rem] px-4">
					<p className="text-3xl  text-center text-success  h-min">
						Organization
					</p>
					<div
						className="mt-8 mb-3 flex justify-center"
						data-aos="fade-up"
						data-aos-duration="800"
					>
						<Image width={1200} height={600} src="/org1.png" />
					</div>
					<div
						className="grid grid-cols-2 mx-40"
						data-aos="fade-up"
						data-aos-duration="2500"
					>
						<div>
							<div className="mt-3 mb-3">
								<Image width={750} height={325} src="/org2.png" />
							</div>
							<div className="mt-3 mb-3">
								<Image width={750} height={325} src="/org3.png" />
							</div>
							<div className="mt-3 mb-3">
								<Image width={750} height={325} src="/org4.png" />
							</div>
						</div>
						<div>
							<div className="mt-3 mb-3">
								<Image width={750} height={325} src="/org5.png" />
							</div>
							<div className="mt-3 mb-3">
								<Image width={750} height={325} src="/org6.png" />
							</div>
							<div className="mt-3 mb-3">
								<Image width={750} height={325} src="/org7.png" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrganizationPage;
