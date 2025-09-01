import { Header, Content, Footer, ProgramPromo, RichText } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Sobre el proyecto Lenguaraz</title>
			<meta name="description" content="Sobre el proyecto del festival." />
			<Header />
			<Content title="El proyecto" section="El proyecto" variant="narrow">
				<RichText>
					<p>
						El festival Lenguaraz es una idea de Jorge Ollero desarrollada en colaboración con Ana Sánchez y la librería{" "}
						<a href="https://www.educania.com">Educania</a> de La Fábrica de Ilusiones S.L. Este proyecto ha recibido una ayuda del
						Ministerio de Cultura a través de la Dirección General del Libro, del Cómic y de la Lectura en su convocatoria de 2025.
					</p>
					<p>
						Lenguaraz un festival de literatura en el que también se tratan temáticas como la lingüística, la traducción e interpretación,
						la etnología del lenguaje, las ciencias de la comunicación, la política, el pensamiento y el arte.
					</p>
					<p>
						Puedes ponerte en contacto con nostros a traves del email{" "}
						<b>
							<a href="mailto:&#104;&#111;&#108;&#097;&#064;&#108;&#101;&#110;&#103;&#117;&#097;&#114;&#097;&#122;&#102;&#101;&#115;&#116;&#046;&#099;&#111;&#109;">
								&#104;&#111;&#108;&#097;&#064;&#108;&#101;&#110;&#103;&#117;&#097;&#114;&#097;&#122;&#102;&#101;&#115;&#116;&#046;&#099;&#111;&#109;
							</a>
						</b>
						.
						<a id="agradecimientos" />
					</p>
					<h2>Agradecimientos</h2>
					<p>
						Gracias a todas las personas que han hecho posible este proyecto, desde los autores y autoras que participan, hasta el equipo
						técnico y organizativo, así como a las instituciones y patrocinadores que apoyan la iniciativa.
					</p>
					<p>
						La imagen gráfica del festival ha sido diseñada por{" "}
						<a target="_blank" href="https://malisia.net" rel="noreferrer">
							Malisia
						</a>
						. El lema del festival, &quot;Donde las lenguas son casas abiertas&quot;, procede de un poema de{" "}
						<a target="_blank" href="https://www.lacasaconlibros.com/" rel="noreferrer">
							Luis Melgarejo
						</a>
						. Agradecer especialmente su colaboración a los profesores de la Facultad de Letras de la Universidad de Murcia, así como al
						departamento de italiano de la Escuela Oficial de Idiomas de Murcia.
					</p>
				</RichText>
			</Content>
			<ProgramPromo />
			<Footer />
		</>
	);
};

export default Page;
