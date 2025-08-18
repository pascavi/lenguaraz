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
				<div className={left}>
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
				</div>
				<div className={right}>
					<div className={logos}>
						<label>Colaboran:</label>
						<div>
							<img src="images/logos/ministerio.jpg" alt="Ministerio de Cultura" width="195" height="56" loading="lazy" />
							<img src="images/logos/murcia.png" alt="Ayuntamiento de Murcia" width="128" height="56" loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	</footer>
);
