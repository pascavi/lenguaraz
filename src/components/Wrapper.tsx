import { css, cva } from "@/styled-system/css";

const wrapper = css({
	margin: ["0 2rem", "0 4.8rem", "0 5.6rem"]
});

const inner = cva({
	base: {
		margin: "auto",
		width: "100%"
	},

	variants: {
		size: {
			default: {
				maxWidth: "114.4rem"
			},
			narrow: {
				maxWidth: "96rem"
			}
		}
	}
});

type Props = {
	children: React.ReactNode;
	variant?: "default" | "narrow";
	as?: "main" | "section" | "article" | "div";
};

export const Wrapper = ({ children, variant, as }: Props) => {
	return (
		<ConditionalTag as={as}>
			<div className={inner({ size: variant || "default" })}>{children}</div>
		</ConditionalTag>
	);
};

const ConditionalTag = ({ as, children }: { as?: Props["as"]; children: React.ReactNode }) => {
	if (as === "main") return <main className={wrapper}>{children}</main>;
	if (as === "section") return <section className={wrapper}>{children}</section>;
	if (as === "article") return <article className={wrapper}>{children}</article>;
	return <div className={wrapper}>{children}</div>;
};
