import { css, cva } from "@/styled-system/css";
import { Wrapper, Logo, Navigation } from "@/components";
import Link from "next/link";

const header = css({
	background: "primary.light",
	padding: "5.6rem 0 7.2rem",
	boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
});

const inner = css({
	display: "flex",
	flexDirection: "column",
	gap: "4rem",
	"& p": {
		fontFamily: "secondary",
		fontSize: "clamp(1.8rem, 2.3vw, 2.3rem)",
		textAlign: "center"
	},
	"& p b": {
		textShadow: "0 0 1px rgba(0, 0, 0, 0.5)"
	}
});

const cols = css({
	display: "flex",
	flexDirection: ["column", "column", "row"],
	justifyContent: "space-between",
	alignItems: ["center", "center", "flex-start"],
	gap: ["3.2rem", null, 0],
	width: "100%"
});

const logo = cva({
	base: {
		display: "flex",
		justifyContent: ["center", null, "flex-start"],
		width: ["55%", null, "28%", "28%"],
		"& svg": { width: "100%", height: "auto" }
	},
	variants: {
		variant: {
			home: {
				"& svg": { maxWidth: ["22rem", null, null, "28rem"] }
			},
			default: {
				"& svg": { maxWidth: ["22rem", null, null, "24rem"] }
			}
		}
	}
});

const birds = css({
	display: "flex",
	flex: "1",
	"& picture": {
		aspectRatio: "100 / 110.2",
		display: "block",
		width: ["75%", null, "50%", "42%"],
		maxWidth: "26rem",
		margin: "0 auto"
	},
	"& img": {
		width: "100%",
		height: "auto"
	}
});

const nav = css({
	width: [null, null, "25%", "28%"],
	display: ["none", "none", "flex", "flex"],
	"& nav, & div": {
		display: ["none", "none", "none", "flex"],
		justifyContent: "flex-end"
	}
});

const burger = css({
	display: ["block", null, null, "none"],
	cursor: "pointer",
	position: "absolute",
	top: ["2rem", null, "5.6rem"],
	right: ["2rem", null, "5.6rem"],
	"& img": {
		width: "24px",
		height: "24px"
	},
	"& img:hover": {
		filter: "brightness(0.8)"
	}
});

const sticky = css({
	display: ["block", null, "null", "none"],
	position: "fixed",
	left: 0,
	top: 0,
	height: 0,
	zIndex: 10,
	width: "100%",
	overflow: "hidden",
	"& nav": {
		position: "absolute",
		top: "-100%",
		width: "100%",
		background: "#fff",
		shadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		padding: ["2rem 1.8rem", null, "2.4rem 2rem"],
		transition: "top 0.3s ease-in-out"
	},
	"&.sticky-nav--open, &.sticky-nav--forced": {
		height: "7.2rem",
		"& nav": {
			top: 0
		}
	}
});

export const Header = ({ variant = "default", pathname }: { variant?: "default" | "home"; pathname?: string }) => {
	return (
		<header className={header} data-variant={variant}>
			<div className={sticky} id="sticky-nav">
				<Navigation variant="mobile" pathname={pathname} />
			</div>
			<Wrapper>
				<div className={inner}>
					<div className={cols}>
						{variant === "home" && (
							<h1 className={logo({ variant })}>
								<Logo />
							</h1>
						)}
						{variant !== "home" && (
							<Link href="/" className={logo({ variant })}>
								<Logo />
							</Link>
						)}
						{variant === "home" && (
							<div className={birds}>
								<picture>
									<img src="/svg/birds.svg" aria-labelledby="header-text" width="100" height="110" />
								</picture>
							</div>
						)}
						<button className={burger} aria-label="Abrir el menú" id="burger">
							<svg width="24" height="24">
								<use href="/svg/icons.svg#burger" />
							</svg>
						</button>
						<div className={nav}>
							<Navigation pathname={pathname} />
						</div>
					</div>
					{variant === "home" && (
						<p id="header-text" aria-hidden>
							Donde las lenguas <b>son casas abiertas</b>
						</p>
					)}
				</div>
			</Wrapper>

			<a href="#focus-root" id="focus-root" className="visually-hidden" />
		</header>
	);
};
