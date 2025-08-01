"use client";

import { css } from "@/styled-system/css";

const shareData = {
	title: "Lenguaraz, el festival donde las lenguas son casas abiertas",
	text: "Murcia, 5-12 Nov. Un espacio para celebrar la riqueza de las lenguas y la literatura de más allá de nuestras fronteras.",
	url: "https://lenguarazfest.com"
};

const button = css({
	backgroundColor: "transparent",
	padding: "0",
	cursor: "pointer",
	border: "none"
});

export const Share = ({ children }: { children: React.ReactNode }) => {
	const shareByEmail = () =>
		(location.href = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + " " + shareData.url)}`);

	const handleShare = async () => {
		const canShare = navigator.share && typeof navigator.share === "function";
		if (!canShare) return shareByEmail();
		try {
			await navigator.share(shareData);
		} catch {
			shareByEmail();
		}
	};

	return (
		<button onClick={handleShare} className={button}>
			{children}
		</button>
	);
};
