import { GeistMono as FontMono } from 'geist/font/mono';
import { Nunito } from 'next/font/google';
import { GeistSans as FontSans } from 'geist/font/sans';

const FontDisplay = Nunito({
	style: 'normal',
	subsets: ['latin'],
});

// const FontSans = GeistSans({
// 	style: 'normal',
// 	subsets: ['latin'],
// });

export const fontDisplay = FontDisplay;

export const fontSans = FontSans;

export const fontMono = FontMono;
