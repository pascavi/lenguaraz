import { css } from "@/styled-system/css";
import { Wrapper } from "./wrapper";
import { Logo } from "./logo";
import { Birds } from "./birds";

const header = css({
	background: "primary.lighter"
});

const inner = css({
	display: "flex",
	flexDirection: ["column", "column", "column", "row"],

	justifyContent: "space-between",
	alignItems: ["center", "center", "center", "flex-start"],
	gap: "3.2rem",
	width: "100%",
	padding: ["2.4rem 0 4rem", "4rem 0 5.6rem"],
	"& svg#logo": {
		maxWidth: "25rem",
		width: ["50%", "50%", "50%", "20%"]
	},

	"& nav": {
		display: ["none", "none", "none", "block"]
	},
	"& nav ul": {
		display: "flex",
		gap: ["0.8rem", "1.6rem"],
		fontSize: "clamp(1.3rem, 1.6vw, 1.5rem)",
		fontWeight: "600"
	}
});

const birds = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: ["2.4rem", "3.2rem"],
	fontFamily: "heading",
	"& svg": {
		width: ["75%", "75%", "75%", "90%"]
	},
	"& h2": {
		fontSize: "clamp(1.8rem, 2vw, 2rem)",
		textAlign: "center"
	}
});

// const content = css({
// 	display: "flex",
// 	flexDirection: "column",
// 	alignItems: "center",
// 	gap: "3.2rem",
// 	width: "85%",
// 	maxWidth: "64rem",
// 	fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
// 	padding: ["10% 0 14%", "3% 0 7%"],
// 	"& img": {
// 		aspectRatio: "1 / 0.447"
// 	},
// 	"& h1 span": {
// 		position: "absolute",
// 		clip: "rect(0 0 0 0)",
// 		width: "1px",
// 		height: "1px",
// 		overflow: "hidden"
// 	},
// 	"& h2": {
// 		fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
// 		fontWeight: "400"
// 	}
// });

export const Header = () => {
	return (
		<header className={header}>
			<Wrapper>
				<div className={inner}>
					<Logo />
					<div className={birds}>
						<Birds />
						<h2>
							Donde las lenguas son <b>casas abiertas</b>
						</h2>
					</div>
					<nav>
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
					</nav>
					{/* 
					<div className={content}>
						<h1>
							<img src="/lenguaraz_logo.svg" alt="" width="1000" height="447" />
							<span>Lenguaraz, Murcia del 5 al 12 de Noviembre</span>
						</h1>
						<h2>
							Donde las lenguas son <b>casas abiertas</b>
						</h2>
					</div> */}
				</div>
			</Wrapper>
		</header>
	);
};
