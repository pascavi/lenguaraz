import { css } from "@/styled-system/css";
import { Wrapper } from "./wrapper";

const intro = css({
	fontSize: "clamp(1.8rem, 2.67vw, 2rem)",
	padding: ["4.8rem 0", "8rem 0", "9.2rem 0"],
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem"
});

const capitalLetter = css({
	float: "left",
	fontSize: "clamp(8rem, 10vw, 12rem)",
	lineHeight: "1",
	fontWeight: "700",
	marginRight: ["1rem", "1.6rem"]
});

export const Intro = () => {
	return (
		<Wrapper>
			<div className={intro} id="festival">
				<p>
					<span className={capitalLetter}>L</span>
					<b>enguaraz</b> es un festival para celebrar la riqueza de las lenguas. Es un festival para disfrutar de la literatura escrita más
					allá de nuestras fronteras, es un espacio para degustar deliciosas ediciones bilingües, jugosas conversaciones literarias, dulces
					recitales y sabrosos debates.
				</p>
				<p>
					Lenguaraz va de literatura pero también de lingüística, traducción, interpretación, etnología, comunicación, política, pensamiento
					y arte. Sí, Lenguaraz va de todo lo que tenga que ver con las lenguas, los idiomas, los lenguajes, las hablas, las jergas, las
					palabras y las distintas formas de ver el mundo que nos da la diversidad lingüística.
				</p>
				<p>Porque en Lenguaraz las lenguas son casas abiertas.</p>
			</div>
		</Wrapper>
	);
};
