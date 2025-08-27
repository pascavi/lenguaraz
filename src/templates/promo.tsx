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
	borderColor: "primary.darker",
	borderWidth: "2px",
	color: "primary.darker",
	padding: "0.8rem 1.6rem",
	borderRadius: "0.8rem",
	fontSize: "1.4rem",
	transition: "background 0.3s ease",
	"&:focus": {
		borderColor: "primary.base",
		background: "primary.base",
		color: "white"
	},
	"@media (hover: hover)": {
		"&:hover": {
			borderColor: "primary.base",
			background: "primary.base",
			color: "white"
		}
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

export const PromoBooks = () => {
	return (
		<Banner title="Los libros del Lenguaraz" ctaUrl="/los-libros" ctaText="Ver libros">
			<p>Hemos hecho una lista con todos los libros que se presentarán o de los que se hablará en el festival.</p>
			<p>
				Puedes conseguirlos en nuestra librería de confianza,{" "}
				<a href="https://libreriaeducania.com/" target="_blank" rel="noopener noreferrer">
					Educania
				</a>
				, cerca del teatro Romea.
			</p>
		</Banner>
	);
};

export const PromoProgram = () => {
	return (
		<Banner title="Lenguaraz, edición 2025" ctaUrl="/el-programa" ctaText="Ver programa">
			<p>
				La edición 2025 del festival Lenguaraz se celebrará en Murcia del 5 al 9 de noviembre y se tendrá como lengua invitada al{" "}
				<b>italiano</b>.
			</p>
		</Banner>
	);
};

const Banner = ({ title, ctaUrl, ctaText, children }: { title: string; ctaUrl: string; ctaText: string; children?: React.ReactNode }) => {
	return (
		<aside className={books} aria-label={title}>
			<Wrapper>
				<div className={inner}>
					<div className={image}>
						<picture>
							<img src="/svg/sailor.svg" alt="" width="58" height="100" />
						</picture>
					</div>

					<div>
						<h2>{title}</h2>
						<div className={content}>{children}</div>
						<Link className={button} href={ctaUrl}>
							{ctaText}
						</Link>
					</div>
				</div>
			</Wrapper>
		</aside>
	);
};
