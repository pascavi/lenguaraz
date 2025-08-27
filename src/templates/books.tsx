import React from "react";
import { css } from "@/styled-system/css";

const books = css({
	display: "flex",
	flexDirection: "column",
	gap: ["4rem", null, "6rem"],
	marginTop: "2rem"
});

const card = css({
	width: "100%",
	display: "flex",
	alignItems: "start",
	gap: ["2rem", "4rem"],
	"& h2": {
		fontSize: "clamp(1.8rem, 1.8vw, 2.2rem)",
		fontWeight: "600"
	},
	"& picture": {
		marginTop: "0.8rem",
		flexBasis: ["20%", null, "16%"]
	},
	"& img": {
		width: "100%",
		height: "auto"
	},
	"& p": {
		fontSize: "clamp(1.4rem, 1.4vw, 1.8rem)",
		color: "text.base"
	},
	"& b": {
		fontFamily: "secondary",
		fontSize: "clamp(1.6rem, 1.4vw, 2rem)",
		color: "primary.dark"
	},
	"& section": {
		flexBasis: ["80%", null, "84%"],
		display: "flex",
		flexDirection: "column",
		gap: ["1.6rem", null, "2.4rem"]
	},
	"& section div": {
		display: "flex",
		flexDirection: "column",
		gap: "0.8rem"
	}
});

type Book = { title: string; author: string; editorial: string; description: string; image: string; authorLabel: string; imageWidth: number };

const Book = ({ book }: { book: Book }) => {
	return (
		<div className={card}>
			<picture>
				<img src={book.image} alt="" width={book.imageWidth} height="640" />
			</picture>
			<section>
				<div>
					<h2>{book.title}</h2>
					<p>
						<b>{book.authorLabel}:</b> {book.author}
					</p>
					<p>
						<b>Editorial:</b> {book.editorial}
					</p>
				</div>
				<p>{book.description}</p>
			</section>
		</div>
	);
};

export const Books = () => {
	return (
		<div className={books}>
			{DATA.map(item => (
				<Book key={item.title} book={item} />
			))}
		</div>
	);
};

