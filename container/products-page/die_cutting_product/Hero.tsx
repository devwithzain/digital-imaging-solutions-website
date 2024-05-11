import Image from "next/image";
import { Navbar } from "@/components";
import { die_cutting_banner } from "@/public";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col justify-between items-center pb-10">
			<Navbar />
			<div className="padding-x">
				<Image
					src={die_cutting_banner}
					alt="die_cutting_banner"
					className="w-full h-full object-cover"
				/>
			</div>
		</section>
	);
}
