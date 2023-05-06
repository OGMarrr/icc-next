import Image from "next/image";
import Link from "next/link";

const affiliation = [
	{
		image: "/deped.png",
		href: "https://www.deped.gov.ph",
	},
	{
		image: "/PEAC.png",
		href: "https://peac.org.ph",
	},
	{
		image: "/Qualimed.png",
		href: "https://qualimedpharma.com.ph",
	},
	{
		image: "/CABALEN.jpg",
		href: "https://cabalengroup.ph",
	},
	{
		image: "/Phlpost.png",
		href: "https://phlpost.gov.ph",
	},
	{
		image: "/gerrys.png",
		href: "http://gerrysgrill.com",
	},
	{
		image: "/ched.png",
		href: "https://ched.gov.ph",
	},
	{
		image: "/NCRAA1.png",
		href: "https://www.facebook.com/ncraa1993/",
	},
	{
		image: "/NPSAC.jpg",
		href: "https://www.facebook.com/npsac2013/",
	},
	{
		image: "/ISAA1.png",
		href: "https://www.facebook.com/isaaexecutives/",
	},
	{
		image: "/ISAAL.png",
		href: "https://www.facebook.com/isaal2007/",
	},
	{
		image: "/pagibig.png",
		href: "https://www.pagibigfund.gov.ph",
	},
	{
		image: "/TURISTA.jpg",
		href: "https://www.facebook.com/HotelTuristaSanJose/",
	},
	{
		image: "/frog.png",
		href: "https://www.egetinnz.com",
	},
	{
		image: "/Caloocan1.png",
		href: "",
	},
	{
		image: "/COA.png",
		href: "https://www.coa.gov.ph",
	},
];

const AffliatesPage = () => {
	return (
		<>
			<div className='mt-16 text-success text-center'>
				<p className="text-3xl font-bold mb-10">Affiliates</p>
			</div>

			<div
				className='grid grid-cols-8 w-full max-w-7xl mx-auto  mb-20 items-center '
				// data-aos="fade-up"
				// data-aos-duration="800"
			>
				{affiliation.map((item, index) => (
					<Link key={`affiliation_${index + 1}`} href={item.href}>
						<Image width={200} height={100} src={item.image} alt="" />
					</Link>
				))}
			</div>
		</>
	);
};

export default AffliatesPage;
