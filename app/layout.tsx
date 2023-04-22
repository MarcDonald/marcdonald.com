import React from 'react';

import './global.css';

import { Metadata } from 'next';
import { cn } from '../lib/utils';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import StyleSwitcher from '../components/style-switcher';
import { siteConfig } from '../config/site';
import { fontSans } from '../lib/fonts';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'software engineer,portfolio,developer,marc donald,programming,web development,full stack,fullstack,react,reactjs,typescript,js,java,html,css,frontend,backend,full stack,fullstack,full-stack',
	],
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'en_GB',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [],
	},
	twitter: {
		title: siteConfig.name,
		description: siteConfig.description,
		creator: siteConfig.creator.twitter,
	},
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className={`${inter.className}`}>
			<body
				className={cn(
					'min-h-screen scroll-smooth bg-background font-sans antialiased',
					fontSans.variable,
					process.env.NODE_ENV === 'production' ? '' : 'debug-screens'
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="relative flex min-h-screen flex-col">
						<SiteHeader />
						{children}
					</div>
				</ThemeProvider>
				<StyleSwitcher />
			</body>
		</html>
	);
}
