import { css } from "@/styled-system/css";
import Link from "next/link";

export const Breadcrumbs = ({ subpage }: { subpage?: string }) => {
	return (
		<nav
			aria-label="Estás en"
			className={css({
				display: "flex",
				gap: "0.8rem",
				fontSize: "1.4rem",
				fontWeight: "600",
				"& a": {
					color: "primary.dark",
					textDecoration: "underline",
					textUnderlineOffset: "0.5rem",
					transition: "color 0.2s ease-in-out"
				},
				"& a:hover": {
					color: "primary.base"
				},
				"& span": {
					color: "text.light"
				},
				"& span::before": {
					content: '"/"',
					display: "inline-block",
					marginRight: "0.6rem",
					fontSize: "1rem"
				}
			})}
		>
			<Link href="/">Inicio</Link>
			{subpage && <span aria-current="page">{subpage}</span>}
		</nav>
	);
};
