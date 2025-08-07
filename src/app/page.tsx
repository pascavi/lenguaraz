import { Header, Collage, Program, Footer, Educania, Intro } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Festival Lenguaraz, Murcia 5-12 Noviembre</title>
			<meta
				name="description"
				content="Un espacio para celebrar la riqueza de las lenguas y la literatura de más allá de nuestras fronteras."
			/>
			<Header variant="home" />
			<Intro />
			<Collage />
			<Program />
			<Educania />
			<Footer />
		</>
	);
};

export default Page;
