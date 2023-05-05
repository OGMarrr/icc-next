import Link from "next/link";

const AdmissionsPage = () => {
	return (
		<>
			<div className="p-11 h-screen">
				<div>
					<p className="text-success text-3xl text-center">Our Admision</p>
					<p className="text-success text-xl text-center">
						Enroll now in 3 simple steps and be out partner for the future.
					</p>
				</div>
				<div className="columns-3 text-success ml-10 p-10 ">
					<div className="p-7 mt-8">
						<p className="text-4xl text-center">01</p>
						<p>
							Download the following PDFs files and fill up the correct
							information:
						</p>
						<p>- Basic Education</p>
						<p>- Senior High School</p>
						<Link href="https://www.immaculada.edu.ph/_files/ugd/c32f05_2c7f3edde0c749da91f3af9eb945b0ad.pdf">
							<p>- College</p>
						</Link>
					</div>
					<div className="p-14 mt-10">
						<p className="text-4xl text-center">02</p>
						<p>
							Bring form to the school or send your filled up form to the
							following address:admission@immaculada.edu.ph
						</p>
					</div>
					<div className="p-14 mt-10">
						<p className="text-4xl text-center">03</p>
						<p>
							No reservation fees apply. For more information you may call us:
							+63 709 42 25
						</p>
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
