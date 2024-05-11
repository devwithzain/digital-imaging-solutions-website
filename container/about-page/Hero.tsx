import Image from "next/image";
import { banner2 } from "@/public";
import { Navbar } from "@/components";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col justify-between items-center pb-10">
			<Navbar />
			<div className="w-full relative padding-x">
				<Image
					src={banner2}
					alt="vp660_banner"
					className="w-full h-full object-cover blur-[2px]"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<p className="text-white uppercase text-7xl font-bold">About Us</p>
				</div>
			</div>
		</section>
	);
}
