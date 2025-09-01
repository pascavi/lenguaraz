export const theme = {
	tokens: {
		colors: {
			bg: {
				white: { value: "#FFF" },
				light: { value: "#F0F0F0" },
				dark: { value: "#CCC" }
			},
			secondary: {
				base: { value: "#fce3bd" },
				light: { value: "#fce8c9" }
			},
			primary: {
				base: { value: "#f0707d" },
				light: { value: "#f6a2b0" },
				lighter: { value: "#fac7cc" },
				dark: { value: "#bf404a" },
				darker: { value: "#7a2e33" }
			},
			tertiary: {
				base: { value: "#458a70" },
				light: { value: "#6ba18c" }
			},
			text: {
				base: { value: "#000" },
				light: { value: "#333" }
			}
		},
		fonts: {
			primary: { value: "var(--font-poppins)" },
			secondary: { value: "var(--font-blatant)" }
		}
	},
	keyframes: {
		bird: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(3%) rotate(1deg)" }
		},
		dialogue: {
			"0%, 100%": { opacity: 1, transform: "scale(1)" },
			"2%": { opacity: 0, transform: "scale(1)" },
			"5%": { opacity: 0, transform: "scale(0.9)" },
			"15%": { opacity: 1, transform: "scale(1)" }
		}
	}
};
