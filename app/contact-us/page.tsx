import type { Metadata } from "next";
import { HeroContact } from "@/container";

export const metadata: Metadata = {
	title: "Contact Us - Digital Imaging Solutions",
	description: "Digital Imaging Solutions",
};

export default function Contact() {
	return (
		<>
			<HeroContact />
		</>
	);
}
