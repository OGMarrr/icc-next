import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const OrganizationPage = () => {
	const router = useRouter();
	return (
		<>
			<Navbar />
			<AnimatePresence>
				<motion.div
					key={router.route}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{
						duration: 0.75,
					}}
					variants={{
						initialState: {
							opacity: 0,
						},
						animateState: {
							opacity: 1,
						},
						exitState: {},
					}}
					className="base-page-size"
				>
					<div>
						<div className="ml-96 mt-8 mb-8">
							<div
								data-aos="fade-left"
								data-aos-duration="2000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org1.png" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="3000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org2.png" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="2000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org3.png" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="2000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org4.png" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="2000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org5.png" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="2000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org6.png" />
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="2000"
								className="mt-3 mb-3"
							>
								<Image width={1200} height={1200} src="/org7.png" />
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};
export default OrganizationPage;
