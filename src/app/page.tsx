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
			<main>
				<section aria-label="¿Qué es Lenguaraz?">
					<Intro />
				</section>
				<section aria-label="Invitados destacados">
					<Collage />
				</section>
				<section aria-label="Programa del festival">
					<Program />
				</section>
			</main>
			<PromoBooks />
			<Footer />
		</>
	);
};

export default Page;
