import {
	JetBrains_Mono as FontMono,
	Inter as FontSans,
	Inter as FontDisplay,
} from 'next/font/google';

export const fontDisplay = FontDisplay({
	subsets: ['latin'],
	variable: '--font-display',
	preload: true,
});

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	preload: true,
});

export const fontMono = FontMono({
	subsets: ['latin'],
	variable: '--font-mono',
});
