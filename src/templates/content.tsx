import React from "react";
import { css } from "@/styled-system/css";
import { Wrapper, Breadcrumbs } from "@/components";

const main = css({
	padding: ["4.8rem 0 5.6rem", null, "6.4rem 0 7.2rem", "8rem 0 10.4rem"],
	display: "flex",
	flexDirection: "column",
	gap: ["3.2rem", "4rem"]
});

const inner = css({
	display: "flex",
	flexDirection: "column",
	gap: ["2.4rem", "3.2rem"],
	"& h1": {
		lineHeight: "1",
		fontWeight: "600",
		fontSize: "clamp(2rem, 2.4vw, 3.2rem)"
	}
});

type Props = {
	children: React.ReactNode;
	title: string;
	section?: string;
	variant?: "default" | "narrow";
};

export const Content = ({ children, title, section, variant }: Props) => {
	return (
		<Wrapper variant={variant}>
			<main className={main}>
				{section && <Breadcrumbs subpage={section} />}
				<div className={inner}>
					<h1>{title}</h1>
					{children}
				</div>
			</main>
		</Wrapper>
	);
};
