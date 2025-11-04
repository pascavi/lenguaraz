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
		fadeIn: {
			"0%": { opacity: 0 },
			"100%": { opacity: 1 }
		},
		slideUp: {
			"0%": { transform: "translateY(2rem)", opacity: 0 },
			"100%": { transform: "translateY(0%)", opacity: 1 }
		}
	}
};
