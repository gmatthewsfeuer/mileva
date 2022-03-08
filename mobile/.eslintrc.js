module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	plugins: ['react', 'prettier', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',
		'react/no-children-prop': 'off',
		'no-mixed-operators': ['error', { allowSamePrecedence: false }],
	},
};