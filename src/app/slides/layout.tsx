"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Slides, Left, Right, Logos } from "@/templates";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const router = useRouter();
	const [zoom, setZoom] = React.useState(1);

	React.useEffect(() => {
		const updateZoom = () => {
			const zoom = 1018 / window.innerHeight; // window.innerHeight / 786 / window.devicePixelRatio;
			setZoom(zoom);
		};
		// updateZoom();
		window.addEventListener("resize", updateZoom);
		return () => window.removeEventListener("resize", updateZoom);
	}, []);

	React.useEffect(() => {
		const currentIndex = SLIDES.indexOf(pathname);
		if (currentIndex === -1) {
			router.push(SLIDES[0]);
			return;
		}
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
			<Slides zoom={zoom}>
				<Left>
					<img src="/svg/logo.svg" width="126" height="45" alt="" />
					<Logos />
				</Left>
				<Right>{children}</Right>
			</Slides>
		</>
	);
};

export const SLIDES = ["/slides/miercoles", "/slides/jueves", "/slides/viernes", "/slides/sabado", "/slides/domingo"];

export const SLIDES_DELAY = 15 * 1000;

export default Layout;
