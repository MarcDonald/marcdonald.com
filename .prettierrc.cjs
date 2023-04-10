const config = {
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	trailingComma: 'es5',
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
