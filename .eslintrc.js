module.export = {

	extends: [
		'airbnb-base',
	],

	parser: [
		"babel-eslint",
	],

	env: {
		browser: true,
		es6: true,
		node: true,
        commonjs: true,
	},

	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},

	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
	},

	rules: {
		'eol-last': "off",
		'max-len': ["error", 200],
		'no-tabs': "off",
		'prefer-destructuring': "off",
		'linebreak-style': ["error", "windows"],
	}
}