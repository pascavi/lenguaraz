import { css, cva } from "@/styled-system/css";
import { Wrapper, Logo, Birds, Navigation } from "@/components";
import Link from "next/link";

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
	padding: "5.6rem 0 6.4rem"
});

const logo = cva({
	base: {
		display: "flex",
		justifyContent: ["center", null, "flex-start"],
		width: ["50%", null, "25%", "28%"],
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
	flexDirection: "column",
	alignItems: "center",
	gap: ["2.4rem", null, "4rem"],
	fontFamily: "secondary",
	"& svg": {
		width: ["75%", null, "42%"],
		maxWidth: "26rem"
	},
	"& h1": {
		fontSize: "clamp(1.8rem, 2.3vw, 2.3rem)",
		textAlign: "center"
	},
	"& h1 b": {
		textShadow: "0 0 1px rgba(0, 0, 0, 0.5)"
	}
});

const nav = css({
	width: [null, null, "25%", "28%"],
	justifyContent: "flex-end",
	display: ["none", "none", "flex", "flex"],
	"& nav, & div": {
		display: ["none", "none", "none", "flex"]
	}
});

const burger = css({
	display: ["block", null, null, "none"],
	cursor: "pointer",
	position: "absolute",
	top: ["2rem", null, "4rem"],
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
		<header className={header}>
			<div className={sticky} id="sticky-nav">
				<Navigation variant="mobile" pathname={pathname} />
			</div>
			<Wrapper>
				<div className={inner}>
					<Link href="/" className={logo({ variant })}>
						<Logo />
					</Link>
					{variant === "home" && (
						<div className={birds}>
							<Birds />
							<h1>
								Donde las lenguas <b>son casas abiertas</b>
							</h1>
						</div>
					)}
					<button className={burger} aria-label="Abrir el menú" id="burger">
						<img src="/svg/burger.svg" alt="Abrir el menú" width="24" height="24" />
					</button>
					<div className={nav}>
						<Navigation pathname={pathname} />
					</div>
				</div>
			</Wrapper>
			<a href="#focus-root" id="focus-root" className="visually-hidden" />
		</header>
	);
};
