import { css } from "@/styled-system/css";

export const Logo = ({ width = 100 }: { width?: number }) => {
	const svg = css({
		width: `${width}px`,
		aspectRatio: "1 / 0.347",
		display: "block"
	});

	const span = css({
		clip: "rect(0 0 0 0)",
		clipPath: "inset(50%)",
		width: "1px",
		height: "1px",
		overflow: "hidden",
		position: "absolute",
		whiteSpace: "nowrap"
	});
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 137.85 49.367" className={svg} aria-hidden>
				<g strokeMiterlimit="3.4" letterSpacing="0" textAnchor="middle">
					<text x="49.245" y="7.464" strokeWidth=".437" fontFamily="Blatant" fontSize="11.3" fontWeight="400">
						<tspan x="49.245" y="7.464">
							Murcia 5-9 Nov.{" "}
						</tspan>
					</text>
					<text x="68.569" y="31.227" strokeWidth="1.211" fontSize="29.067" fontWeight="600">
						<tspan x="68.569" y="31.227" fontFamily="Blatant" fontWeight="400">
							Lenguaraz
						</tspan>
					</text>
					<text x="100.403" y="49.191" fill="#cb4953" strokeWidth=".816" fontFamily="Blatant" fontSize="19.585" fontWeight="400">
						<tspan x="100.403" y="49.191">
							fest.com
						</tspan>
					</text>
				</g>
			</svg>
			<span className={span}> Festival Lenguaraz, Murcia del 5 al 9 de Noviembre</span>
		</>
	);
};
