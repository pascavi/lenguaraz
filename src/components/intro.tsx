import { css } from "@/styled-system/css";
import { Wrapper } from "./wrapper";

const intro = css({
	fontSize: "clamp(1.8rem, 2.67vw, 2rem)",
	padding: ["4.8rem 0", null, "6.4rem 0", "8rem 0"],
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem",
	"& h2": {
		fontFamily: "heading",
		lineHeight: "1",
		fontWeight: "600",
		color: "primary.base",
		fontSize: "clamp(2rem, 2.4vw, 2.4rem)",
		marginBottom: ["0.8rem", "1.6rem"]
	},
	"& b": {
		fontWeight: "600",
		color: "primary.base"
	},
	"& a": {
		color: "primary.base",
		fontWeight: "600",
		textDecoration: "underline",
		textUnderlineOffset: "0.5rem",
		fontSize: "0.9em",
		position: "relative",
		top: "-0.1em",
		padding: "0 0.2rem",
		whiteSpace: "nowrap"
	}
});

export const Intro = () => {
	return (
		<Wrapper>
			<div className={intro} id="festival">
				<h2>Murcia. Del 5 al 12 de Noviembre</h2>
				<p>
					<b>Lenguaraz</b> es un festival para celebrar la riqueza de las lenguas. Es un festival para disfrutar de la literatura escrita
					más allá de nuestras fronteras, es un espacio para degustar deliciosas ediciones bilingües, jugosas conversaciones literarias,
					dulces recitales y sabrosos debates.
				</p>
				<p>
					<b>Lenguaraz</b> va de literatura pero también de lingüística, traducción, interpretación, etnología, comunicación, política,
					pensamiento y arte. Sí, Lenguaraz va de todo lo que tenga que ver con las lenguas, los idiomas, los lenguajes, las hablas, las
					jergas, las palabras y las distintas formas de ver el mundo que nos da la diversidad lingüística.
				</p>
				<p>
					Porque en Lenguaraz las lenguas son casas abiertas. <a href="#programa">Leer más.</a>
				</p>
			</div>
		</Wrapper>
	);
};
