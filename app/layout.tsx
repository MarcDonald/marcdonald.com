import React from 'react';

import '@/styles/global.css';

import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import StyleSwitcher from '@/components/style-switcher';
import { siteConfig } from '@/config/site';
import { fontMono, fontSans } from '@/lib/fonts';
import { SiteHeader } from '@/components/site-header';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'software engineer,portfolio,developer,marc donald,programming,web development,full stack,fullstack,react,reactjs,typescript,js,java,html,css,frontend,backend,full stack,fullstack,full-stack',
	],
	themeColor: [{ color: 'hsl(var(--background))' }],
	metadataBase: new URL(siteConfig.url),
	alternates: {
		canonical: siteConfig.url,
	},
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${fontSans.className} ${fontMono.className} font-sans`}
		>
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
						<main className={'container my-6 lg:px-10'}>{children}</main>
					</div>
				</ThemeProvider>
				<StyleSwitcher />
				<Analytics />
			</body>
		</html>
	);
}
