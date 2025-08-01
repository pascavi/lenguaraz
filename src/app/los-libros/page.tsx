import { Header, Content, Footer, Books } from "@/components";

const Page = () => {
	return (
		<>
			<title>Los libros - Festival Lenguaraz</title>
			<Header />
			<Content variant="narrow">
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
