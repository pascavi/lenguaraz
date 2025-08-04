import React from "react";
import { css } from "@/styled-system/css";
import { Wrapper, Breadcrumbs } from "@/components";
import { richText } from "@/styles";

const inner = css({
	padding: ["4.8rem 0 5.6rem", null, "6.4rem 0 7.2rem", "8rem 0 10.4rem"],
	display: "flex",
	flexDirection: "column",
	gap: "4rem"
});

type Props = {
	children: React.ReactNode;
	title?: string;
};

export const Content = ({ children, title: subpage }: Props) => {
	return (
		<Wrapper variant="narrow">
			<div className={inner}>
				{subpage && <Breadcrumbs subpage={subpage} />}
				<div className={richText}>{children}</div>
			</div>
		</Wrapper>
	);
};
