import "@/styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components";

export const metadata: Metadata = {
	title: "Digital Imaging Solutions",
	description: "Digital Imaging Solutions",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				<Footer />
			</body>
		</html>
	);
}
