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
	padding: ["3.2rem 0 4rem", null, "4rem 0 5.6rem", "5.6rem 0"]
});

const logo = cva({
	variants: {
		variant: {
			home: {
				width: ["50%", null, "25%", "28%"],
				"& svg": { width: "100%", height: "auto", maxWidth: ["22rem", null, null, "28rem"] }
			},
			default: {
				width: ["50%", null, "25%", "28%"],
				"& svg": { width: "100%", height: "auto", maxWidth: ["22rem", null, null, "24rem"] }
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
		fontSize: "clamp(1.7rem, 2.0vw, 2.2rem)",
		textAlign: "center"
	}
});

const nav = css({
	display: ["none", "none", "flex"],
	width: [null, null, "25%", "28%"],
	justifyContent: "flex-end"
});

type Props = {
	variant?: "default" | "home";
};

export const Header = ({ variant = "default" }: Props) => {
	return (
		<header className={header}>
			<Wrapper>
				<div className={inner}>
					<Link href="/" className={logo({ variant })}>
						<Logo />
					</Link>
					{variant === "home" && (
						<div className={birds}>
							<Birds />
							<h1>
								Donde las lenguas son <b>casas abiertas</b>
							</h1>
						</div>
					)}
					<div className={nav}>
						<Navigation />
					</div>
				</div>
			</Wrapper>
			<a href="#focus-root" id="focus-root" className="visually-hidden" />
		</header>
	);
};
