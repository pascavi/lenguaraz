import { Header, Content, Footer, PromoProgram, Books } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Los libros - Festival Lenguaraz, Murcia 5-9 Nov</title>
			<meta
				name="description"
				content="Listado de los libros que presentaremos o comentaremos durante la primera edición del festival Lenguaraz."
			/>
			<meta name="canonical" content="https://lenguarazfest.com/los-libros" />
			<Header pathname="los-libros" />
			<Content title="Los libros" variant="narrow">
				<h1>Los libros del Lenguaraz</h1>
				<p>
					Hemos hecho una lista con todos los libros que se presentarán o de los que se hablará en el festival. Puedes conseguirlos en
					nuestra librería de confianza,{" "}
					<a href="https://libreriaeducania.com/" target="_blank" rel="noopener noreferrer">
						Educania
					</a>
					, cerca del teatro Romea.
				</p>
				<Books />
			</Content>

			<PromoProgram />
			<Footer />
		</>
	);
};

export default Page;
