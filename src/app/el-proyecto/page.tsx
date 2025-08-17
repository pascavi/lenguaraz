import { Header, Content, Footer, Educania } from "@/templates";

const Page = () => {
	return (
		<>
			<title>El proyecto - Festival Lenguaraz, Murcia 5-9 Nov</title>
			<meta name="description" content="Sobre el proyecto del festival." />
			<meta name="robots" content="noindex" />
			<Header />
			<Content title="El proyecto" variant="narrow">
				<h1>El proyecto</h1>
				<p>
					El festival Lenguaraz es una idea de Jorge Ollero desarrollada en colaboración con Ana Sánchez y la librería{" "}
					<a href="https://www.educania.com">Educania</a> de La Fábrica de Ilusiones S.L. Este proyecto ha recibido una ayuda del Ministerio
					de Cultura a través de la Dirección General del Libro, del Cómic y de la Lectura en su convocatoria de 2025.
				</p>
				<p>
					Lenguaraz un festival de literatura en el que también se tratan temáticas como la lingüística, la traducción e interpretación, la
					etnología del lenguaje, las ciencias de la comunicación, la política, el pensamiento y el arte.
				</p>
				<p>
					Puedes ponerte en contacto con nostros a traves del email{" "}
					<b>
						&#104;&#111;&#108;&#097;&#064;&#108;&#101;&#110;&#103;&#117;&#097;&#114;&#097;&#122;&#102;&#101;&#115;&#116;&#046;&#099;&#111;&#109;
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
					La imagen gráfica del festival ha sido diseñada por <a href="https://malisia.net">Malisia</a>. El lema del festival, &quot;Donde
					las lenguas son casas abiertas&quot;, procede de un poema de <a href="https://www.lacasaconlibros.com/">Luis Melgarejo</a>.
					Agradecer especialmente su colaboración a los profesores de la Facultad de Letras de la Universidad de Murcia, así como al
					departamento de italiano de la Escuela Oficial de Idiomas de Murcia.
					<a id="aviso-legal" />
				</p>
				<h2>Aviso legal</h2>
				<p>
					La Fábrica de ilusiones S.L. es titular del sitio web <a href="https://www.lenguaraz.com">www.lenguaraz.com</a>. Los datos
					identificativos del titular son: <br />
					Nombre: La Fábrica de ilusiones S.L.
					<br />
					CIF: B42791962
					<br />
					Dirección: Calle Sociedad 10, Murcia, 30004.
					<br />
				</p>

				<h2>Privacidad</h2>
				<p>
					Esta web no utiliza no almacena datos personales de los usuarios. Esta web no hace uso de <i>cookies</i>.
				</p>
			</Content>
			<Educania />
			<Footer />
		</>
	);
};

export default Page;
