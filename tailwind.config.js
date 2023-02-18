const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'raisin-black': 'hsla(0, 0%, 15%, 1)',
				burlywood: 'hsla(31, 50%, 66%, 1)',
				'deep-champagne': 'hsla(37, 72%, 78%, 1)',
				'pewter-blue': 'hsla(202, 21%, 64%, 1)',
				'ash-gray': 'hsla(51, 14%, 71%, 1)',
				'beau-blue': 'hsla(202, 22%, 73%, 1)',
				'dark-lava': 'hsla(30, 15%, 28%, 1)',
				jet: 'hsla(0, 0%, 21%, 1)',
				gunmetal: 'hsla(216, 28%, 20%, 1)',
				'satin-sheen-gold': 'hsla(43, 59%, 52%, 1)',
				platinum: 'hsla(0, 0%, 90%, 1)',
				bittersweet: 'hsla(6, 92%, 67%, 1)',
				'tart-orange': 'hsla(6, 92%, 60%, 1)',
			},
			fontFamily: {
				display: ['Cal Sans', ...defaultTheme.fontFamily.sans],
				body: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
