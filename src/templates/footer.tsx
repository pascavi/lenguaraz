import { css } from "@/styled-system/css";
import { Wrapper, Social } from "@/components";
import Link from "next/link";

const footer = css({
	backgroundColor: "primary.light",
	padding: ["4.8rem 0 7.2rem", "5.6rem 0 9.6rem"]
});

const inner = css({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	rowGap: "4rem",
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

const menu = css({
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem"
});

const social = css({
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem",
	"& img": {
		width: "2.4rem",
		height: "2.4rem"
	}
});

const logos = css({
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem",
	"& > div": {
		display: "flex",
		flexWrap: "wrap",
		gap: "3.2rem"
	},
	"& img": {
		height: "5.6rem",
		width: "auto"
	}
});

const left = css({
	display: "flex",
	gap: "5.6rem",
	minWidth: "32rem"
});

const right = css({
	display: "flex"
});

export const Footer = () => (
	<footer className={footer}>
		<Wrapper>
			<div className={inner}>
				<nav className={left} aria-label="Enlaces adicionales">
					<div className={menu}>
						<label>Más información:</label>
						<Link href="/el-proyecto">Contacto</Link>
						<Link href="/el-proyecto#agradecimientos">Agradecimientos</Link>
						<Link href="/la-web">Aviso legal</Link>
					</div>
					<div className={social}>
						<label>Síguenos:</label>
						<Social />
					</div>
				</nav>
				<div className={right}>
					<div className={logos}>
						<label>Colaboran:</label>
						<div>
							<img
								src="images/logos/ministerio.jpg"
								alt="Ministerio de Cultura, Gobiierno de España"
								width="195"
								height="56"
								loading="lazy"
							/>
							<img src="images/logos/murcia.png" alt="Ayuntamiento de Murcia" width="128" height="56" loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	</footer>
);
