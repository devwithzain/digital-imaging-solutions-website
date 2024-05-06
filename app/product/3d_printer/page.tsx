import type { Metadata } from "next";
import { Printer3dHero, Printer3dProduct } from "@/container";

export const metadata: Metadata = {
	title: "Die Cutting - Digital Imaging Solutions",
	description: "Digital Imaging Solutions",
};

export default function Printer() {
	return (
		<>
			<Printer3dHero />
			<Printer3dProduct />
		</>
	);
}
