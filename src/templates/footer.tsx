import { css } from "@/styled-system/css";
import { Wrapper } from "@/components";

const footer = css({
	backgroundColor: "primary.light",
	padding: ["4.8rem 0 9.6rem", "5.6rem 0 9.6rem"]
});

const inner = css({
	display: "flex",
	flexDirection: ["column", "column", "row"],
	gap: "4rem",
	justifyContent: "space-between"
});

const block = css({
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem",
	fontSize: "clamp(1.3rem, 1.6vw, 1.6rem)",
	"& > div": {
		display: "flex",
		flexWrap: "wrap",
		gap: "3.2rem"
	}
});

const logos = css({
	display: "flex",
	flexWrap: "wrap",
	gap: "3.2rem",
	"& img": {
		height: "5.6rem",
		width: "auto"
	}
});

export const Footer = () => (
	<footer className={footer}>
		<Wrapper>
			<div className={inner}>
				<div className={block}>
					<p>Colabora:</p>
					<div className={logos}>
						<img src="/logos/ministerio.svg" alt="Logo 1" width="200" height="100" />
						<img src="/logos/murcia.svg" alt="Logo 2" width="200" height="100" />
					</div>
				</div>
				<div className={block}>
					<p>Contacto:</p>
					<a href="mailto:info@lenguaraz.es">info@lenguarazfest.com</a>
				</div>
			</div>
		</Wrapper>
	</footer>
);
