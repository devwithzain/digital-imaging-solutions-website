import Image from "next/image";
import { banner1 } from "@/public";
import { Navbar } from "@/components";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col justify-between items-center pb-10">
			<Navbar />
			<div className="padding-x">
				<Image
					src={banner1}
					alt="vp660_banner"
					className="w-full h-full object-cover"
				/>
			</div>
		</section>
	);
}
