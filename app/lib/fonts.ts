import {
	JetBrains_Mono as FontMono,
	Nunito as FontSans,
	Nunito as FontDisplay,
} from 'next/font/google';

export const fontDisplay = FontDisplay({
	subsets: ['latin'],
	variable: '--font-display',
	preload: true,
	weight: '400',
});

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	preload: true,
	weight: '400',
});

export const fontMono = FontMono({
	subsets: ['latin'],
	variable: '--font-mono',
});
