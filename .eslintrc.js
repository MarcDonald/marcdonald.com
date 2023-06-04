module.exports = {
	extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'next'],
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	rules: {
		'no-used-vars': 'off',
		'react/no-unescaped-entities': 'off',
		'@next/next/no-html-link-for-pages': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
	},
	ignorePatterns: ['*.d.ts', '*.ts.map', '*.tsbuildinfo'],
	parser: '@typescript-eslint/parser',
	settings: {
		next: {
			rootDir: ['app/*'],
		},
	},
};