const DATA = [
	{
		title: "Novelas del inspector Montalbano",
		author: "Andrea Camilleri",
		authorLabel: "Autor",
		editorial: "Salamandra",
		description:
			"Serie de novelas policíacas protagonizadas por Salvo Montalbano, comisario de policía en la imaginaria ciudad costera de Vigàta, en Sicilia. La serie es conocida por su mezcla de intriga, ironía, crítica social, y un profundo retrato de la sociedad siciliana contemporánea. Los primeros casos es una recopilación de las primeras historias del inspector Montalbano.",
		image: "/images/libros/montalbano.webp",
		imageWidth: 419
	},
	{
		title: "Novelas del detective Pepe Carvalho",
		author: "Manuel Vázquez Montalbán",
		authorLabel: "Autor",
		editorial: "Planeta, Ediciones B y Galaxia Gutenberg",
		description:
			"Las novelas del detective Pepe Carvalho son una serie de relatos que combinan la intriga policial con una aguda crítica social. Carvalho, un detective privado con un enfoque poco convencional, se enfrenta a diversos casos en la Barcelona de los años 70 y 80.",
		image: "/images/libros/montalban.webp",
		imageWidth: 424
	},
	{
		title: "Il libro dell'incontro",
		author: "Guido Bertagna, Adolfo Ceretti, Claudia Mazzucato",
		authorLabel: "Autores",
		editorial: "Il Saggiatore",
		description:
			"Il libro dell'incontro es una obra colectiva que documenta un proceso real de diálogo y reconciliación entre exmiembros de organizaciones armadas activas durante los llamados “años de plomo” en Italia (como las Brigadas Rojas) y familiares de sus víctimas.",
		image: "/images/libros/incontro.webp",
		imageWidth: 461
	},
	{
		title: "Sin Relato",
		author: "Lola López Mondéjar",
		authorLabel: "Autora",
		editorial: "Anagrama",
		description:
			"Ensayo que reflexiona sobre la tesis de que el individuo posmoderno  ha perdido su capacidad para elaborar un relato sobre el que construir su identidad, como consecuencia del exceso de estímulos propio del capitalismo de la atención, la dependencia sumisa a los dispositivos tecnológicos y la permanente distracción que estos nos provocan.",
		image: "/images/libros/mondejar.webp",
		imageWidth: 406
	},
	{
		title: "Itzulpena/Traducción",
		author: "Ángel Erro",
		authorLabel: "Autor",
		editorial: "Gobierno de Navarra",
		description:
			"Este libro quiere rendir homenaje al bilingüismo y a la traducción, pero sobre todo es una investigación sobre la poesía, sobre la verdad poética que se dice vivir más allá de las palabras, a través del bilingüismo y la traducción. Cada poema se ofrece en dos variantes, en las dos lenguas del autor, creyendo que encontrar la cara y cruz de un mismo sentimiento puede resultar más fiel a través de el resquicio entre una lengua y otra.",
		image: "/images/libros/traduccion.webp",
		imageWidth: 409
	},
	{
		title: "Estiu del 37",
		author: "José Lopez Camarillas",
		authorLabel: "Autor",
		editorial: "Llibres de l’Encobert",
		description:
			"Estiu del 37 es una novela que se sitúa en el contexto de la Guerra Civil Española, explorando las vivencias de sus personajes durante un verano crucial. A través de una prosa evocadora, Casanova retrata la complejidad de las relaciones humanas en tiempos de conflicto.",
		image: "/images/libros/estiu.webp",
		imageWidth: 424
	},
	{
		title: "La Divina Comedia liberada",
		author: "Dante Alighieri",
		authorLabel: "Autor",
		editorial: "Blackie books",
		description:
			"La Divina Comedia liberada es una nueva traducción de la obra maestra de Dante Alighieri, que busca acercar el texto original a los lectores contemporáneos. Esta edición incluye notas y comentarios que facilitan la comprensión del contexto histórico y cultural de la obra.",
		image: "/images/libros/dante.webp",
		imageWidth: 471
	},
	{
		title: "Las cenizas de Gramsci",
		author: "Pier Paolo Pasolini",
		authorLabel: "Autor",
		editorial: "Visor libros",
		description:
			"En Las cenizas de Gramsci se condensa el debate ético de la poesía contemporánea, la búsqueda de una reflexión que mantenga intacta la lealtad a los sueños, sin que esa lealtad nos aparte de la lucidez. El resultado es una conciencia que se sitúa en la vitalidad desesperada, una indagación sentimental que renuncia a la comodidad ofrecida por cualquier tipo de pureza, para siturse en las contradiciones de la historia y del deseo.",
		image: "/images/libros/cenizas.webp",
		imageWidth: 409
	},
	{
		title: "Tarantela sevillana",
		author: "Lidia García García",
		authorLabel: "Autora",
		editorial: "Ediciones B",
		description:
			"Las trayectorias artísticas de Lola Flores, Carmen Sevilla y Sara Montiel coinciden en presentar numerosas conexiones con Italia. En este libro, fruto de sus investigaciones en la Real Academia de España en Roma, Lidia García explora los vínculos entre estas tres populares estrellas del cine, la canción española y el panorama cultural italiano de la época.",
		image: "/images/libros/tarantela.webp",
		imageWidth: 421
	},
	{
		title: "Literatura infantil de Betrice Alemagna",
		author: "Betrice Alemagna",
		authorLabel: "Autora",
		editorial: "Eccomi, A buen paso, Combel",
		description:
			"Los libros de Beatrice Alemagna son álbumes ilustrados que se destacan por su sensibilidad, creatividad visual y temas que celebran la infancia, la curiosidad y la identidad. Con un estilo artístico único y textos poéticos, sus obras invitan a mirar el mundo con asombro y empatía.",
		image: "/images/libros/alemagna.webp",
		imageWidth: 475
	},
	{
		title: "Novelas de Elena Ferrante",
		author: "Elena Ferrante",
		authorLabel: "Autora",
		editorial: "Lumen, Debolsillo",
		description:
			"Las novelas de Elena Ferrante han sido aclamadas por su profunda exploración de la identidad femenina, la amistad y las complejidades de las relaciones humanas. A través de su prosa evocadora, Ferrante invita a los lectores a sumergirse en mundos ricos y matizados. La última de sus novelas lleva por título 'La vida mentirosa de los adultos'",
		image: "/images/libros/ferrante.webp",
		imageWidth: 421
	},
	{
		title: "Novelas de Donatella di Pietrantonio",
		author: "Donatella di Pietrantonio",
		authorLabel: "Autora",
		editorial: "Duomo ediciones",
		description:
			"Las novelas de Donatella di Pietrantonio exploran las complejidades de las relaciones humanas y la búsqueda de identidad en un mundo en constante cambio. Su prosa íntima y evocadora invita a los lectores a reflexionar sobre sus propias experiencias y emociones, destacando su estilo sobrio y potente. Sú última libro se llama 'La edad frágil'.",
		image: "/images/libros/pietrantonio.webp",
		imageWidth: 422
	},
	{
		title: "Extrema derecha 2.0: Qué es y cómo combatirla",
		author: "Steven Forti",
		authorLabel: "Autor",
		editorial: "Editorial Anagrama",
		description:
			"En Extrema derecha 2.0 Forti  señala que, alejada de los fascismos que asolaron Europa y desde el estilo populista que permea nuestro presente, la nueva extrema derecha está alcanzando una dimensión de fenómeno global. Disfrazada de democrática, la extrema derecha no solo ha entrado en las instituciones y comienza a tener un mayor peso, sino que pulula por internet y gangrena las redes sociales para corroer la democracia desde dentro.",
		image: "/images/libros/forti.webp",
		imageWidth: 413
	}
];
