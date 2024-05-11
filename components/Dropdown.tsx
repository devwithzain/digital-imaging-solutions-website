"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Dispatch, SetStateAction, useState } from "react";
import { iconVariants, itemVariants, wrapperVariants } from "@/motion";

export default function StaggeredDropDown() {
	const [open, setOpen] = useState(false);
	return (
		<div className="relative z-20 flex items-center justify-center">
			<motion.div
				animate={open ? "open" : "closed"}
				className="relative">
				<button
					onClick={() => setOpen((pv) => !pv)}
					className="flex items-center gap-2">
					<span className="text-[17px] font-medium text-black">Products</span>
					<motion.span variants={iconVariants}>
						<FiChevronDown />
					</motion.span>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col px-[10px] py-[5px] rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-fit overflow-hidden">
					<Option
						setOpen={setOpen}
						text="3D Printer"
						href="/product/3d_printer"
					/>
					<Option
						setOpen={setOpen}
						text="Label Printer"
						href="/product/digital_label_printer"
					/>
					<Option
						setOpen={setOpen}
						text="Die Cutting"
						href="/product/digtial_die_cutting_machine"
					/>
				</motion.ul>
			</motion.div>
		</div>
	);
}

const Option = ({
	text,
	setOpen,
	href,
}: {
	text: string;
	href: string;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<motion.li
			variants={itemVariants}
			onClick={() => setOpen(false)}
			className="flex items-center gap-2 w-full p-2 text-[17px] font-medium text-black whitespace-nowrap rounded-md hover:bg-indigo-100 hover:text-indigo-500 transition-colors cursor-pointer">
			<Link href={href}>
				<span>{text}</span>
			</Link>
		</motion.li>
	);
};
