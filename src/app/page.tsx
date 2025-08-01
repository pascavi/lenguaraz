import { Header, Content, Collage, Program, Footer, Books } from "@/components";
import Link from "next/link";

const Page = () => {
	return (
		<>
			<title>Festival Lenguaraz, Murcia 5-12 Noviembre</title>
			<Header variant="home" />
			<Content>
				<h2>Murcia. Del 5 al 12 de Noviembre.</h2>
				<p>
					<b>Lenguaraz</b> es un festival para celebrar la riqueza de las lenguas. Es un festival para disfrutar de la literatura escrita
					más allá de nuestras fronteras, es un espacio para degustar deliciosas ediciones bilingües, jugosas conversaciones literarias,
					dulces recitales y sabrosos debates.
				</p>
				<p>
					<b>Lenguaraz</b> va de literatura pero también de lingüística, traducción, interpretación, etnología, comunicación, política,
					pensamiento y arte. Sí, Lenguaraz va de todo lo que tenga que ver con las lenguas, los idiomas, los lenguajes, las hablas, las
					jergas, las palabras y las distintas formas de ver el mundo que nos da la diversidad lingüística.
				</p>
				<p>
					Porque en Lenguaraz las lenguas son casas abiertas. <Link href="/el-festival">Leer más.</Link>
				</p>
			</Content>
			<Collage />
			<Program />
			<Books />
			<Footer />
		</>
	);
};

export default Page;
