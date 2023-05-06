import React from "react";
import Typed from "react-typed";
import Image from "next/image";

const Hero = () => {
	return (
		<>
			<div className="text-base-content ">
				<div className='h-screen'>
					{/* bg */}

					<div
						style={{
							backgroundImage: "url('/bg-kopi.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						className="h-5/6 w-auto bg-fixed"
					>
						<div
							className="grid grid-cols-2 text-center p-24  "
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="mt-14">
								<p className='text-3xl font-bold p-2'>Our Mission & Vision</p>
								<p className='md:text-lg sm:text-lg text-lg font-medium md:py-6 '>
									Immaculada Concepcion College aims to provide high quality
									education designed to nurture highly-skilled, well rounded and
									confident life-long learners to be productive contributors of
									the global society.
								</p>
								<p className="md:text-lg sm:text-lg text-lg font-medium md:py-6">
									We envision to develop globally competent leaders who possess
									a strong sense of self direction and passion for excellence.
								</p>

								<div className='flex flex-row items-center justify-center'>
									<p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
										ICC Offers
									</p>
									<div>
										<Typed
											className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
											strings={["Primary", "Highschool", "Tertiary"]}
											typeSpeed={120}
											backSpeed={140}
											loop
										/>
									</div>
								</div>
								<p className='md:text-1xl text-xl font-medium'>
									We offer various courses to cater to every students&apos;
									individuality and provide them with guided education as a
									stable stepping stone to their career.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>

				<p className="text-2xl font-bold text-center mb-5">
					Welcome to Immaculada Concepcion College !
				</p>

				<div className="flex flex-row mt-10 w-full max-w-screen-2xl mx-auto gap-10 ">
					<Image
						src="/grad.jpg"
						width={450}
						height={225}
						alt=""
						className="mb-10"
						data-aos="fade-up"
						data-aos-duration="800"
					/>
					<div
						className="text-justify mx-10"
						data-aos="fade-up"
						data-aos-duration="2500"
					>
						<p>
							Our commitment here at ICC is to provide a safe and intellectually
							challenging environment that will empower students to become
							innovative thinkers, creative problem solvers and inspired
							learners prepared to thrive in the twenty-first century. High
							standards and expectations for each student in regard to academic
							performance, co-curricular participation, and responsible
							citizenship are the foundation of our school.
						</p>
						<p className="mt-2">
							It is with pride that we hold these high standards and ask each of
							our students to commit to maintaining the extraordinary record of
							achievement and contribution that has been the legacy of ICC
							students. It is the contribution of our students to our school
							community that makes Immaculada Concepcion College an
							extraordinary learning community. Full participation in academic
							and co-curricular programs and a willingness to act responsibly as
							an individual within our educational environment are the factors
							that enable all to have a successful and enjoyable year. It gives
							me great pleasure, as Principal of Immaculada Concepcion College,
							to welcome you to the official ICC website.
						</p>
						<p className="mt-2">
							This website has been prepared as a valuable source of school news
							and timely information for parents, students, and visitors. This
							website has been developed to enable everyone to become familiar
							with our school, its policies, and other procedures that are basic
							for the smooth functioning of our school, as well as to provide
							you with updated school news, schedules and events. Our school has
							a very long tradition and our staff takes great pride in providing
							a safe and secure learning environment, while at the same time
							offering a wide array of exciting and challenging academic
							programs. Our extensive menu of extracurricular activities, both
							academic and recreational, is unsurpassed.
						</p>
						<p className="mt-2">
							Our entire staff is committed to establishing a school environment
							that allows our students to flourish and to grow intellectually,
							emotionally, and socially. Our website will be updated regularly
							so as to provide visitors to it with updated notices and bulletins
							and other news on a variety of subjects. I hope you will find this
							site both helpful and easy to navigate. Mabuhay Immaculadians!
						</p>
						<p className="font-bold mt-2">Marcelino V. Agana, ICC President</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
