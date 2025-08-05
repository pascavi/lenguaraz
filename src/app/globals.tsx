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

	// sticky nav
	React.useEffect(() => {
		const stickyNav = document.getElementById("sticky-nav");
		const burger = document.getElementById("burger");
		const openOnScroll = () => stickyNav?.classList.toggle("sticky-nav--open", window.scrollY > 100);
		const closeOnScroll = () => window.scrollY > 100 && stickyNav?.classList.remove("sticky-nav--forced");
		const onClick = () => stickyNav?.classList.add("sticky-nav--forced");
		document.addEventListener("scroll", openOnScroll);
		document.addEventListener("scroll", closeOnScroll);
		burger?.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("scroll", openOnScroll);
			document.removeEventListener("scroll", closeOnScroll);
			burger?.removeEventListener("click", onClick);
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
