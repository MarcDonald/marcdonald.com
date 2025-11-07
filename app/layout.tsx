import React from 'react';

import '@/app/styles/global.css';

import { Metadata, Viewport } from 'next';
import { cn } from '@/app/lib/utils';
import { ThemeProvider } from '@/app/components/theme-provider';
import StyleSwitcher from '@/app/components/style-switcher';
import { siteConfig } from '@/app/config/site';
import { fontDisplay, fontMono, fontSans } from '@/app/lib/fonts';
import { SiteHeader } from '@/app/components/site-header';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Toaster } from '@/app/components/ui/toaster';
import { TooltipProvider } from '@/app/components/ui/tooltip';
import { CSPostHogProvider, OptIn } from '@/app/components/posthog-provider';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
			className={cn(
				`${fontDisplay.className} ${fontSans.className} ${fontMono.className} font-sans`
				// variable not on NextFont but it is on Geist
				// fontDisplay.variable
			)}
		>
			<CSPostHogProvider>
				<body
					className={cn(
						'bg-background min-h-screen scroll-smooth antialiased',
						// variable not on NextFont but it is on Geist
						// fontSans.variable,
						process.env.NODE_ENV === 'production' ? '' : 'debug-screens'
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<TooltipProvider>
							<div className="relative flex min-h-screen flex-col">
								<Button asChild>
									<Link
										href={'#main-content'}
										className={'skip-to-content-link'}
									>
										Skip to Content
									</Link>
								</Button>
								<SiteHeader />
								<main className={'container my-6 lg:px-10'}>
									{children}
									<OptIn />
								</main>
								<Toaster />
							</div>
						</TooltipProvider>
					</ThemeProvider>
					<StyleSwitcher />
				</body>
			</CSPostHogProvider>
		</html>
	);
}
