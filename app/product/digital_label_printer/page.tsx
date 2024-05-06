import type { Metadata } from "next";
import { LabelHero, LabelProduct } from "@/container";

export const metadata: Metadata = {
	title: "Label Printer - Digital Imaging Solutions",
	description: "Digital Imaging Solutions",
};

export default function Label() {
	return (
		<>
			<LabelHero />
			<LabelProduct />
		</>
	);
}
