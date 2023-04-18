module.exports = {
	root: true,
	extends: ['prettier', 'next'],
	plugins: ['import', 'prettier'],
	ignorePatterns: ['*.d.ts', '*.ts.map', '*.tsbuildinfo'],
	parser: '@typescript-eslint/parser',
	rules: {
		'react/no-unescaped-entities': 'off',
	},
	settings: {
		'mdx/code-blocks': true,
		'mdx/language-mapper': {},
		next: {
			rootDir: ['apps/*/'],
		},
	},
};
