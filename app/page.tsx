"use client";
import { useEffect } from "react";
import { Hero, Product } from "@/container";

export default function App() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Hero />
			<Product />
		</>
	);
}
