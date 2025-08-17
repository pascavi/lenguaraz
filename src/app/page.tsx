import { Header, Collage, Program, Footer, PromoBooks, Intro } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Festival de literatura Lenguaraz, Murcia 5-9 Noviembre</title>
			<meta
				name="description"
				content="Un espacio para celebrar la riqueza de las lenguas y la literatura de más allá de nuestras fronteras."
			/>
			<meta name="canonical" content="https://lenguarazfest.com" />
			<Header variant="home" />
			<Intro />
			<Collage />
			<Program />
			<PromoBooks />
			<Footer />
		</>
	);
};

export default Page;
