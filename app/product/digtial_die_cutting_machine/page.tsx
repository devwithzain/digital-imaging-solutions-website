import type { Metadata } from "next";
import { DieCuttingHero, DieCuttingProduct } from "@/container";

export const metadata: Metadata = {
	title: "Die Cutting - Digital Imaging Solutions",
	description: "Digital Imaging Solutions",
};

export default function Die() {
	return (
		<>
			<DieCuttingHero />
			<DieCuttingProduct />
		</>
	);
}
