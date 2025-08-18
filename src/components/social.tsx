import { cva } from "@/styled-system/css";

const social = cva({
	base: {
		display: "flex",
		gap: "1.6rem",
		"& img": {
			width: ["2.4rem", null, null, "3.2rem"]
		},
		"& img:hover": {
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
				"& img": {
					width: "2rem"
				}
			}
		}
	}
});

export const Social = ({ variant = "default" }: { variant?: "default" | "mobile" }) => {
	return (
		<div className={social({ variant })}>
			<a href="https://www.instagram.com/lenguarazfest" target="_blank" rel="noopener noreferrer">
				<img src="/svg/instagram.svg" alt="Síguenos en Instagram" width="24" height="24" />
			</a>
			<a href="https://bsky.app/profile/lenguarazfest.bsky.social" target="_blank" rel="noopener noreferrer">
				<img src="/svg/bluesky.svg" alt="Síguenos en Bluesky" width="24" height="24" />
			</a>
			<button data-share aria-label="Compartir en redes sociales">
				<img src="/svg/share.svg" alt="Compartir" width="24" height="24" />
			</button>
		</div>
	);
};
