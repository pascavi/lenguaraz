import { Wrapper } from "@/components";
import { css } from "@/styled-system/css";
import Link from "next/link";

const books = css({
	background: "primary.lighter",
	padding: ["4rem 0", null, "5.6rem 0"]
});

const inner = css({
	display: "flex",
	gap: ["2.4rem", null, null, "5.6rem"],
	fontFamily: "var(--font-poppin)",
	fontSize: "clamp(1.3rem, 1.6vw, 1.8rem)",
	"& > div:first-child": {
		width: ["20%", null, "16%"]
	},
	"& > div:last-child": {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		gap: "2.4rem",
		alignItems: "start"
	},
	"& img": {
		width: "100%",

		height: "auto"
	},
	"& h2": {
		fontSize: "clamp(2rem, 2vw, 2.4rem)",
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
	fontSize: "clamp(1.3rem, 1.4vw, 1.4rem)"
});

const image = css({
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start",

	"& picture": {
		display: "block",
		aspectRatio: "1 / 1",
		background: "#fff2e3",
		borderRadius: "100%"
	},
	"& img": {
		width: "100%"
	}
});

export const Books = () => {
	return (
		<div id="libros" className={books}>
			<Wrapper>
				<div className={inner}>
					<div className={image}>
						<picture>
							<img src="/svg/educania.svg" alt="" width="100" />
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
