import { cva } from "@/styled-system/css";

const social = cva({
	base: {
		display: "flex",
		gap: "1.6rem",
		"& svg": {
			width: "2.4rem",
			height: "2.4rem"
		},
		"& svg:hover": {
			filter: "brightness(0.8)"
		},
		"& button": {
			cursor: "pointer"
		}
	},
	variants: {
		variant: {
			default: {},
			mobile: {
				gap: "1.4rem",
				"& svg": {
					width: "2rem",
					height: "2rem"
				}
			}
		}
	}
});

export const Social = ({ variant = "default" }: { variant?: "default" | "mobile" }) => {
	return (
		<div className={social({ variant })}>
			<a href="https://www.instagram.com/lenguarazfest" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram">
				<svg width="24" height="24">
					<use href="/svg/icons.svg?1.3#instagram" />
				</svg>
			</a>
			<a href="https://bsky.app/profile/lenguarazfest.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Bluesky">
				<svg width="24" height="24">
					<use href="/svg/icons.svg?1.3#bluesky" />
				</svg>
			</a>
			<button data-share aria-label="Compartir en redes sociales">
				<svg width="24" height="24">
					<use href="/svg/icons.svg?1.3#share" />
				</svg>
			</button>
		</div>
	);
};
