import { Header, Content, Footer, Educania } from "@/templates";

const Page = () => {
	return (
		<>
			<title>El proyecto - Festival Lenguaraz, Murcia 5-9 Nov</title>
			<meta name="description" content="Sobre el proyecto del festival." />
			<meta name="canonical" content="https://lenguarazfest.com/el-festival" />
			<Header />
			<Content title="El proyecto" variant="narrow">
				<h1>El proyecto</h1>
				<p>
					Es un festival de literatura en el que también trataremos temáticas como la lingüística, la traducción e interpretación, la
					etnología del lenguaje, las ciencias de la comunicación, la política, el pensamiento y el arte.
				</p>
				<p>
					Puedes ponerte en contacto con nostros a traves del email{" "}
					<b>
						&#104;&#111;&#108;&#097;&#064;&#108;&#101;&#110;&#103;&#117;&#097;&#114;&#097;&#122;&#102;&#101;&#115;&#116;&#046;&#099;&#111;&#109;
					</b>
					<a id="agradecimientos" />
				</p>
				<h2>Agradecimientos</h2>
				<p>
					Gracias a todas las personas que han hecho posible este proyecto, desde los autores y autoras que participan, hasta el equipo
					técnico y organizativo, así como a las instituciones y patrocinadores que apoyan la iniciativa.
					<a id="aviso-legal" />
				</p>
				<h2>Aviso legal</h2>
				<p>
					Este festival se organiza cumpliendo con todas las normativas legales vigentes. Para más información, puedes consultar nuestra
					página de aviso legal.
				</p>
				<h2>Privacidad</h2>
				<p>Esta web no utiliza ni almacena datos personales de los usuarios. No utilizamos cookies.</p>
			</Content>
			<Educania />
			<Footer />
		</>
	);
};

export default Page;
