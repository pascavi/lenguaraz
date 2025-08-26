import { css } from "@/styled-system/css";
import Link from "next/link";

const links = css({
	display: "flex",
	gap: ["1rem", "1.6rem"],
	fontSize: "clamp(1.3rem, 1.3vw, 1.5rem)",
	fontWeight: "600",
	"& a": {
		fontFamily: "primary",
		transition: "color 0.2s ease-in-out"
	},
	"& a:hover": {
		color: "primary.darker"
	},
	"& a.active": {
		textDecoration: "underline",
		textUnderlineOffset: "0.5rem"
	}
});

export const Navigation = ({ pathname }: { pathname?: string }) => {
	return (
		<ul className={links}>
			<li>
				<Link href="/el-festival" className={pathname === "el-festival" ? "active" : ""}>
					El festival
				</Link>
			</li>
			<li>
				<Link href="/el-programa" className={pathname === "el-programa" ? "active" : ""}>
					El programa
				</Link>
			</li>
			<li>
				<Link href="/los-libros" className={pathname === "los-libros" ? "active" : ""}>
					Los libros
				</Link>
			</li>
		</ul>
	);
};
