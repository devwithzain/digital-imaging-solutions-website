import React from "react";
import Image from "next/image";
import { performanceIcon, precision } from "@/public";
import Link from "next/link";
import { GrPerformance } from "react-icons/gr";
import { GoWorkflow } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Product() {
	return (
		<section className="w-full padding-x py-20">
			<div className="w-full flex flex-col gap-[150px]">
				<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-8">
					<div className="flex flex-1 flex-col gap-[20px]">
						<div className="flex flex-col gap-3">
							<h4 className="text-[20px] text-black font-medium">Precision</h4>
							<h1 className="text-[40px] text-black font-bold leading-[50px]">
								Unmatched Precision for <br /> Superior 3D Printing
							</h1>
							<p className="text-[18px] font-normal text-black">
								Experience the power of XVICO 3D Printer&apos;s precision
								<br />
								printing capabilities. With its advanced technology and
								<br /> high-quality components, it delivers exceptional accuracy
								and detail in every print.
							</p>
						</div>
						<div className="w-full flex justify-between gap-4 sm:flex-col xm:flex-col">
							<div className="flex flex-col flex-1 gap-[10px]">
								<GrPerformance size={20} />
								<h4 className="text-[20px] text-black font-semibold">
									Reliable Performance
								</h4>
								<p className="text-[14px] font-normal text-black">
									Consistently achieve stunning results with the XVICO 3D
									Printer&abos;s reliable performance and user-friendly
									interface.
								</p>
							</div>
							<div className="flex flex-col flex-1 gap-[10px]">
								<GoWorkflow size={20} />

								<h4 className="text-[20px] text-black font-semibold">
									Efficient Workflow
								</h4>
								<p className="text-[14px] font-normal text-black">
									Streamline your 3D printing process with the XVICO
									Printer&abos;s efficient workflow and intuitive features.
								</p>
							</div>
						</div>
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
					<div className="flex-1 shadow-2xl rounded-2xl">
						<Image
							src={precision}
							alt="product_01_img"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-8">
					<div className="flex flex-1 flex-col gap-[20px]">
						<div className="flex flex-col gap-3">
							<h4 className="text-[20px] text-black font-medium">Discover</h4>
							<h1 className="text-[40px] text-black font-bold leading-[50px]">
								Experience the Power of <br />
								XVICO 3D Printer
							</h1>
							<p className="text-[18px] font-normal text-black">
								The XVICO 3D Printer is a cutting-edge device that brings your
								imagination to life. With its advanced features and
								user-friendly interface, it&apos;s perfect for beginners and
								professionals alike.
							</p>
						</div>
						<div className="w-full flex justify-between gap-4 sm:flex-col xm:flex-col">
							<div className="flex flex-col flex-1 gap-[10px]">
								<GrPerformance size={20} />
								<h4 className="text-[20px] text-black font-semibold">
									Features
								</h4>
								<p className="text-[14px] font-normal text-black">
									High-quality prints, Easy to use, Versatile, Fast printing
									speed, Reliable performance
								</p>
							</div>
							<div className="flex flex-col flex-1 gap-[10px]">
								<GoWorkflow size={20} />

								<h4 className="text-[20px] text-black font-semibold">
									Specifications
								</h4>
								<p className="text-[14px] font-normal text-black">
									Printing technology: FDM, Build volume: 220x220x250mm, Layer
									resolution: 0.1-0.4mm, Connectivity: USB, SD card
								</p>
							</div>
						</div>
						<div className="flex gap-[10px] mt-[10px]">
							<Link
								href="/contact-us"
								className="text-[16px] capitalize text-black font-normal border border-black px-[12px] py-[6px]">
								Buy
							</Link>
							<button className="flex gap-2 text-[16px] capitalize text-black font-normal px-[12px] py-[6px]">
								Learn more
								<MdKeyboardArrowRight
									size={22}
									className="text-gray-600"
								/>
							</button>
						</div>
					</div>
					<div className="flex-1 shadow-2xl rounded-2xl">
						<Image
							src={precision}
							alt="product_01_img"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-8">
					<div className="flex flex-1 flex-col gap-[40px]">
						<div className="flex flex-col gap-3">
							<h1 className="text-[35px] text-black font-semibold leading-[50px]">
								Impressive Build Size
							</h1>
							<p className="text-[18px] font-normal text-black">
								The XVICO 3D Printer offers a large build size, allowing you to
								create bigger and more complex models with ease.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-[35px] text-black font-semibold leading-[50px]">
								Versatile Filament Compatibility
							</h1>
							<p className="text-[18px] font-normal text-black">
								With its wide range of filament compatibility, the XVICO 3D
								Printer supports various materials, giving you the freedom to
								choose the perfect one for your project.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-[35px] text-black font-semibold leading-[50px]">
								Fast Print Speed
							</h1>
							<p className="text-[18px] font-normal text-black">
								Experience quick and efficient printing with the XVICO 3D
								Printers impressive print speed, allowing you to bring your
								ideas to life in no time.
							</p>
						</div>
					</div>
					<div className="flex-1 shadow-2xl rounded-2xl">
						<Image
							src={precision}
							alt="product_01_img"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
