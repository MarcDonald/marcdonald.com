import { GeistMono as FontMono } from 'geist/font/mono';
import { Nunito } from 'next/font/google';

const FontSans = Nunito({
	style: 'normal',
	subsets: ['latin'],
});

export const fontDisplay = FontSans;

export const fontSans = FontSans;

export const fontMono = FontMono;
