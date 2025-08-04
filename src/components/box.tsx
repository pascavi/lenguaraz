import { css } from "@/styled-system/css";

export const Box = (props: React.PropsWithChildren<Record<string, any>>) => {
	const display = props["display"] || "flex";
	const flexDirection = props["flexDirection"] || "column";
	const { children, ...rest } = props;
	const boxStyles = css({ ...rest, display, flexDirection });
	return <div className={boxStyles}>{children}</div>;
};
