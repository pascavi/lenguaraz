import React from "react";
import { css } from "@/styled-system/css";
import { Wrapper } from "./wrapper";

const html = css({
	fontSize: "clamp(1.8rem, 2.67vw, 2rem)",
	padding: ["4.8rem 0", null, "6.4rem 0", "8rem 0"],
	display: "flex",
	flexDirection: "column",
	gap: "2.4rem",
	"& h1": {
		lineHeight: "1",
		fontWeight: "600",
		fontSize: "clamp(2rem, 2.4vw, 3.2rem)",
		marginBottom: ["0.8rem", "1.6rem"]
	},
	"& h2": {
		fontFamily: "secondary",
		lineHeight: "1",
		fontWeight: "600",
		color: "primary.base",
		fontSize: "clamp(2rem, 2.4vw, 2.4rem)",
		marginBottom: "0.8rem"
	},

	"& b": {
		fontWeight: "600",
		color: "primary.base"
	},
	"& a": {
		color: "primary.base",
		fontWeight: "600",
		textDecoration: "underline",
		textUnderlineOffset: "0.5rem",
		fontSize: "0.9em",
		position: "relative",
		top: "-0.1em",
		padding: "0 0.2rem",
		whiteSpace: "nowrap"
	}
});

type Props = {
	children: React.ReactNode;
	variant?: "default" | "narrow";
};

export const Content = ({ children, variant }: Props) => {
	return (
		<Wrapper variant={variant}>
			<div className={html}>{children}</div>
		</Wrapper>
	);
};
