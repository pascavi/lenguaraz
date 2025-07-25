import { css } from "@/styled-system/css";

export const Logo = ({ width = 100 }: { width?: number }) => {
	const svg = css({
		width: `${width}px`,
		aspectRatio: "1 / 0.347",
		display: "block"
	});
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 137.85 49.367" className={svg} id="logo">
			<g strokeMiterlimit="3.4" letterSpacing="0" textAnchor="middle">
				<text x="49.245" y="7.464" strokeWidth=".437" fontFamily="Blatant" fontSize="10.493" fontWeight="400">
					<tspan x="49.245" y="7.464">
						1
						<tspan baselineShift="super" fontSize="6.821">
							a
						</tspan>
						edición 2025
					</tspan>
				</text>
				<text x="68.569" y="31.227" strokeWidth="1.211" fontSize="29.067" fontWeight="600">
					<tspan x="68.569" y="31.227" fontFamily="Blatant" fontWeight="400">
						Lenguaraz
					</tspan>
				</text>
				<text x="100.403" y="49.191" fill="#ff5a82" strokeWidth=".816" fontFamily="Blatant" fontSize="19.585" fontWeight="400">
					<tspan x="100.403" y="49.191">
						fest.com
					</tspan>
				</text>
			</g>
		</svg>
	);
};
