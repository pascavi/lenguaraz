import { defineConfig } from "@pandacss/dev";
import { theme } from "./src/styles/theme";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: "styled-system",

	// The theme configuration
	theme: theme
});
