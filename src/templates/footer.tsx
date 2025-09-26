import { css } from "@/styled-system/css";
import { Wrapper } from "@/components";
import Link from "next/link";

const footer = css({
	backgroundColor: "primary.light",
	padding: ["4.8rem 0 7.2rem", "5.6rem 0 9.6rem"]
});

const inner = css({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: "4rem",
	justifyContent: "space-between",
	fontSize: "clamp(1.4rem, 1.6vw, 1.6rem)",
	color: "primary.darker",
	"& a": {
		fontSize: "clamp(1.5rem, 1.6vw, 1.6rem)",
		fontWeight: "600",
		color: "primary.darker"
	},
	"@media (hover: hover)": {
		"& a:hover, & button:hover": {
			color: "primary.dark"
		}
	}
});

const left = css({
	display: "flex",
	flexDirection: "column",
	lineHeight: "3.6rem",
	"& ul": {
		columns: 2,
		columnGap: ["4rem", null, null, "6.4rem"]
	}
});

const right = css({
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem",
	lineHeight: "4rem",
	"& p": {
		maxWidth: "30rem",
		lineHeight: "1.8em",
		fontSize: "1.1rem"
	},
	"& > div": {
		display: "flex",
		flexWrap: "wrap",
		gap: "1.6rem"
	},
	"& img": {
		height: ["5.6rem", null, null, "6.4rem"],
		width: "auto"
	}
});

export const Footer = () => (
	<footer className={footer}>
		<Wrapper>
			<div className={inner}>
				<nav className={left} aria-labelledby="footer-more-info">
					<label id="footer-more-info">Más información:</label>
					<ul>
						<li>
							<Link href="/el-proyecto">Contacto</Link>
						</li>
						<li>
							<Link href="/el-proyecto#agradecimientos">Agradecimientos</Link>
						</li>
						<li>
							<Link href="/la-web">Aviso legal</Link>
						</li>
						<li>
							<Link href="https://www.facebook.com/lenguarazfest">Facebook</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/festivallenguaraz">Instagram</Link>
						</li>
						<li>
							<Link href="https://bsky.app/profile/lenguarazfest">Bluesky</Link>
						</li>
					</ul>
				</nav>
				<div className={right}>
					<p>
						Este proyecto ha recibido una ayuda del Ministerio de Cultura a través de la Dirección General del Libro, del Cómic y de la
						Lectura.
					</p>
					<div>
						<img
							src="images/logos/ministerio.jpg"
							alt="Ministerio de Cultura, Gobiierno de España"
							width="195"
							height="56"
							loading="lazy"
							title="Ministerio de Cultura, Gobiierno de España"
						/>
						<img
							src="images/logos/lectura_infinita.png"
							alt="Pacto de estado por la lectura"
							title="Pacto de estado por la lectura"
							width="157"
							height="150"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	</footer>
);
