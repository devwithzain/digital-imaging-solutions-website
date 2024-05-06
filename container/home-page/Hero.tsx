import { imgItem } from "@/constant";
import { Carousel } from "@/components";

export default function Hero() {
	return (
		<section className="w-full padding-x py-10">
			<div className="w-full flex-col gap-3 sm:pt-[100px] xm:pt-[100px] sm:flex xm:flex hidden pb-[50px]">
				<h2 className="text-5xl font-semibold">Digital</h2>
				<h2 className="text-5xl font-semibold"> Imaging</h2>
				<h2 className="text-5xl font-semibold">Solutions</h2>
			</div>
			<Carousel
				slides={imgItem}
				autoSlide={true}
				autoSlideInterval={5000}
			/>
		</section>
	);
}
