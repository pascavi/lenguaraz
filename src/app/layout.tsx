import type { Metadata } from "next";
import ReactDOM from "react-dom";
import "./globals.css";

export const metadata: Metadata = {
	title: "Festival Lenguaraz, Murcia 5-12 Noviembre",
	description: "Un espacio para celebrar la riqueza de las lenguas y la literatura de más allá de nuestras fronteras."
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	ReactDOM.preload("/fonts/poppins.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
	ReactDOM.preload("/fonts/blatant.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/meta/favicon.ico" />
				<link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
				<meta property="og:image" content="https://lenguarazfest.com/meta/meta.jpg" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
