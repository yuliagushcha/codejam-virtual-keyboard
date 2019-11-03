module.export = {

	extends: [
		'airbnb-base',
	],

	env: {
		browser: true,
		es6: true,
		node: true,
	},

	rules: {
		'eol-last': "off",
		'max-len': ["error", 200],
		'no-tabs': "off",
		'prefer-destructuring': "off",
		'indent': [2, "tab"],
		'linebreak-style': ["error", "windows"],
	}
}