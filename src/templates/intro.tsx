import React from "react";
import Link from "next/link";
import { css } from "@/styled-system/css";
import { Wrapper } from "@/components";
import { richText } from "@/styles";

const intro = css({
	padding: ["4.8rem 0", null, "6.4rem 0", "7.2rem 0 9.6rem"],
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem",
	"& h2": {
		fontFamily: "secondary",
		lineHeight: "1",
		color: "primary.base",
		fontSize: "clamp(2rem, 2.4vw, 2.4rem)",
		marginBottom: "0.8rem"
	}
});

export const Intro = () => {
	return (
		<Wrapper>
			<div className={intro}>
				{/* <h2>Murcia. Del 5 al 9 de Noviembre.</h2> */}
				<div className={richText}>
					<p>
						<b>Lenguaraz</b> es un festival para celebrar la riqueza de las lenguas. Es un festival para disfrutar de la literatura
						escrita más allá de nuestras fronteras, es un espacio para degustar deliciosas ediciones bilingües, jugosas conversaciones
						literarias, dulces recitales y sabrosos debates.
					</p>
					<p>
						<b>Lenguaraz</b> va de literatura pero también de lingüística, traducción, interpretación, etnología, comunicación, política,
						pensamiento y arte. Sí, Lenguaraz va de todo lo que tenga que ver con las lenguas, los idiomas, los lenguajes, las hablas, las
						jergas, las palabras y las distintas formas de ver el mundo que nos da la diversidad lingüística.
					</p>
					<p>
						Porque en Lenguaraz las lenguas son casas abiertas. <Link href="/el-festival">Leer más.</Link>
					</p>
				</div>
			</div>
		</Wrapper>
	);
};
