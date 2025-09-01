import { Header, Content, Footer, ProgramPromo, RichText } from "@/templates";

const Page = () => {
	return (
		<>
			<title>Sobre la web del Lenguaraz</title>
			<meta name="description" content="Sobre la web del Lenguaraz." />
			<meta name="robots" content="noindex" />
			<Header />
			<Content title="La web del Lenguaraz" section="La web del Lenguaraz" variant="narrow">
				<RichText>
					<p>
						La Fábrica de ilusiones S.L. es titular del sitio web <i>lenguarazfest.com</i>. Los datos identificativos del titular
						son:{" "}
					</p>
					<blockquote>
						Nombre: La Fábrica de ilusiones S.L.
						<br />
						CIF: B42791962
						<br />
						Dirección: Calle Sociedad 10, Murcia, 30004.
					</blockquote>

					<p>
						Puedes ponerte en contacto con nostros a traves del email{" "}
						<b>
							<a href="mailto:&#104;&#111;&#108;&#097;&#064;&#108;&#101;&#110;&#103;&#117;&#097;&#114;&#097;&#122;&#102;&#101;&#115;&#116;&#046;&#099;&#111;&#109;">
								&#104;&#111;&#108;&#097;&#064;&#108;&#101;&#110;&#103;&#117;&#097;&#114;&#097;&#122;&#102;&#101;&#115;&#116;&#046;&#099;&#111;&#109;
							</a>
						</b>
						.
					</p>
					<h2>Privacidad</h2>
					<p>
						Esta web no almacena datos personales de los usuarios ni los comparte con terceros. Esta web no hace uso de <i>cookies</i>.
					</p>
					<h2>Accesibilidad</h2>
					<p>
						Esta web ha sido diseñada para ser accesible y usable por el mayor número de personas posible. Se han seguido las pautas de
						accesibilidad WCAG 2.1 en su nivel AA.
					</p>
				</RichText>
			</Content>
			<ProgramPromo />
			<Footer />
		</>
	);
};

export default Page;
