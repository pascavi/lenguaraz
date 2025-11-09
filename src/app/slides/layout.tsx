"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Slides, Left, Right, Logos } from "@/templates";

const STOPPED = true;

const Layout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const router = useRouter();

	// React.useEffect(() => {
	// 	const updateZoom = () => {
	// 		if (window.location.search.includes("zoom")) return;
	// 		const zoom = 1018 / window.innerHeight;
	// 		console.log(zoom, "!");
	// 		setZoom(zoom);
	// 	};
	// 	updateZoom();
	// 	window.addEventListener("resize", updateZoom);
	// 	return () => window.removeEventListener("resize", updateZoom);
	// }, []);

	React.useEffect(() => {
		const currentIndex = SLIDES.indexOf(pathname);
		if (currentIndex === -1) {
			router.push(SLIDES[0]);
			return;
		}
		if (STOPPED || window.location.search.includes("stop")) return;
		const nextPath = SLIDES[(currentIndex + 1) % SLIDES.length];
		const redirect = () => router.push(nextPath);
		const timeout = setTimeout(redirect, SLIDES_DELAY);
		return () => clearTimeout(timeout);
	}, [pathname]);

	if (!children) return null;
	return (
		<>
			<title>Lenguaraz, donde las lenguas son casas abiertas</title>
			<meta name="robots" content="noindex,nofollow" />
			<Slides zoom={1}>
				<Left>
					<img src="/svg/logo.svg" width="126" height="45" alt="" />
					<Logos />
				</Left>
				<Right>{children}</Right>
			</Slides>
		</>
	);
};

export const SLIDES = ["/slides/sabado", "/slides/domingo"];

export const SLIDES_DELAY = 15 * 1000;

export default Layout;
