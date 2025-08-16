import { css } from "@/styled-system/css";
import { Wrapper, Social } from "@/components";

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
	color: "primary.darker"
});

const nav = css({
	width: ["50%", null, "33.33%"],
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem",
	color: "primary.darker",
	"& nav": {
		display: "flex",
		flexDirection: "column",
		gap: "1.6rem",
		fontSize: "clamp(1.5rem, 1.6vw, 1.6rem)",
		fontWeight: "600"
	},
	"@media (hover: hover)": {
		"& a:hover": {
			filter: "brightness(0.8)"
		}
	}
});

const social = css({
	width: ["50%", null, "33.33%"],
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem"
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

export const Footer = () => (
	<footer className={footer}>
		<Wrapper>
			<div className={inner}>
				<div className={nav}>
					<label>Más información:</label>
					<nav>
						<a href="/el-proyecto">Contacto</a>
						<a href="/el-proyecto#agradecimientos">Agradecimientos</a>
						<a href="/el-proyecto#aviso-legal">Aviso legal</a>
					</nav>
				</div>
				<div className={social}>
					<label>Síguenos:</label>
					<Social />
				</div>
				<div className={logos}>
					<label>Colaboran:</label>
					<div>
						<img src="/logos/ministerio.jpg" alt="Logo 1" width="195" height="56" loading="lazy" />
						<img src="/logos/murcia.svg" alt="Logo 2" width="128" height="56" loading="lazy" />
					</div>
				</div>
			</div>
		</Wrapper>
	</footer>
);
