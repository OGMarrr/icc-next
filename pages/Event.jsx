import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const EventPage = () => {
	const router = useRouter();
	return (
		<>
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
						<div>
							<p className="text-3xl text-center text-success mt-3">News</p>
							<div data-aos="fade-up" data-aos-duration="1500">
								<iframe
									className="w-1/2 mx-auto h-1/2 aspect-video block mt-8 "
									allow="autoplay"
									src="file.mp4"
								/>
							</div>
						</div>
						<div className="bg-secondary pt-4 pb-4 mt-2">
							<div
								className="text-center text-3xl mt-8 text-success"
								data-aos="fade-down"
								data-aos-duration="2500"
							>
								<p>NCRAA Season 29 Men&apos;s Basketball Tournament</p>
								<p>BLUE HAWKS OUSTS RADICALS TO STAY UNBEATABLE</p>
							</div>
							<div
								className="columns-2 mt-8 mb-11"
								data-aos="fade-down"
								data-aos-duration="2500"
							>
								<div className="text-success ml-96">
									<p>
										The Blue Hawks recovered from being rattled to put out a
										93&ndash;57 win against the Polytechnic University of the
										Philippines (PUP) Radicals in the NCRAA Season 29 men&apos;s
										basketball tournament on Thursday, April 13, at the PUP Gym,
										Sta. Mesa, Manila.
									</p>
									<p>
										Jake Gaspay registered a performance of 17 points on top of
										four rebounds for the Blue Hawks, including his defensive
										stops against the Radicals. The Blue Hawks had to dig deep
										to find themselves and maintain their successive standings
										as they were down by nine in the early first quarter. The
										Blue Hawks worked hard to cut down the lead of the Radicals
										by one, 18&ndash;17, to close the first quarter.
									</p>
									<p>
										Going to the second quarter, the team found it difficult to
										make a shot against the defensive Radicals, but after
										Gaspay&apos;s re-entery, the Blue Hawks came to their
										senses, which led to a blistering 15&ndash;2 run in the
										efforts of Alfred Flores and Serafin Duarte&apos;s
										two-pointers to pull themselves within six, 38&ndash;32.
									</p>
									<p>
										The Blue Hawks continued their momentum as they dominated
										the Radicals in the third quarter with a score of
										64&ndash;43.
									</p>
									<p>
										Entering the fourth quarter, the Radicals tried to get a
										run, but Gaspay&apos;s three&ndash;pointer stopped it
										immediately, and it gave way for the Blue Hawks to regain
										the momentum and dominate the last quarter of the game with
										the ending score of 93&ndash;57.
									</p>
									<p>
										In the final seconds of the second quarter, Serafin Duarte
										lost his balance and fell to the ground. As of this writing,
										the Herald team was trying to find out more about
										Duarte&apos;s condition. We hope for a quick recovery and a
										less serious injury.
									</p>
									<p>
										The Blue Hawks&apos; next game will be against the PATTS
										College of Aeronautics Sea Horses on April 17 at the PUP
										Gym, Sta. Mesa, Manila.
									</p>
								</div>
								<div>
									<Image width={600} height={600} src="/bestplayer.png" />
									<Image width={600} height={600} src="/gameb.png" />
								</div>
							</div>
						</div>
						<div
							className="text-center text-3xl mt-8 text-success"
							data-aos="fade-down"
							data-aos-duration="2500"
						>
							<p>BLUE HAWKS TAEKWONDO JINS KICK</p>
							<p>HIGH AT WES GACTCHALIAN LEAGUE</p>
						</div>
						<div
							className="columns-2 mt-8 mb-11 "
							data-aos="fade-down"
							data-aos-duration="2500"
						>
							<div className="text-success ml-96">
								<p>
									The Blue Hawks Taekwondo Team competed in the recently
									concluded 1st Mayor WES GATCHALIAN &ndash; 2023 CAMANAVA AGE
									GROUP TAEKWONDO CHAMPIONSHIPS held at the Wes Arena,
									Valenzuela City on April 2, 2023 where they bested competitors
									from various school teams in Metro Manila.
								</p>
								<p>The team&apos;s proud medalists are:</p>
								<b>Gold Medalists:</b>
								<p>Orlando S. Zaldivar II (Grade 9&ndash;Macapagal)</p>
								<p>Krissha F. Yabo (Grade 11&ndash;HUMSS 3)</p>
								<b>Silver Medalists:</b>
								<p>Rohan Rhylle Sales (Grade 4&ndash;Abueva)</p>
								<p>Nerisa Mae Cardosa (1st year college, BEED&ndash;1B)</p>
								<p>Jerane Sean Severino (Grade 4&ndash;Abueva)</p>
								<p>
									This promising taekwondo team is led by RTA head coach Elmer
									Chua Rafael, and RTA trainer, Mr. JB Mortega.
								</p>
								<p>
									When asked about the performance of the team, Coach Mortega
									stated, &quot;The ICC kids are very competitive. In their
									matches, they almost don&apos;t want to lose to look like they
									won a gold medal even though there are times when they really
									can&apos;t, and you can see it in the kids who really love
									what they&apos;re doing; they don&apos;t stop even though they
									know it&apos;s very difficult.&quot;
								</p>
								<p>
									We are eagerly awaiting this team&apos;s performance in their
									forthcoming matches. The team regularly trains at the ICC gym
									every Saturday and Sunday at 11:00 am to 1:00 pm. Intesrested
									students are welcome to join.
								</p>
								<p>All the best, Blue Hawks! Congratulations!</p>
							</div>
							<div>
								<Image
									width={600}
									height={2500}
									src="/taekwondo.png"
									className="mt-14 pt-8"
								/>
							</div>
						</div>
						<div className="columns-3 ml-64">
							<Image
								width={250}
								height={250}
								src="/taekwondo1.png"
								data-aos="zoom-in"
								data-aos-duration="1000"
							/>
							<Image
								width={250}
								height={250}
								src="/taekwondo2.png"
								data-aos="zoom-in"
								data-aos-duration="2000"
							/>
							<Image
								width={250}
								height={250}
								src="/taekwondo3.png"
								data-aos="zoom-in"
								data-aos-duration="3000"
							/>
						</div>
						<p className="text-center text-success text-3xl mb-14 mt-6">
							BLUE HAWKS TAEKWONDO JINS KICK HIGH
						</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};
export default EventPage;
