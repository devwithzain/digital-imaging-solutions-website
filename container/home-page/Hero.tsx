import { imgItem } from "@/constant";
import { Carousel, Navbar } from "@/components";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col justify-between items-center pb-10">
			<Navbar />
			<div className="w-full flex-col gap-3 sm:pt-[100px] xm:pt-[100px] sm:flex xm:flex hidden pb-[50px]">
				<h2 className="text-5xl font-semibold">Digital</h2>
				<h2 className="text-5xl font-semibold"> Imaging</h2>
				<h2 className="text-5xl font-semibold">Solutions</h2>
			</div>
			<div className="padding-x">
				<Carousel
					slides={imgItem}
					autoSlide={true}
					autoSlideInterval={5000}
				/>
			</div>
		</section>
	);
}
