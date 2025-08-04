"use client";

import React from "react";
import { usePathname } from "next/navigation";

export const Globals = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	// share button
	React.useEffect(() => {
		const onShareClick = (e: MouseEvent) => {
			const button = (e.target as HTMLElement).closest("button[data-share]");
			if (button) shareAction();
		};
		document.addEventListener("click", onShareClick);
		return () => {
			document.removeEventListener("click", onShareClick);
		};
	}, []);

	// scroll to top
	React.useEffect(() => {
		return () => {
			if (!location.hash) window.scrollTo(0, 0);
			document.getElementById("focus-root")?.focus();
		};
	}, [pathname]);
	return <>{children}</>;
};

const shareAction = () => {
	const shareData = {
		title: "Lenguaraz, el festival donde las lenguas son casas abiertas",
		text: "Murcia, 5-12 Nov. Un espacio para celebrar la riqueza de las lenguas y la literatura de más allá de nuestras fronteras.",
		url: "https://lenguarazfest.com"
	};
	try {
		navigator.share(shareData);
	} catch {
		//
	}
};
