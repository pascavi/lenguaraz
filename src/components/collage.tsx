import { css } from "@/styled-system/css";

const IMAGES = [
	{ src: "ferrante.jpg", alt: "Collage Image 1" },
	{ src: "juliana.jpg", alt: "Collage Image 2" },
	{ src: "herraiz.jpg", alt: "Collage Image 3" },
	{ src: "incontro.jpg", alt: "Collage Image 10" },
	{ src: "forti.jpg", alt: "Collage Image 4" },
	{ src: "cenizas.jpg", alt: "Collage Image 5" },
	{ src: "janeczek.jpg", alt: "Collage Image 6" },
	{ src: "montalbano.jpg", alt: "Collage Image 8" },
	{ src: "montagna.jpg", alt: "Collage Image 9" },
	{ src: "traduccion.jpg", alt: "Collage Image 11" },
	{ src: "lidiagarcia.jpg", alt: "Collage Image 7" },
	{ src: "baricco.jpg", alt: "Collage Image 12" }
];

const collage = css({
	filter: "grayscale(100%)",
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
		<div className={collage}>
			<div>
				{IMAGES.map((image, index) => (
					<picture key={index} className={picture}>
						<img src={`/images/${image.src}`} alt={image.alt} width="1000" height="600" />
					</picture>
				))}
			</div>
		</div>
	);
};
