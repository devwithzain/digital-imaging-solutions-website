"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";

export default function Carousel({
	slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}: {
	slides: { id: number; src: StaticImageData }[];
	autoSlide: boolean;
	autoSlideInterval: number;
}) {
	const [curr, setCurr] = useState(0);
	const [hovered, setHovered] = useState(false);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	});
	const goToSlide = (index: number) => {
		setCurr(index);
	};
	return (
		<div
			className="relative w-full overflow-hidden transition-all transform ease-out duration-500 bg-blue-700"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<div
				className="w-full flex transition-all transform ease-out duration-500"
				style={{ transform: `translateX(-${curr * 100}%)` }}>
				{slides.map((slide) => (
					<Image
						key={slide.id}
						src={slide.src}
						alt="img"
						width={1310}
						height={546}
						className="w-auto h-auto object-cover"
					/>
				))}
			</div>
			{hovered && (
				<div className="absolute inset-0 flex items-center justify-between p-[10px]">
					<button
						onClick={prev}
						className="p-[10px] rounded-[50%] shadow-lg bg-white/80 text-gray-800 hover:bg-white group">
						<FaChevronLeft
							size={20}
							className="group-hover:translate-x-[-2px] ease-linear duration-200 group-hover:scale-110"
						/>
					</button>
					<button
						onClick={next}
						className="p-[10px] rounded-[50%] shadow-lg bg-white/80 text-gray-800 hover:bg-white group">
						<FaChevronRight
							size={20}
							className="group-hover:translate-x-[2px] ease-linear duration-200 group-hover:scale-110"
						/>
					</button>
				</div>
			)}
			<div className="absolute bottom-[16px] right-0 left-0">
				<div className="flex items-center justify-center gap-[8px]">
					{slides.map((_, i) => (
						<button
							key={i}
							onClick={() => goToSlide(i)}
							className={`
                transition-all w-[10px] h-[10px] rounded-full
                ${
									curr === i
										? "p-[5px] bg-gray-600"
										: "bg-opacity-75 bg-gray-200"
								}
              `}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
