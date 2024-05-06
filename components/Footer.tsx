import Link from "next/link";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";

export default function Footer() {
	const copywrightYear = new Date();
	return (
		<section className="w-full pt-10 bg-black">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-10 pb-8 padding-x">
				<div className="flex-[1.2] flex flex-col gap-6">
					<h2 className="text-2xl text-white font-semibold">About Us</h2>
					<p className="text-sm leading-[25px] tracking-wider text-white">
						We are Digital Imaging Solution Provider, dealing in equipments and
						consumables, We specialised in Prepress, Digital Label Printing &
						DryFilm CTF equipments for Print & Production in Industry, we have
						Customers Nationwide.
					</p>
				</div>
				<div className="flex-1 flex flex-col gap-6">
					<h2 className="text-2xl text-white font-semibold">Products</h2>
					<div className="flex items-center">
						<MdKeyboardArrowRight
							size={22}
							className="text-white"
						/>
						<Link
							href={"/product/digital_label_printer"}
							className="text-sm text-white">
							Digital Label Printer
						</Link>
					</div>
					<div className="flex items-center">
						<MdKeyboardArrowRight
							size={22}
							className="text-white"
						/>
						<Link
							href={"/product/digtial_die_cutting_machine"}
							className="text-sm text-white">
							Digtial DieCutting machine
						</Link>
					</div>
				</div>
				<div className="flex-[0.5] flex flex-col gap-6">
					<h2 className="text-2xl text-white font-semibold">Links</h2>
					<div className="flex items-center">
						<MdKeyboardArrowRight
							size={22}
							className="text-white"
						/>
						<Link
							href={"/about-us"}
							className="text-sm text-white">
							About Us
						</Link>
					</div>
					<div className="flex items-center">
						<MdKeyboardArrowRight
							size={22}
							className="text-white"
						/>
						<Link
							href={"/"}
							className="text-sm text-white">
							Blogs
						</Link>
					</div>
					<div className="flex items-center">
						<MdKeyboardArrowRight
							size={22}
							className="text-white"
						/>
						<Link
							href={"/"}
							className="text-sm text-white">
							News
						</Link>
					</div>
					<div className="flex items-center">
						<MdKeyboardArrowRight
							size={22}
							className="text-white"
						/>
						<Link
							href={"/contact-us"}
							className="text-sm text-white">
							Contact Us
						</Link>
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-6">
					<h2 className="text-2xl text-white font-semibold">Contact Us</h2>
					<ul className="flex flex-col gap-6">
						<div className="flex gap-[6px] items-center text-white">
							<CiLocationOn size={27} />
							<p className="text-sm text-white list-disc">
								F-1, Building # II-A, 7/1, <br /> Nazimabad # 2, Karachi,
								Pakistan
							</p>
						</div>
						<div className="flex gap-[6px] items-center text-white">
							<MdOutlineEmail size={27} />
							<Link
								href="mailto:Rizwan@dis.com.pk"
								className="text-sm text-white list-disc">
								Email: Rizwan@dis.com.pk
							</Link>
						</div>
						<div className="flex gap-[6px] items-center text-white">
							<CiPhone size={27} />
							<Link
								href="tell:+92300 2270154"
								className="text-sm text-white list-disc">
								Cell: 0300 2270154
							</Link>
						</div>
					</ul>
					<div className="flex items-center gap-2">
						<Link
							href={"https://www.facebook.com/digitalImagingsolution/"}
							className="bg-[#1877F2] p-2 text-white rounded-full">
							<FaFacebook size={22} />
						</Link>
						<Link
							href={"https://www.instagram.com/digital_imaging_solutions/"}
							className="bg-[#cd486b] p-2 text-white rounded-full">
							<FaInstagram size={22} />
						</Link>
						<Link
							href={"https://pk.linkedin.com/company/digital-imaging-solutions"}
							className="bg-[#0077B5] p-2 text-white rounded-full">
							<FaLinkedin size={22} />
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full border-t-[1.3px] border-[#ffffff88] py-6 padding-x text-center">
				<p className="text-[17px] font-medium text-white">
					Copyright © {copywrightYear.getFullYear()} – DIS | Powered by Digital
					Imaging Solutions
				</p>
			</div>
		</section>
	);
}
