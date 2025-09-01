import { Header, Content, Footer, ProgramPromo, Books, RichText } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Los libros del festival Lenguaraz 2025</title>
			<meta
				name="description"
				content="Listado de los libros que presentaremos o comentaremos durante la primera edición del festival Lenguaraz."
			/>
			<meta name="canonical" content="https://lenguarazfest.com/los-libros" />
			<Header pathname="los-libros" />
			<Content title="Los libros del Lenguaraz" section="Los libros" variant="narrow">
				<RichText>
					<p>
						Hemos hecho una lista con todos los libros que se presentarán o de los que se hablará en el festival. Puedes conseguirlos en
						nuestra librería de confianza,{" "}
						<a href="https://libreriaeducania.com/" target="_blank" rel="noopener noreferrer">
							Educania
						</a>
						, cerca del teatro Romea.
					</p>
				</RichText>
				<Books />
			</Content>

			<ProgramPromo />
			<Footer />
		</>
	);
};

export default Page;
