import { css } from "@/styled-system/css";

import Link from "next/link";

const nav = css({
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem"
});

const links = css({
	display: "flex",
	gap: ["1rem", "1.6rem"],
	fontSize: "clamp(1.3rem, 1.3vw, 1.5rem)",
	fontWeight: "600",
	"& a": {
		transition: "color 0.2s ease-in-out"
	},
	"& a:hover": {
		color: "primary.darker"
	},
	"& a.active": {
		textDecoration: "underline",
		textUnderlineOffset: "0.5rem"
	}
});

const social = css({
	display: "flex",
	justifyContent: "flex-end",
	gap: "1.6rem",
	"& img": {
		width: ["2.4rem", null, null, "3.2rem"],
		aspectRatio: "1 / 1"
	},
	"& img:hover": {
		filter: "brightness(0.8)"
	},
	"& button": {
		cursor: "pointer"
	}
});

export const Navigation = ({ variant = "default", pathname }: { variant?: "default" | "mobile"; pathname?: string }) => {
	return (
		<nav className={nav}>
			<ul className={links}>
				<li>
					<Link href="/el-festival" className={pathname === "el-festival" ? "active" : ""}>
						El festival
					</Link>
				</li>
				<li>
					<Link href="/el-programa" className={pathname === "el-programa" ? "active" : ""}>
						El programa
					</Link>
				</li>
				<li>
					<Link href="/los-libros" className={pathname === "los-libros" ? "active" : ""}>
						Los libros
					</Link>
				</li>
			</ul>
			{variant === "default" && (
				<div className={social}>
					<a href="https://bsky.app" target="_blank" rel="noopener noreferrer">
						<img src="/svg/bluesky.svg" alt="Síguenos en Bluesky" width="24" height="24" />
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
						<img src="/svg/instagram.svg" alt="Síguenos en Instagram" width="24" height="24" />
					</a>
					<button data-share>
						<img src="/svg/share.svg" alt="Compartir" width="24" height="24" />
					</button>
				</div>
			)}
		</nav>
	);
};
