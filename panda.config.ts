import { defineConfig } from "@pandacss/dev";
import { theme } from "./src/styles/theme";

export default defineConfig({
	hash: true,
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/app/**/*.{ts,tsx,js,jsx}",
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/templates/**/*.{ts,tsx,js,jsx}",
		"./src/styles/**/*.{ts,tsx,js,jsx}"
	],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: "styled-system",

	// The theme configuration
	theme: theme,

	// The jsx framework to use
	jsxFramework: "react"
});
