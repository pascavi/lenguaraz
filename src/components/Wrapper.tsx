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
};

export const Wrapper = ({ children, variant }: Props) => {
	return (
		<div className={wrapper}>
			<div className={inner({ size: variant || "default" })}>{children}</div>
		</div>
	);
};
