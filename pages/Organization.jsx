import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { Carousel } from "@material-tailwind/react";

const OrganizationPage = () => {
	const router = useRouter();
	return (
		<>
			<Navbar />

			<div>
				<div className="ml-96 mt-8 mb-8">
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org1.png" />
					</div>
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org2.png" />
					</div>
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org3.png" />
					</div>
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org4.png" />
					</div>
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org5.png" />
					</div>
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org6.png" />
					</div>
					<div data-aos="fade-up" data-aos-duration="800" className="mt-3 mb-3">
						<Image width={1200} height={1200} src="/org7.png" />
					</div>
				</div>
			</div>
		</>
	);
};

export default OrganizationPage;
