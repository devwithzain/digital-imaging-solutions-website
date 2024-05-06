"use client";
import { motion } from "framer-motion";
import { navLinks } from "@/constant";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const MobileNav = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center md:hidden text-black">
			<RiMenu3Fill
				onClick={() => setToggle(!toggle)}
				className="text-3xl cursor-pointer text-black"
				size={30}
			/>
			{toggle && (
				<motion.div
					initial={{ x: "100%" }}
					animate={{ x: 0 }}
					exit={{ x: "100%" }}
					transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
					className="fixed top-0 bottom-0 right-0 z-50 p-10 w-full h-screen flex justify-end items-end flex-col shadow-md bg-[#f1f1f1]">
					<IoMdClose
						onClick={() => setToggle(!toggle)}
						className="text-3xl cursor-pointer text-black"
						size={30}
					/>
					<ul className="h-full pt-[120px] pb-[20px] w-full flex justify-center text-left flex-col gap-4">
						{navLinks.map((item) => (
							<Link
								href={item.link}
								key={item.link}
								onClick={(toggle) => setToggle(!toggle)}
								className="text-[25px] uppercase font-bold">
								{item.title}
							</Link>
						))}
						<div className="flex w-full h-full justify-end flex-col gap-3">
							<h3 className="text-[25px] uppercase font-bold">Socials</h3>
							<div className="flex items-center gap-3">
								<h3 className="text-[18px] text-black font-semibold">Email:</h3>
								<Link href="mailto:Rizwan@dis.com.pk" className="text-[17px] text-black font-medium">Rizwan@dis.com.pk</Link>
							</div>
							<div className="flex items-center gap-3">
								<h3 className="text-[18px] text-black font-semibold">Contact:</h3>
								<Link href="tel:9221 36729110" className="text-[17px] text-black font-medium"> (+9221) 36729110</Link>
							</div>
							<div className="flex items-center gap-3">
								<Link href={"https://www.facebook.com/digitalImagingsolution/"} className="bg-[#1877F2] p-2 text-white rounded-full">
									<FaFacebook size={22} />
								</Link>
								<Link href={"https://www.instagram.com/digital_imaging_solutions/"} className="bg-[#cd486b] p-2 text-white rounded-full">
									<FaInstagram size={22} />
								</Link>
								<Link href={"https://pk.linkedin.com/company/digital-imaging-solutions"} className="bg-[#0077B5] p-2 text-white rounded-full">
									<FaLinkedin size={22} />
								</Link>
							</div>
						</div>
					</ul>
				</motion.div>
			)}
		</div>
	);
};

export default MobileNav;