import Link from "next/link";

const AdmissionPage = () => {


return(
    <>
    <div className="text-center mt-5 mb-5">
        <p className="text-3xl">Our Admission</p>
    </div>
	<div className="mb-11">
		<p className="text-center text-xl">Enroll now in 3 simple steps and be out partner for the future.</p>
	</div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-80 mx-auto mt-[-3rem] bg-white'
						src="/school.jpg"
						alt="/"
					/>
					<h3 className='text-2xl font-bold text-center py-8 text-secondary'>01.</h3>

					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>
                        Download the following PDFs files and fill up the correct information:
						</p>
						<p className="text-lg">-Basic Education</p>
						<p className="text-lg">-Basic Education</p>
						<Link href='https://www.immaculada.edu.ph/_files/ugd/c32f05_2c7f3edde0c749da91f3af9eb945b0ad.pdf'>
						<p className="text-lg link link-hover">-College</p>
						</Link>

						
					</div>
					
				</div>

				<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-80 mx-auto mt-[-3rem] bg-white'
						src="/student.jpg"
						alt="/"
					/>
					<h3 className='text-2xl font-bold text-center py-8 text-secondary'>02</h3>

					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>
						Bring form to the school or send your filled up form to the following address:
						</p>
						<p>admission@immaculada.edu.ph</p>
					</div>
				</div>

				<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-80 mx-auto mt-[-3rem] bg-white'
						src="/third.jpg"
						alt="/"
					/>
					<h3 className='text-2xl font-bold text-center py-8 text-secondary'>03</h3>

					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>
						No reservation fees apply. For more information you may call us:
						</p>
						<p>+637094225</p>
					</div>
				</div>
			</div>
    
    
    </>
)



};

export default AdmissionPage;