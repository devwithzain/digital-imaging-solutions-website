import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import StaggeredDropDown from "./Dropdown";
export default function Navbar() {
	return (
		<nav className="w-full">
			<Socials />
			<div className="w-full flex justify-between items-center padding-x py-4">
				<div className="sm:w-full xm:w-full flex items-center sm:justify-between xm:justify-between">
					<Link
						href={"/"}
						className="flex gap-4 items-center">
						<Image
							src={logo}
							alt="dis-logo"
							width={50}
							height={50}
							className="w-12 h-12 object-cover"
						/>
					</Link>
					<div className="sm:hidden xm:hidden">
						<h2 className="text-2xl font-semibold">
							Digital Imaging Solutions
						</h2>
					</div>
					<div className="sm:flex hidden xm:flex">
						<MobileNav />
					</div>
				</div>
				<div className="flex items-center gap-2 sm:hidden xm:hidden">
					<Link
						className="text-[17px] font-medium cursor-pointer hover"
						href={"/"}>
						Home
					</Link>
					<Link
						className="text-[17px] font-medium cursor-pointer hover"
						href={"/about-us/"}>
						About Us
					</Link>
					<div>
						<div className="relative inline-block group">
							{/* <button className="text-[17px] font-medium text-black">
								Products
							</button>
							<div className="hidden absolute bg-[#f1f1f1] min-w-[200px] shadow-lg z-10 group-hover:block">
								<Link
									href="/product/3d_printer"
									className="text-black text-[17px] font-medium cursor-pointer py-[12px] px-[16px] block hover:bg-[#ddd]">
									3D Printer
								</Link>
								<Link
									href="/product/digital_label_printer"
									className="text-black text-[17px] font-medium cursor-pointer py-[12px] px-[16px] block hover:bg-[#ddd]">
									Label Printer
								</Link>
								<Link
									href="/product/digtial_die_cutting_machine"
									className="text-black text-[17px] font-medium cursor-pointer py-[12px] px-[16px] block hover:bg-[#ddd]">
									Digital Die Cutting
								</Link>
							</div> */}
							<StaggeredDropDown />
						</div>
					</div>
					<Link
						className="text-[17px] font-medium cursor-pointer hover"
						href={"/contact-us/"}>
						Contact Us
					</Link>
				</div>
			</div>
			{/* <div className="w-full flex-col gap-3 padding-x sm:pt-[100px] xm:pt-[100px] sm:flex xm:flex hidden">
				<h2 className="text-5xl font-semibold">Digital</h2>
				<h2 className="text-5xl font-semibold"> Imaging</h2>
				<h2 className="text-5xl font-semibold">Solutions</h2>
			</div> */}
		</nav>
	);
}
