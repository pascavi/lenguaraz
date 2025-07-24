import { Wrapper } from "./wrapper";
import { css } from "@/styled-system/css";

const books = css({
	background: "bg.light",
	padding: "4rem 0"
});

const inner = css({
	display: "flex",
	gap: ["2.4rem", "4.8rem"],
	fontFamily: "var(--font-poppin)",
	fontSize: "clamp(1.3rem, 1.6vw, 1.8rem)",
	"& > div:first-child": {
		width: ["25%", "20%"]
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
		fontSize: "clamp(2rem, 2vw, 2.6rem)",
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
	background: "bg.dark",
	padding: "0.8rem 1.6rem",
	borderRadius: "0.8rem",
	fontSize: "clamp(1.3rem, 1.6vw, 1.6rem)"
});

export const Books = () => {
	return (
		<div id="libros" className={books}>
			<Wrapper>
				<div className={inner}>
					<div>
						<img src="/books.svg" alt="" width="100" />
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
						<a className={button} href="https://libreriaeducania.com/lenguaraz" target="_blank" rel="noopener noreferrer">
							Ver libros
						</a>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};
