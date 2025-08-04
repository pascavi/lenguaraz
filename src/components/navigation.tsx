import { css } from "@/styled-system/css";

import Link from "next/link";

const nav = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	gap: "2.4rem",
	"& ul": {
		display: ["none", null, null, "flex"],
		gap: ["0.8rem", "1.6rem"],
		fontSize: "clamp(1.3rem, 1.3vw, 1.5rem)",
		fontWeight: "600"
	},
	"& a": {
		transition: "color 0.2s ease-in-out"
	},
	"& ul a:hover": {
		color: "primary.darker"
	},
	"& div": {
		display: "flex",
		gap: "1.6rem"
	},
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

export const Navigation = () => {
	return (
		<nav className={nav}>
			<ul>
				<li>
					<Link href="/el-festival">El festival</Link>
				</li>
				<li>
					<Link href="/#programa">El programa</Link>
				</li>
				<li>
					<Link href="/los-libros">Los libros</Link>
				</li>
			</ul>
			<div>
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
		</nav>
	);
};
