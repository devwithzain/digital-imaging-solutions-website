import type { Metadata } from "next";
import { About, AboutHero } from "@/container";

export const metadata: Metadata = {
	title: "About Us - Digital Imaging Solutions",
	description: "Digital Imaging Solutions",
};

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<About />
		</>
	);
}
