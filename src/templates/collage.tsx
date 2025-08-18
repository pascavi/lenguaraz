import { css } from "@/styled-system/css";

const IMAGES = [
	{ src: "ferrante.webp", alt: "Collage Image 1" },
	{ src: "juliana.webp", alt: "Collage Image 2" },
	{ src: "mondejar.webp", alt: "Collage Image 3" },
	{ src: "incontro.webp", alt: "Collage Image 10" },
	{ src: "agnese.webp", alt: "Collage Image 9" },
	{ src: "cenizas.webp", alt: "Collage Image 5" },
	{ src: "alemagna.webp", alt: "Collage Image 6" },
	{ src: "montalbano.webp", alt: "Collage Image 8" },
	{ src: "forti.webp", alt: "Collage Image 4" },
	{ src: "traduccion.webp", alt: "Collage Image 11" },
	{ src: "lidiagarcia.webp", alt: "Collage Image 7" },
	{ src: "pietrantonio.webp", alt: "Collage Image 12" }
];

const collage = css({
	margin: "auto",
	maxWidth: "130rem",
	"& > div": {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		padding: ["0", "0", "0", "0 2.4rem"]
	}
});

const picture = css({
	flex: ["1 1 33.33%", "1 1 25%"],
	aspectRatio: "1",
	overflow: "hidden",
	"& img": {
		objectFit: "cover",
		width: "100%",
		height: "100%"
	}
});

export const Collage = () => {
	return (
		<div className={collage} aria-hidden>
			<div>
				{IMAGES.map((image, index) => (
					<picture key={index} className={picture}>
						<img src={`/images/collage/${image.src}`} alt={image.alt} width="1000" height="600" />
					</picture>
				))}
			</div>
		</div>
	);
};
