import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const AdmissionsPage = () => {
	return (
		<>
			<Navbar />

			<div className='w-full py-[10rem] px-4 bg-secondary'>
				<p className="text-success text-3xl text-center">Our Admision</p>
				<p className="text-success text-xl text-center py-10">
					Enroll now in 3 simple steps and be out partner for the future.
				</p>
				<div
					className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '
					data-aos="zoom-out-down"
					data-aos-duration="800"
				>
					<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-primary'>
						<h2 className='text-3xl font-bold text-center py-8 '>01</h2>
						<Image
							width={320}
							height={160}
							className=' mx-auto '
							src="/hum-1.png"
							alt="/"
						/>

						<div className='text-center font-medium'>
							<p className='py-2  mx-8 mt-8'>
								Download the following PDFs files and fill up the correct
								information:
							</p>
							<p>- Basic Education</p>
							<p>- Senior High School</p>
							<Link href="https://www.immaculada.edu.ph/_files/ugd/c32f05_2c7f3edde0c749da91f3af9eb945b0ad.pdf">
								<p className="link">- College</p>
							</Link>
						</div>
					</div>

					<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-primary'>
						<h2 className='text-3xl font-bold text-center py-8 '>02</h2>
						<Image
							width={320}
							height={160}
							className=' mx-auto '
							src="/hum-2.png"
							alt="/"
						/>

						<div className='text-center font-medium'>
							<p className='py-2 mx-8 mt-8'>
								Bring form to the school or send your filled up form to the
								following address:{" "}
								<Link
									href={"mailto:<admission@immaculada.edu.ph>"}
									className="link "
								>
									admission@immaculada.edu.ph
								</Link>
							</p>
						</div>
					</div>

					<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-primary'>
						<h2 className='text-3xl font-bold text-center py-8'>03</h2>

						<Image
							width={320}
							height={160}
							className=' mx-auto '
							src="/hum-4.png"
							alt="/"
						/>

						<div className='text-center font-medium'>
							<p className='py-2  mx-8 mt-8'>
								No reservation fees apply. For more information you may call us:
							</p>
							<p>+63 709 42 25</p>
						</div>
					</div>
				</div>
				<div className="text-success text-center text-xl mt-12 p-5 mb-16">
					<p>
						We shall process your admission and update you with our final
						decision
					</p>
					<p>within 30 days of receiving payment and all documentation.</p>
				</div>
			</div>
		</>
	);
};
export default AdmissionsPage;
