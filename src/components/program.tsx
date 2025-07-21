import { Wrapper } from "./wrapper";
import { css } from "@/styled-system/css";

const program = css({
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem",
	padding: ["4.8rem 0", "8rem 0"],
	"& h2": {
		fontSize: "clamp(2.4rem, 3.2vw, 3.2rem)",
		fontWeight: "700",
		fontFamily: "var(--font-sans)"
	}
});

const twoColumn = css({
	display: "grid",
	gridTemplateColumns: ["1f", "1fr 1fr"],
	gap: ["1.6rem", "2.4rem", "3.2rem"],
	"& > div": {
		display: "flex",
		flexDirection: "column",
		gap: "3.2rem",
		maxWidth: "45rem"
	}
});

const day = css({
	display: "flex",
	flexDirection: "column",
	gap: "1.6rem",
	"& h3": {
		fontSize: "clamp(1.8rem, 2.67vw, 2rem)",
		fontWeight: "700",
		fontFamily: "var(--font-sans)"
	}
});

const Day = ({ date, events }: { date: string; events: { time: string; title: string; description: string; location?: string }[] }) => {
	return (
		<div className={day}>
			<h3>{date}</h3>
			{events.map(event => (
				<div key={event.title}>
					<b>
						{event.time} - {event.title}
					</b>
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

				<div className={twoColumn}>
					<div>
						<p>Lenguaraz 2025 se celebrará del 5 al 12 de noviembre en Murcia y tendrá al Italiano como lengua protagonista.</p>
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
			</div>
		</Wrapper>
	);
};

export const DATA = [
	{
		date: "Miércoles, 5 de noviembre",
		events: [
			{
				time: "10:30",
				title: "Presentación de Lenguaraz.",
				description: "Presentación del festival en el Centro Penitenciario de Murcia.",
				location: "Centro Penitenciario de Murcia"
			},
			{
				time: "11:00",
				title: "“Montalbán/Montalbano”",
				description:
					"Diálogo sobre la literatura policiaca de Manuel Vázquez Montalbán y de Andrea Camilleri. Contaremos con autores, editores o críticos literarios.",
				location: "Centro Penitenciario de Murcia"
			},
			{
				time: "18:00",
				title: "“Escribir la Utopía”",
				description:
					"Conversación sobre “Il libro dell'incontro”, sobre la realización de encuentros restaurativos entre víctimas de violencia armada y sus autores. Contaremos con especialistas en justicia restaurativa.",
				location: "Centro Penitenciario de Murcia"
			}
		]
	},
	{
		date: "Jueves, 6 de noviembre",
		events: [
			{
				time: "17:30",
				title: "Inauguración de Lenguaraz",
				description: "Inauguración del festival con la presencia de autoridades y organizadores."
			},
			{
				time: "18:00",
				title: "“La bella Italia escribe”",
				description:
					"El estado de la literatura y la edición italiana contemporánea y su relación con España. Debate entre dos editoras, autoras o críticas."
			},
			{
				time: "19:00",
				title: "“¿Qué han hecho los romanos por nosotros?”",
				description:
					"Conversación sobre las influencias mutuas de la lengua italiana y española. Elena Herráiz. Linguriosa. Fiesta de inaguración del festival."
			}
		]
	},
	{
		date: "Viernes, 7 de noviembre",
		events: [
			{
				time: "11:00",
				title: "Ediciones bilingües (Nuestras lenguas)",
				description:
					"Presentaremos los libros “Itzulpena/Traducción” (edición bilingüe euskera-castellano), de Ángel Erro, editado por Gobierno de Navarra y “Estiu del 37” (edición bilingüe valenciano-castellano), de la editorial Llibres de l’Encobert. Contaremos con los autores o con responsables de las editoriales.",
				location: "Chiva o municipios afectados por la DANA"
			},
			{
				time: "17:30",
				title: "Ediciones bilingües (Italiano- Castellano)",
				description:
					"Presentaremos los libros “La Divina Comedia liberada” (Dante Alighieri), de la Editorial Blackie Books y “Las cenizas de Gramsci” (Pier Paolo Pasolini) de la editorial Visor libros. Contaremos con los traductores o responsables de las editoriales."
			},
			{
				time: "19:00",
				title: "“Fenómeno Ferrante”",
				description:
					"Diálogo sobre el fenómeno literario de Elena Ferrante. Contaremos con críticos literarios y responsables de su editorial en España."
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
				time: "12:00",
				title: "Literatura infantil italiana",
				description: "Encuentro con Alessandro Montagnana o con responsables de su editorial en España, Nube 8."
			},
			{
				time: "19:00",
				title: "Encuentro literario.",
				description: "Diálogo entre Miguel Ángel Hernández y Erri di Luca y/o Alessandro Baricco y/o Helena Janeczek."
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
					"Conversación sobre nuevos y viejos autoritarismos con Steven Forti, autor de “Extrema derecha 2.0” y Enric Juliana, periodista y prologuista de la citada obra."
			},
			{
				time: "14:00",
				title: "Clausura",
				description: "Clausura de la primera edición de Lenguaraz."
			}
		]
	}
];
