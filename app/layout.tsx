import './globals.css';
import { Inter } from 'next/font/google';
import WipBanner from './components/WipBanner';
import { Metadata } from 'next';
import { cn } from './lib/utils';
import { TooltipProvider } from '@/components/ui/Tooltip';
import React from 'react';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

const title = 'Marc Donald';
const description = 'Senior Software Engineer';

export const metadata: Metadata = {
	title,
	description,
	keywords:
		'software engineer,portfolio,developer,marc donald,programming,web development,full stack,fullstack,react,reactjs,typescript,js,java,html,css,frontend,backend,full stack,fullstack,full-stack',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	twitter: {
		title,
		description,
		creator: '@DeveloperMarc',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${inter.className}`}>
			<TooltipProvider>
				<body
					className={cn(
						`relative m-auto`,
						process.env.NODE_ENV === 'production' ? '' : 'debug-screens'
					)}
				>
					<WipBanner />
					<div className={'m-auto flex min-h-screen max-w-[1800px] flex-col'}>
						<Header />
						{children}
					</div>
				</body>
			</TooltipProvider>
		</html>
	);
}
