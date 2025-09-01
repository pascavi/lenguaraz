import { Wrapper } from "@/components";
import { css } from "@/styled-system/css";
import Link from "next/link";

const banner = css({
	background: "primary.lighter",
	padding: ["6.4rem 0", null, null, "7.2rem 0"]
});

const twoCols = css({
	display: "flex",
	flexDirection: ["column", "row"],
	alignItems: "stretch",
	gap: ["1.6rem", "4rem", null, "6.4rem"],
	margin: "0 auto",
	paddingLeft: ["8rem", "0"],
	position: "relative"
});

const left = css({
	flexShrink: "1",
	display: "flex",
	flexDirection: ["row-reverse", "column"],
	alignItems: "center",
	fontSize: "clamp(2.4rem, 2.4vw, 3.4rem)",
	justifyContent: ["start", "space-between"],

	"& picture": {
		position: ["absolute", "static"],
		top: "-0.4rem",
		left: "0.4rem",
		"& img": {
			width: ["5.2rem", "6rem", null, "6.6rem"],
			height: "auto"
		}
	},

	"& h2": {
		fontFamily: "secondary",
		fontSize: "clamp(2.4rem, 3.4vw, 3.4rem)",
		fontWeight: "600",
		lineHeight: "1.1",
		maxWidth: ["unset", "10ch"]
	}
});

const right = css({
	flex: 1,
	fontSize: "clamp(1.5rem, 1.7vw, 1.8rem)",
	display: "flex",
	flexDirection: "column",
	gap: ["2.4rem", null, null, "3.2rem"],
	alignItems: "start",

	"& div": {
		display: "flex",
		flexDirection: "column",
		gap: "0.8rem"
	},
	"& p a": {
		fontWeight: "600",
		color: "primary.darker",
		fontSize: "0.92em",
		position: "relative",
		top: "-0.02em",
		textDecoration: "underline",
		textUnderlineOffset: "0.5rem",
		padding: "0 0.1rem"
	},
	"& p a:hover": {
		color: "primary.dark"
	}
});

const button = css({
	borderColor: "primary.darker",
	borderWidth: "2px",
	color: "primary.darker",
	padding: "0.6rem 1.2rem",
	borderRadius: "0.8rem",
	fontSize: "clamp(1.3rem, 1.4vw, 1.4rem)",
	transition: "background 0.3s ease",
	whiteSpace: "nowrap",
	"&:focus": {
		borderColor: "primary.dark",
		background: "primary.dark",
		color: "white"
	},
	"@media (hover: hover)": {
		"&:hover": {
			borderColor: "primary.dark",
			background: "primary.dark		",
			color: "white"
		}
	}
});

export const BooksPromo = () => {
	return (
		<aside aria-label="Los libros del Lenguaraz" className={banner}>
			<Wrapper variant="narrow">
				<div className={twoCols}>
					<div className={left}>
						<h2>Los libros del Lenguaraz</h2>
						<picture>
							<img src="/svg/writer.svg" alt="" width="61" height="100" />
						</picture>
					</div>

					<div className={right}>
						<div>
							<p>Hemos hecho una lista con todos los libros que se presentarán o de los que se hablará durante el festival.</p>
							<p>
								Puedes conseguirlos en&nbsp;
								<a href="https://libreriaeducania.com/" target="_blank" rel="noopener noreferrer">
									Educania
								</a>
								, nuestra librería de confianza en Murcia, cerca del teatro Romea.
							</p>
						</div>
						<Link className={button} href="/los-libros">
							Ver libros
						</Link>
					</div>
				</div>
			</Wrapper>
		</aside>
	);
};

export const ProgramPromo = () => {
	return (
		<aside aria-label="Edición 2025, el italiano" className={banner}>
			<Wrapper variant="narrow">
				<div className={twoCols}>
					<div className={left}>
						<h2>Edición 2025, el italiano</h2>
						<picture>
							<img src="/svg/sailor.svg" alt="" width="58" height="100" />
						</picture>
					</div>

					<div className={right}>
						<div>
							<p>Cada año, Lenguaraz tendrá una lengua invitada que se convierta en el leitmotiv del festival.</p>
							<p>
								La edición 2025 del Lenguaraz se celebrará del <b>5 al 9 de noviembre</b> en Murcia y tendrá como lengua protagonista
								al italiano.
							</p>
						</div>
						<Link className={button} href="/el-programa">
							Ver programa
						</Link>
					</div>
				</div>
			</Wrapper>
		</aside>
	);
};
