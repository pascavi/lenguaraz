import ReactDOM from "react-dom";
import "./globals.css";
import { Globals } from "./globals";
import { Analytics } from "@vercel/analytics/next";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	ReactDOM.preload("/fonts/poppins.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
	ReactDOM.preload("/fonts/blatant.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
	return (
		<html lang="es">
			<Globals>
				<head>
					<link rel="icon" href="/meta/favicon.ico" />
					<link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
					<meta property="og:site_name" content="Festival Lenguaraz" />
					<meta property="og:image" content="https://lenguarazfest.com/meta/meta.jpg" />
					<meta name="theme-color" content="#ffffff" />
				</head>
				<body>{children}</body>
			</Globals>
			{process.env.NODE_ENV === "production" && <Analytics />}
		</html>
	);
};

export default RootLayout;
