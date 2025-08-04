import { Header, Content, Footer, Books } from "@/templates";

const Page = () => {
	return (
		<>
			<title>¿Qué es lenguaraz? - Festival Lenguaraz</title>
			<meta
				name="description"
				content="En la primera edición del festival Lenguaraz la lengua invitada será el italiano, una de nuestras lenguas hermanas mediterráneas."
			/>
			<Header />
			<Content title="El festival">
				<h1>¿Qué es Lenguaraz?</h1>
				<p>
					Es un festival de literatura en el que también trataremos temáticas como la lingüística, la tra ducción e interpretación, la
					etnología del lenguaje, las ciencias de la comunicación, la política, el pensamiento y el arte.
				</p>
				<p>
					Creemos firmemente que las lenguas han de ser puentes y no muros. Entendemos que las lenguas que existen en el mundo ensanchan
					nuestra realidad y enriquecen nuestro pensa miento. Estamos convencidas de que, como dice el verso de Luis Melgarejo,{" "}
					<b>«las lenguas son casas abiertas»</b> y, por ello, <b>Lenguaraz</b> será un espacio de promoción de la lectura centrado en todo
					lo que tenga que ver con las lenguas y las distintas formas de ver el mundo que nos da la diversidad lingüística.
				</p>
				<p>
					<b>Lenguaraz</b> impulsará la lectura y la literatura organizando ponencias y diálogos con autores/as, editores/as, traductores,
					críticos/as y otros/as profesionales del mundo del libro. Se promoverá la lectura en castellano pero también en las lenguas
					cooficiales de España y, dado nuestro en foque plurilingüístico, acercaremos al público lector la riqueza de las ediciones
					bilingües y de los mundo literarios más allá de nuestras fronteras.
				</p>
				<h2>Edición 2025, el italiano</h2>
				<p>
					Cada año, <b>Lenguaraz</b> tendrá una lengua invitada, de forma que ese universo lingüístico se convierta en el leitmotiv del
					festival, entendiendo que la lectura y las letras españolas se enri quecen al ponerlas en relación con otras literaturas. En esta
					primera edición, la lengua invitada será el italiano, una de nuestras lenguas hermanas mediterráneas, por lo que habrá ponencias
					sobre el estado editorial en este idioma, diálogos con autores italianos y presentaciones de ediciones bilingües español-italiano.
				</p>
				<p>
					<b>Lenguaraz</b> tendrá un fuerte compromiso social, que se manifestará en su esfuerzo de llevar la cultura allá donde más se
					necesite.
				</p>
			</Content>
			<Books />
			<Footer />
		</>
	);
};

export default Page;
