import { css } from "@/styled-system/css";

const IMAGES = [
	{ src: "ferrante.webp", alt: "Fenómeno ferrante" },
	{ src: "juliana.webp", alt: "Enric Juliana", overlay: true },
	{ src: "patrizi.webp", alt: "Patrizia Patrizi", overlay: true },
	{ src: "montagnana.webp", alt: "Alessandro Montagnana", overlay: true },
	{ src: "lidiagarcia.webp", alt: "Lidia García", overlay: true },
	{ src: "incontro.webp", alt: "Il libro dell'incontro" },
	{ src: "mondejar.webp", alt: "Lola López Mondejar", overlay: true },
	{ src: "cenizas.webp", alt: "Las cenizas de Gramci" },
	{ src: "forti.webp", alt: "Steven Forti", overlay: true },
	{ src: "hernandez.webp", alt: "Miguel Ángel Hernández", overlay: true },
	{ src: "traduccion.webp", alt: "Itzulpena-Traducción" },
	{ src: "colonna.webp", alt: "Valentina Colonna", overlay: true }
];

const AUTHORS_LIST = IMAGES.filter(i => i.overlay)
	.map(i => i.alt)
	.join(", ");

const wrapper = css({
	maxWidth: ["100%", null, null, null, "120rem"],
	margin: "auto"
});

const collage = css({
	display: "flex",
	flexWrap: "wrap",
	width: "100%"
});

const picture = css({
	flex: ["1 1 33.33%", "1 1 25%"],
	aspectRatio: "1",
	overflow: "hidden",
	position: "relative",
	"& img": {
		objectFit: "cover",
		width: "100%",
		height: "100%",
		transform: "scale(1.01)"
	},
	"&:hover img[data-overlay]": {
		transition: "transform 0.4s ease-in-out 0.2s, filter 0.4s ease-in-out 0.2s",
		transform: "scale(0.9)",
		filter: "grayscale(100%) brightness(1.1) contrast(1.2)"
	},
	"& .overlay": {
		opacity: "0",
		transition: "opacity 0.4s ease-in-out",
		position: "absolute",
		inset: "0",
		backgroundImage: "url(/svg/collage-overlay.svg)",
		backgroundSize: "cover"
	},
	"&:hover .overlay": {
		opacity: "1"
	},
	"& .overlay span": {
		position: "absolute",
		left: ["4%", "7%"],
		bottom: ["2%", "5%"],
		fontSize: "clamp(1rem, 1.4vw, 1.4rem)",
		color: "white"
	}
});

export const Collage = () => {
	return (
		<div className={wrapper}>
			<span className="visually-hidden">{`Participarán en el festival: ${AUTHORS_LIST}`}</span>
			<div aria-hidden className={collage}>
				{IMAGES.map((image, index) => (
					<picture key={index} className={picture}>
						<img src={`/images/collage/${image.src}`} alt={image.alt} width="1000" height="600" data-overlay={image.overlay} />
						{image.overlay && (
							<div className="overlay">
								<span>{image.alt}</span>
							</div>
						)}
					</picture>
				))}
			</div>
		</div>
	);
};
