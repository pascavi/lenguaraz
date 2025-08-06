import { Header, Content, Footer, Books, ProgramTwoColumns } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Los libros - Festival Lenguaraz</title>
			<meta
				name="description"
				content="En la primera edición del festival Lenguaraz la lengua invitada será el italiano, una de nuestras lenguas hermanas mediterráneas."
			/>
			<Header pathname="el-programa" />
			<Content title="El programa">
				<h1>Programa de la edición 2025</h1>
				<ProgramTwoColumns />
			</Content>

			<Books />
			<Footer />
		</>
	);
};

export default Page;
