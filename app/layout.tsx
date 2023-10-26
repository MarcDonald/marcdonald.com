import React from 'react';

import '@/app/styles/global.css';

import { Metadata, Viewport } from 'next';
import { cn } from '@/app/lib/utils';
import { ThemeProvider } from '@/app/components/theme-provider';
import StyleSwitcher from '@/app/components/style-switcher';
import { siteConfig } from '@/app/config/site';
import { fontDisplay, fontMono, fontSans } from '@/app/lib/fonts';
import { SiteHeader } from '@/app/components/site-header';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Toaster } from '@/app/components/ui/toaster';

export const viewport: Viewport = {
	themeColor: [{ color: 'hsl(var(--background))' }],
};

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'software engineer,portfolio,developer,marc donald,programming,web development,full stack,fullstack,react,reactjs,typescript,js,java,html,css,frontend,backend,full stack,fullstack,full-stack',
	],
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
			className={`${fontDisplay.className} ${fontDisplay.variable} ${fontSans.className} ${fontMono.className} font-sans`}
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
						<Button asChild>
							<Link href={'#main-content'} className={'skip-to-content-link'}>
								Skip to Content
							</Link>
						</Button>
						<SiteHeader />
						<main className={'container my-6 lg:px-10'}>{children}</main>
						<Toaster />
					</div>
				</ThemeProvider>
				<StyleSwitcher />
				<Analytics />
			</body>
		</html>
	);
}
