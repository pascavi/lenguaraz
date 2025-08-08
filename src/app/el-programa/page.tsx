import { Header, Content, Footer, Educania, ProgramTwoColumns } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Programa de la edición 2025 - Festival Lenguaraz, Murcia 5-9 Nov</title>
			<meta
				name="description"
				content="En la primera edición del festival Lenguaraz la lengua invitada será el italiano, una de nuestras lenguas hermanas mediterráneas."
			/>
			<Header pathname="el-programa" />
			<Content title="El programa">
				<h1>Programa de la edición 2025</h1>
				<ProgramTwoColumns />
			</Content>

			<Educania />
			<Footer />
		</>
	);
};

export default Page;
