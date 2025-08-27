import { css } from "@/styled-system/css";

export const richText = css({
	fontSize: "clamp(1.8rem, 2.67vw, 2rem)",
	display: "flex",
	flexDirection: "column",
	gap: ["1.6rem", "3.2rem"],
	"& h1": {
		lineHeight: "1",
		fontWeight: "600",
		fontSize: "clamp(2rem, 2.4vw, 3.2rem)",
		marginBottom: ["0.8rem", "1.6rem"]
	},
	"& h2": {
		lineHeight: "1",
		fontFamily: "secondary",
		color: "primary.dark",
		fontSize: "clamp(2.2rem, 2.5vw, 2.5rem)",
		marginTop: ["0.8rem", "1.6rem"]
	},

	"& b": {
		fontWeight: "600",
		color: "primary.dark"
	},
	"& a": {
		color: "primary.dark",
		fontWeight: "600",
		textDecoration: "underline",
		textUnderlineOffset: "0.5rem",
		fontSize: "0.9em",
		position: "relative",
		top: "-0.05em",
		padding: "0 0.1rem",
		whiteSpace: "nowrap",
		transition: "color 0.2s ease-in-out"
	},
	"& a:hover": {
		color: "primary.base"
	},
	"& blockquote": {
		borderLeft: "4px solid",
		borderColor: "primary.base",
		paddingLeft: "1.6rem"
	}
});
