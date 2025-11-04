import React from "react";
import { css, cva } from "@/styled-system/css";

const slides = css({
	width: "100dvw",
	height: "100dvh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "primary.light",
	padding: "3%"
});

const container = css({
	width: "100%",
	display: "flex",
	maxWidth: "135rem",
	aspectRatio: "15 / 9",

	justifyContent: "space-between",
	gap: "6%",
	"& > div:nth-child(1)": {
		flex: 5
	},
	"& > div:nth-child(2)": {
		flex: 7
	}
});

const leftStyle = css({
	display: "flex",
	flexDirection: "column",
	borderRight: "2px solid",
	borderColor: "primary.lighter",
	justifyContent: "space-between",
	containerType: "inline-size",
	"@container (width > 1px)": {
		"& > img": {
			marginTop: "8cqi",
			width: "60cqi"
		}
	}
});

const rightStyle = css({
	containerType: "inline-size",
	width: "100%",
	display: "flex",
	alignItems: "center"
});

const cardsListStyle = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		minHeight: "50dvh"
	},
	variants: {
		variant: {
			long: {
				"@container (width > 1px)": {
					gap: "5cqi"
				}
			},
			default: {
				"@container (width > 1px)": {
					gap: "10cqi"
				}
			}
		}
	}
});

const cardStyle = css({
	display: "flex",
	gap: "7%",
	width: "100%",
	minWidth: "30rem",
	"@container (width > 1px)": {
		"& h2": { fontFamily: "secondary", fontWeight: "bold", fontSize: "clamp(1.5rem, 4.5cqi, 3rem)" },
		"& section": { width: "63cqi", minHeight: "30cqi", justifyContent: "center", display: "flex", flexDirection: "column", gap: "2cqi" },
		"& aside": { width: "30cqi", aspectRatio: "1 / 1", position: "relative" }
	},
	"& section": {
		"& > *": { animation: "slideUp 1s ease both" },
		"& :nth-child(1)": { animationDelay: "0s" },
		"& :nth-child(2)": { animationDelay: "0.25s" },
		"& :nth-child(3)": { animationDelay: "0.5s" },
		"& :nth-child(4)": { animationDelay: "0.75s" },
		"& :nth-child(5)": { animationDelay: "1s" }
	}
});

const pictureStyle = cva({
	base: {
		animation: "slideUp 2s ease both 0.25s",
		position: "absolute",
		display: "block",
		"& img": { width: "100%", aspectRatio: "1 / 1" }
	},
	variants: {
		variant: {
			default: { width: "86%", inset: 0, left: "7%", top: "5%" },
			left: { width: "62%" },
			right: { width: "62%", top: "38%", right: 0, animation: "slideUp 2.5s ease both 0.5s" }
		}
	}
});

const titleStyle = css({
	fontFamily: "primary",
	fontWeight: "bold",
	maxWidth: "60cqi",
	color: "primary.dark",
	fontSize: "clamp(1.5rem, 3.75cqi, 3rem)",
	lineHeight: 1.2
});

const speakerStyle = css({
	fontFamily: "secondary",
	fontWeight: "bold",
	fontSize: "clamp(1.5rem, 3.5cqi, 3rem)",
	lineHeight: 1.1,
	display: "flex",
	flexDirection: "column",
	gap: "0.5cqi",
	"& span": {
		fontSize: "clamp(1.2rem, 2.75cqi, 3rem)"
	}
});

const locationStyle = css({
	fontFamily: "primary",
	fontWeight: "bold",
	maxWidth: "50cqi",
	color: "#333",
	lineHeight: 1.4,
	fontSize: "clamp(1rem, 2.4cqi, 2.4rem)"
});

const additionalStyle = css({ fontFamily: "secondary", fontWeight: "bold", lineHeight: 1.4, fontSize: "clamp(1rem, 2.4cqi, 2.4rem)" });

export const Slides = ({ children, zoom }: { children: React.ReactNode; zoom: number }) => {
	return (
		<div className={slides}>
			<div className={container} style={{ scale: zoom || 1 }}>
				{children}
			</div>
		</div>
	);
};

export const Left = ({ children }: { children: React.ReactNode }) => {
	return <div className={leftStyle}>{children}</div>;
};

export const Right = ({ children }: { children: React.ReactNode }) => {
	return <div className={rightStyle}>{children}</div>;
};

export const Card = ({ card }: { card: Record<string, any> }) => {
	return (
		<article className={cardStyle}>
			<aside>
				<picture className={pictureStyle({ variant: card.images.length > 1 ? "left" : "default" })}>
					<img src={card.images[0]} width="100" height="100" alt="" />
				</picture>
				{card.images[1] && (
					<picture className={pictureStyle({ variant: "right" })}>
						<img src={card.images[1]} width="100" height="100" alt="" />
					</picture>
				)}
			</aside>
			<section>
				<div className={locationStyle}>
					{card.time}, {card.day} - {card.location}
				</div>
				<div className={titleStyle}>{card.title}</div>
				{card.speakers.map((speaker: Record<string, any>, index: number) => (
					<div key={index} className={speakerStyle}>
						{speaker.name} {speaker.desc && <span>{speaker.desc}</span>}
					</div>
				))}
				{card.additional && <div className={additionalStyle}>{card.additional}</div>}
			</section>
		</article>
	);
};

export const Cards = ({ cards }: { cards?: Array<Record<string, any>> }) => {
	return (
		<div className={cardsListStyle({ variant: cards && cards.length > 2 ? "long" : "default" })}>
			{cards?.map((card, index) => (
				<Card key={index} card={card} />
			))}
		</div>
	);
};

const bottom = css({
	marginBottom: "10cqi",
	display: "flex",
	flexDirection: "column",
	gap: "6cqi",
	filter: "saturate(0.8)"
});

const logosStyle = css({
	"@container (width > 1px)": {
		display: "flex",
		flexDirection: "column",
		gap: "3cqi",
		"& > div": {
			display: "flex",
			flexWrap: "wrap",
			gap: "3cqi"
		},
		"& legend": {
			fontSize: "clamp(1.2rem, 1.2vw, 1.2rem)"
		},
		"& img": {
			height: "8cqi",
			width: "auto"
		},
		"& span": { display: "flex" }
	}
});

export const Logos = () => {
	return (
		<div className={bottom}>
			<div className={logosStyle}>
				<legend>Organiza:</legend>
				<div>
					<img src="/images/logos/educania.png" />
				</div>
			</div>
			<div className={logosStyle}>
				<legend>Con el apoyo de:</legend>
				<div>
					<img src="/images/logos/mubam.png" />
					<img src="/images/logos/umu.png" />

					<img src="/images/logos/ctpiensa.png" />
					<span>
						<img src="/images/logos/ministerio.jpg" />
						<img src="/images/logos/lectura_infinita.png" />
					</span>
					<img src="/images/logos/tierramia.png" />
				</div>
			</div>
		</div>
	);
};
