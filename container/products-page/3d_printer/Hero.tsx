import Image from "next/image";
import { printer_banner } from "@/public";
import Link from "next/link";
import { Navbar } from "@/components";

export default function Hero() {
	return (
		<section className="w-full h-screen flex flex-col pb-10">
			<Navbar />
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full flex padding-x sm:flex-col xm:flex-col justify-between gap-[10px]">
					<div className="flex flex-1 flex-col gap-[10px]">
						<h1 className="text-[60px] sm:text-[40px] xm:text-[40px] text-black font-bold leading-[70px] sm:leading-[50px] xm:leading-[50px]">
							Unleash your <br /> creativity with <br /> XVICO 3D Printer
						</h1>
						<p className="text-[18px] font-normal text-black">
							Experience the power of 3D printing technology and bring your
							ideas <br /> to life. With XVICO, you can easily create
							prototypes, models, and functional <br />
							objects with precision and ease.
						</p>
						<div className="flex gap-[10px] mt-[10px]">
							<button className="text-[16px] capitalize text-white font-normal bg-black px-[12px] py-[6px]">
								Learn more
							</button>
							<Link
								href="/contact-us"
								className="text-[16px] capitalize text-black font-normal border border-black px-[12px] py-[6px]">
								Buy now
							</Link>
						</div>
					</div>
					<div className="flex flex-1">
						<Image
							src={printer_banner}
							alt="3d_printer_img"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
