import React from "react";
import { richText } from "@/styles";

type Props = {
	children: React.ReactNode;
};

export const RichText = ({ children }: Props) => {
	return <div className={richText}>{children}</div>;
};
