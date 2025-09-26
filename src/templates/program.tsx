import { Wrapper } from "@/components";
import { css } from "@/styled-system/css";
import React from "react";

const program = css({
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem",

	padding: ["5.6rem 0", "8rem 0"],
	"& h2": {
		color: "primary.dark",
		fontSize: "clamp(2.4rem, 3vw, 2.8rem)",
		fontWeight: "700",
		lineHeight: "1"
	}
});

const twoColumn = css({
	display: "flex",
	flexDirection: ["column", "column", "row"],
	justifyContent: "space-between",
	gap: ["2.4rem", "3.2rem", "4.8rem"],
	fontSize: "clamp(1.6rem, 1.8vw, 1.8rem)",
	"& > div": {
		display: "flex",
		flexDirection: "column",
		gap: "3.2rem",
		maxWidth: "52rem"
	}
});

const day = css({
	display: "flex",
	flexDirection: "column",
	gap: ["2rem", "2rem", "2.4rem"],
	"& h3": {
		color: "primary.dark",
		fontSize: "clamp(1.9rem, 2.67vw, 2.2rem)",
		fontWeight: "700",
		fontFamily: "var(--font-blatant)",
		lineHeight: "1"
	}
});

const entry = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.8rem",
	alignItems: "flex-start",
	"& h4": {
		fontWeight: "700",
		fontSize: "clamp(1.5rem, 1.6vw, 1.6rem)"
	},
	"& div": {
		display: "flex",
		flexDirection: "column",
		gap: "0.4rem",
		alignItems: "flex-start"
	},
	"& a": {
		display: "inline-flex",
		alignItems: "center",
		gap: "0.6rem",
		fontSize: "clamp(1.4rem, 1.6vw, 1.6rem)",
		color: "primary.dark"
	},
	"& svg": {
		display: "inline-block",
		position: "relative",
		top: "-0.1rem",
		width: ["1.2rem", "1.6rem"],
		height: ["1.2rem", "1.6rem"]
	}
});

const Day = ({ date, events }: { date: string; events: { time: string; title: string; description: string; location?: string; map?: string }[] }) => {
	return (
		<div className={day}>
			<h3>{date}</h3>
			{events.map(event => (
				<div key={`${event.time},${event.title}`} className={entry}>
					<h4>
						{event.time} - {event.title}
					</h4>

					<div dangerouslySetInnerHTML={{ __html: "<p>" + event.description.split("\n").join("</p><p>") + "</p>" }} />

					{event.location && (
						<a href={event.map} target="_blank" rel="noopener noreferrer">
							<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-label="Localización">
								<use href="/svg/icons.svg?1.3#location" />
							</svg>
							{event.location}
						</a>
					)}
				</div>
			))}
		</div>
	);
};

export const Program = () => {
	return (
		<Wrapper variant="narrow">
			<div className={program} id="programa">
				<h2>Programa, edición 2025</h2>
				<ProgramTwoColumns />
			</div>
		</Wrapper>
	);
};

export const ProgramTwoColumns = () => {
	return (
		<div className={twoColumn}>
			<div>
				<p>
					Lenguaraz 2025 se celebrará del <b>5 al 9 de noviembre</b> en Murcia y tendrá al Italiano como lengua protagonista.
				</p>
				{DATA.slice(0, 2).map(item => (
					<Day key={item.date} date={item.date} events={item.events} />
				))}
			</div>
			<div>
				{DATA.slice(2, 5).map(item => (
					<Day key={item.date} date={item.date} events={item.events} />
				))}
			</div>
		</div>
	);
};

