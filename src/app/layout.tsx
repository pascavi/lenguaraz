import type { Metadata } from "next";
import { Chivo, Tinos } from "next/font/google";
import "./globals.css";
import { css } from "@/styled-system/css";

export const html = css({
	fontSize: "62.5%",
	scrollBehavior: "smooth"
});

export const body = css({
	fontSize: "clamp(1.6rem, 1.6vw, 2rem)",
	fontFamily: "var(--font-serif)"
});

const sans = Chivo({
	variable: "--font-sans",
	subsets: ["latin"]
});

const serif = Tinos({
	variable: "--font-serif",
	subsets: ["latin"],
	weight: ["400", "700"]
});

export const metadata: Metadata = {
	title: "Lenguaraz, el festival donde las lenguas son casas abiertas",
	description: "Murcia, 6-12 Nov. Un espacio para celebrar la riqueza de las lenguas y la literatura de más allá de nuestras fronteras."
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={`${html} ${sans.variable} ${serif.variable}`}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/meta/favicon.ico" />
				<link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className={body}>{children}</body>
		</html>
	);
};

export default RootLayout;
