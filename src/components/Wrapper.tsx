import { css } from "@/styled-system/css";

const wrapper = css({
	margin: "0 2rem"
});

const inner = css({
	margin: "auto",
	maxWidth: "114.4rem",
	width: "100%",
	outline: "2px solid red"
});

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={wrapper}>
			<div className={inner}>{children}</div>
		</div>
	);
};
