import { Header, Intro, Collage, Program, Footer, Books } from "@/components";

const Page = () => {
	return (
		<>
			<Header variant="home" />
			<Intro />
			<Collage />
			<Program />
			<Books />
			<Footer />
		</>
	);
};

export default Page;
