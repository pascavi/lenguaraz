import { Wrapper } from "@/components";
import { css } from "@/styled-system/css";

const program = css({
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem",
	fontSize: "clamp(1.6rem, 1.8vw, 1.8rem)",
	padding: ["5.6rem 0", "8rem 0"],
	"& h2": {
		color: "primary.base",
		fontSize: "clamp(2.4rem, 3vw, 2.8rem)",
		fontWeight: "700",
		lineHeight: "1"
	}
});

const twoColumn = css({
	display: "flex",
	flexDirection: ["column", "column", "row"],
	justifyContent: "space-between",
	gap: ["1.6rem", "2.4rem", "4.8rem"],
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
	gap: ["1.6rem", "1.6rem", "2.4rem"],
	"& h3": {
		color: "primary.base",
		fontSize: "clamp(1.8rem, 2.67vw, 2.2rem)",
		fontWeight: "700",
		fontFamily: "var(--font-blatant)",
		lineHeight: "1"
	},
	"& h4": {
		fontWeight: "700",
		fontSize: "clamp(1.4rem, 1.6vw, 1.6rem)",
		marginBottom: "0.8rem"
	}
});

const Day = ({ date, events }: { date: string; events: { time: string; title: string; description: string; location?: string }[] }) => {
	return (
		<div className={day}>
			<h3>{date}</h3>
			{events.map(event => (
				<div key={event.title}>
					<h4>
						{event.time} - {event.title}
					</h4>
					<p>{event.description}</p>
					{event.location && <p>{event.location}</p>}
				</div>
			))}
		</div>
	);
};

export const Program = () => {
	return (
		<Wrapper>
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
		date: "Miércoles, 5 de noviembre",
		events: [
			{
				time: "10:30",
				title: "Presentación de Lenguaraz.",
				description: "Presentación del festival con Jorge Ollero Perán.",
				location: "Centro Penitenciario de Murcia"
			},
			{
				time: "11:00",
				title: "“Montalbán/Montalbano”",
				description:
					"Diálogo sobre la literatura policiaca de Manuel Vázquez Montalbán y de Andrea Camilleri. Contaremos con autores, editores o críticos literarios. Modera: María Ángeles Carnacea."
			},
			{
				time: "18:00",
				title: "“Escribir la Utopía”",
				description:
					"Conversación sobre “Il libro dell'incontro” (Editorial Il Saggiatore), sobre la realización de encuentros restaurativos restaurativos entre víctimas de violencia armada y sus autores. Con Agnese Moro y Patricia Patrizi. Modera: Jorge Ollero Perán."
			}
		]
	},
	{
		date: "Jueves, 6 de noviembre",
		events: [
			{
				time: "17:30",
				title: "Inauguración de Lenguaraz",
				description: "Inauguración del festival con la presencia de autoridades y organizadores. Con Ana Sánchez y Jorge Ollero."
			},
			{
				time: "18:00",
				title: "“Narrar con liberación”",
				description:
					"Diálogo sobre las narrativas italianas. Con Sandra Ollo (Editorial Acantilado) y Lola López Mondéjar. Modera: Manuel Madrid."
			},
			{
				time: "19:00",
				title: "Diálogo sobre la lengua italiana",
				description: "Con Pedro Luis Ladrón de Guevara Mellado y María Belén Hernández González de la Universidad de Murcia."
			}
		]
	},
	{
		date: "Viernes, 7 de noviembre",
		events: [
			{
				time: "17:00",
				title: "Ediciones bilingües (Nuestras lenguas)",
				description:
					"Presentaremos los libros “Itzulpena/Traducción” (euskera-castellano), de Ángel Erro y “Estiu del 37” (valenciano-castellano), de la editorial Llibres de l’Encobert. Con Angel Erro y José Lopez Camarillas. Modera: Constanza Sánchez."
			},
			{
				time: "19:00",
				title: "Ediciones bilingües (Italiano- Castellano)",
				description:
					"Presentaremos los libros “La Divina Comedia liberada” (Dante Alighieri), de la Editorial Blackie Educania y “Las cenizas de Gramsci” (Pier Paolo Pasolini) de la editorial Visor libros. Con Jorge Martí y Juan Carlos Abril. Modera: Encarnación Esteban Bernabé."
			},
			{
				time: "21:00",
				title: "Fiesta flamenca",
				description: "Fiesta flamenca y presentación de “Tarantela Sevillana” a cargo de la autora, Lidia García García."
			}
		]
	},
	{
		date: "Sábado, 8 de noviembre",
		events: [
			{
				time: "11:00",
				title: "Literatura infantil italiana",
				description: "Encuentro con la autora Betrice Alemagna y María Rubio de la EOI de Murcia."
			},
			{
				time: "13:00",
				title: "“Fenómeno Ferrante”",
				description:
					"Diálogo sobre el fenómeno literario de Elena Ferrante. Con María Fasce, editora de Ferrante y María Reyes Ferrer de la UMU."
			},
			{
				time: "19:00",
				title: "Encuentro literario.",
				description: "Diálogo entre Miguel Ángel Hernández y Donatella di Pietrantonio."
			}
		]
	},
	{
		date: "Domingo, 9 de noviembre",
		events: [
			{
				time: "12:00",
				title: "Todo empezó en Italia.",
				description:
					"Conversación sobre nuevos y viejos autoritarismos con Steven Forti, autor de “Extrema derecha 2.0” y Enric Juliana, periodista y prologuista de la citada obra. Modera Elisa Reche, de El Diario.es Murcia."
			},
			{
				time: "14:00",
				title: "Clausura",
				description: "Clausura de la primera edición de Lenguaraz. Con Ana Sánchez y Jorge Ollero."
			}
		]
	}
];
