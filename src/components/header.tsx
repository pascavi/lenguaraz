import { css } from "@/styled-system/css";
import { Wrapper } from "./wrapper";
import { Logo } from "./logo";
import { Birds } from "./birds";
import { Share } from "./share";

const header = css({
	background: "primary.light"
});

const inner = css({
	display: "flex",
	flexDirection: ["column", "column", "row"],
	justifyContent: "space-between",
	alignItems: ["center", "center", "flex-start"],
	gap: ["3.2rem", null, 0],
	width: "100%",
	padding: ["3.2rem 0 4rem", null, "4rem 0 5.6rem"]
});

const logo = css({
	width: ["50%", null, "25%", "28%"],
	display: "flex",
	justifyContent: ["center", null, "flex-start"],
	"& svg": {
		maxWidth: "24rem",
		width: "100%",
		height: "auto"
	}
});

const nav = css({
	display: ["none", "none", "flex"],
	width: [null, null, "25%", "28%"],
	flexDirection: "column",
	alignItems: "flex-end",
	gap: "2.4rem",
	"& ul": {
		display: ["none", null, null, "flex"],
		gap: ["0.8rem", "1.6rem"],
		fontSize: "clamp(1.3rem, 1.3vw, 1.5rem)",
		fontWeight: "600"
	},
	"& div": {
		display: "flex",
		gap: "1.6rem"
	},
	"& img": {
		width: ["2.4rem", null, null, "3.2rem"],
		aspectRatio: "1 / 1"
	}
});

const birds = css({
	display: "flex",
	flex: "1",
	flexDirection: "column",
	alignItems: "center",
	gap: ["2.4rem", null, "4rem"],
	fontFamily: "heading",
	"& svg": {
		width: ["75%", null, "70%"],
		maxWidth: "28rem"
	},
	"& h1": {
		fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)",
		textAlign: "center"
	}
});

type Props = {
	variant?: "default" | "home";
};

export const Header = ({ variant }: Props) => {
	return (
		<header className={header}>
			<Wrapper>
				<div className={inner}>
					<div className={logo}>
						<Logo />
					</div>
					{variant === "home" && (
						<div className={birds}>
							<Birds />
							<h1>
								Donde las lenguas son <b>casas abiertas</b>
							</h1>
						</div>
					)}
					<nav className={nav}>
						<ul>
							<li>
								<a href="#festival">El festival</a>
							</li>
							<li>
								<a href="#programa">El programa</a>
							</li>
							<li>
								<a href="#libros">Los libros</a>
							</li>
						</ul>
						<div>
							<img src="/svg/bluesky.svg" alt="Bluesky" width="24" height="24" />
							<img src="/svg/instagram.svg" alt="Instagram" width="24" height="24" />
							<Share>
								<img src="/svg/share.svg" alt="Bluesky" width="24" height="24" />
							</Share>
						</div>
					</nav>
				</div>
			</Wrapper>
		</header>
	);
};
