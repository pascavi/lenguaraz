import { Wrapper } from "@/components";
import { css } from "@/styled-system/css";
import Link from "next/link";

const books = css({
	background: "primary.lighter",
	padding: "4rem 0"
});

const inner = css({
	display: "flex",
	alignItems: ["flex-start", "center"],
	gap: "2.4rem",
	fontFamily: "var(--font-poppin)",
	fontSize: "clamp(1.6rem, 1.6vw, 1.8rem)",
	"& > div:first-child": {
		width: ["18%", null, "15%"]
	},
	"& > div:last-child": {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		gap: "2.4rem",
		alignItems: "start",
		padding: ["0", null, "3.2rem 0 1.6rem"]
	},
	"& img": {
		width: "100%",

		height: "auto"
	},
	"& h2": {
		fontSize: "clamp(2rem, 2vw, 2.2rem)",
		fontWeight: "600"
	}
});

const content = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.4rem",
	"& a": {
		fontWeight: "600"
	}
});

const button = css({
	background: "primary.base",
	color: "white",
	padding: "0.8rem 1.6rem",
	borderRadius: "0.8rem",
	fontSize: "clamp(1.3rem, 1.4vw, 1.4rem)",
	transition: "background 0.3s ease",
	"&:hover": {
		background: "primary.darker"
	}
});

const image = css({
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start",

	"& picture": {
		width: "100%",
		maxWidth: "11rem",
		display: "block",
		aspectRatio: "100 / 58"
	},
	"& img": {
		width: "100%"
	}
});

export const Educania = () => {
	return (
		<div id="libros" className={books}>
			<Wrapper>
				<div className={inner}>
					<div className={image}>
						<picture>
							<img src="/svg/sailor.svg" alt="" width="58" height="100" />
						</picture>
					</div>

					<div>
						<h2>Los libros del Lenguaraz</h2>
						<div className={content}>
							<p>Hemos hecho una lista con todos los libros que se presentarán o de los que se hablará en el festival.</p>
							<p>
								Puedes conseguirlos en nuestra librería de confianza,{" "}
								<a href="https://libreriaeducania.com/" target="_blank" rel="noopener noreferrer">
									Educania
								</a>
								, cerca del teatro Romea.
							</p>
						</div>
						<Link className={button} href="/los-libros" rel="noopener noreferrer">
							Ver libros
						</Link>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};
