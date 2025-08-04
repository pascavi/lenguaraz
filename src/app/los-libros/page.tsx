import { Header, Content, Footer, Books } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Los libros - Festival Lenguaraz</title>
			<meta
				name="description"
				content="Listado de los libros que presentaremos o comentaremos durante la primera edición del festival Lenguaraz."
			/>
			<Header />
			<Content title="Los libros">
				<h1>Los libros del Lenguaraz</h1>
				<p>Hemos hecho una lista con todos los libros que se presentarán o de los que se hablará en el festival.</p>
				<p>
					Puedes conseguirlos en nuestra librería de confianza,{" "}
					<a href="https://libreriaeducania.com/" target="_blank" rel="noopener noreferrer">
						Educania
					</a>
					, cerca del teatro Romea.
				</p>
			</Content>

			<Books />
			<Footer />
		</>
	);
};

export default Page;
