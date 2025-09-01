import react from "eslint-plugin-react";
import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

const eslintConfig = ts.config([
	react.configs.flat.recommended,
	js.configs.recommended,
	ts.configs.recommended,
	{
		plugins: {
			react
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest
			},
			ecmaVersion: 12,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		settings: {
			react: {
				version: "detect"
			}
		}
	},
	{
		rules: {
			"react/react-in-jsx-scope": "off",
			"no-console": "warn",
			"@typescript-eslint/no-explicit-any": "off"
		}
	},
	{
		ignores: ["node_modules/**/*", "styled-system/**/*", "out/**/*", ".next/**/*", "next-env.d.ts"]
	}
]);

export default eslintConfig;
