import { Header, Content, Footer, BooksPromo, ProgramTwoColumns } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Programa del Festival Lenguaraz, Murcia 5-9 Nov 2025</title>
			<meta
				name="description"
				content="En la primera edición del festival Lenguaraz la lengua invitada será el italiano, una de nuestras lenguas hermanas mediterráneas."
			/>
			<meta name="canonical" content="https://lenguarazfest.com/el-programa" />
			<Header pathname="el-programa" />
			<Content title="Programa, edición 2025" section="El programa" variant="narrow">
				<ProgramTwoColumns />
			</Content>

			<BooksPromo />
			<Footer />
		</>
	);
};

export default Page;