export const DATA = [
	{
		date: "Miércoles 5: prólogo.",
		events: [
			// {
			// 	time: "10:00",
			// 	title: "Presentación de Lenguaraz.",
			// 	description: "Presentación del festival con Jorge Ollero Perán.",
			// 	location: "Centro Penitenciario de Murcia",
			// 	map: "https://maps.app.goo.gl/epbHddnCyqXrLBTV9"
			// },
			{
				time: "10:30",
				title: "“Escribir la Utopía”",
				description:
					"Conversación sobre “Il libro dell'incontro” (Editorial Il Saggiatore), sobre la realización de encuentros restaurativos entre víctimas de violencia armada y sus autores.\nCon Patricia Patrizi, profesora de la Universidad de Sassari, y Jorge Ollero Perán. Actividad del aula de cultura de Solidarios para el Desarrollo.",
				location: "Centro Penitenciario de Murcia",
				map: "https://maps.app.goo.gl/epbHddnCyqXrLBTV9"
			},
			{
				time: "18:00",
				title: "“Escribir la Utopía”",
				description:
					"Conversación sobre “Il libro dell'incontro” (Editorial Il Saggiatore), sobre la realización de encuentros restaurativos entre víctimas de violencia armada y sus autores.\nCon Patricia Patrizi, profesora de la Universidad de Sassari, y Lola López Mondéjar. Modera: Jorge Ollero Perán.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			}
		]
	},
	{
		date: "Jueves 6: presentación.",
		events: [
			{
				time: "17:00",
				title: "Inauguración de Lenguaraz",
				description: "Inauguración del festival con la presencia de autoridades y organizadores. Con Ana Sánchez y Jorge Ollero.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},
			{
				time: "17:30",
				title: "“Narrar con liberación”",
				description:
					"Diálogo sobre las narrativas italianas. Con Sandra Ollo (Editorial Acantilado) y Lola López Mondéjar, escritora y psicoanalista.\nModera: Manuel Madrid, Jefe de área de Culturas en La Verdad.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},
			{
				time: "19:00",
				title: "Diálogo sobre la lengua italiana",
				description:
					"Con Antonio Candeloro, de la Sociedad Dante Alighieri y profesor en la UCAM, y María Belén Hernández González, catedrática de filología Italiana en la UMU.\nModera: Daniela Valencia, directora de Vibrante Comunicación.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			}
		]
	},
	{
		date: "Viernes 7: nudo.",
		events: [
			{
				time: "17:00",
				title: "Ediciones bilingües (Nuestras lenguas)",
				description:
					"Presentaremos los libros “Itzulpena/Traducción” (euskera-castellano), de Ángel Erro, editado por el Gobierno de Navarra y “Estiu del 37” (valenciano-castellano), de la editorial Llibres de l’Encobert.\nCon Ángel Erro, poeta y traductor, y José Lopez Camarillas de la Ed. Llibres de l’Encobert. Modera: Constanza Sánchez, politóloga.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},
			{
				time: "19:00",
				title: "Ediciones bilingües (Italiano- Castellano)",
				description:
					"Presentaremos los libros “La Divina Comedia liberada” (Dante Alighieri), de la Editorial Blackie Books y “Las cenizas de Gramsci” (Pier Paolo Pasolini) de la editorial Visor libros.\nCon Jorge Martí, editor en Blackie Books, y Juan Carlos Abril, poeta y traductor. Modera: Isidro Cantero, abogado.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},

			{
				time: "21:00",
				title: "Fiesta flamenca",
				description: "Fiesta flamenca y presentación de “Tarantela Sevillana” a cargo de la autora, Lidia García García.",
				location: "Café-Bar El sur",
				map: "https://maps.app.goo.gl/A35vNwA8YvK9s3Lx9"
			}
		]
	},
	{
		date: "Sábado 8: nudo.",
		events: [
			{
				time: "11:00",
				title: "Literatura infantil italiana",
				description: "Encuentro y cuentacuentos con Alessandro Montagnana, autor de libros como “El viaje de Candela” y “Mandril”.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},
			{
				time: "17:30",
				title: "“Fenómeno Ferrante”",
				description:
					"Diálogo sobre el fenómeno literario de Elena Ferrante.\nCon Cecilia Fillipeto, traductora de Elena Ferrante, y María Reyes Ferrer, profesora de la UMU.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},
			{
				time: "19:00",
				title: "Encuentro literario.",
				description: "Diálogo entre Miguel Ángel Hernández (escritor y profesor) y Valentina Colonna (poeta y música).\nModera: Ana Sánchez",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			}
		]
	},
	{
		date: "Domingo 9: desenlace.",
		events: [
			{
				time: "12:00",
				title: "Todo empezó en Italia.",
				description:
					"Conversación sobre nuevos y viejos autoritarismos con Steven Forti, autor de “Democracias en extinción” y “Extrema derecha 2.0”, y Enric Juliana, periodista y prologuista de la última obra.\nModera: Elisa Reche, de elDiario.es Murcia.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			},
			{
				time: "14:00",
				title: "Clausura",
				description: "Clausura de la primera edición de Lenguaraz. Con Ana Sánchez y Jorge Ollero.",
				location: "Museo de Bellas Artes de Murcia",
				map: "https://maps.app.goo.gl/rQLSZBV6tffK9urD8"
			}
		]
	}
];
