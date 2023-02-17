import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
} from '@remix-run/react';
import React from 'react';

import {
	BreakpointHelper,
	links as BreakpointHelperLinks,
} from '~/components/BreakpointHelper';
import DefaultFaviconLinks from '~/components/DefaultFaviconLinks';
import {
	links as WaveBackgroundLinks,
	WaveBackground,
} from '~/components/WaveBackground';
import globalStylesUrl from '~/styles/app/global.css';
import styleResetUrl from '~/styles/app/reset.css';
import desktopVariables from '~/styles/app/variables/devices/variables-desktop.css';
// TODO large desktop variables
// import largeDesktopVariables from '~/styles/app/variables/devices/variables-large-desktop.css';
import laptopVariables from '~/styles/app/variables/devices/variables-laptop.css';
import phoneVariables from '~/styles/app/variables/devices/variables-phone.css';
import tabletVariables from '~/styles/app/variables/devices/variables-tablet.css';
import darkVariables from '~/styles/app/variables/themes/variables-dark.css';
import lightVariables from '~/styles/app/variables/themes/variables-light.css';

const themeLinks = () => [
	{
		rel: 'stylesheet',
		href: lightVariables,
		media: '(prefers-color-scheme: light)',
	},
	{
		rel: 'stylesheet',
		href: darkVariables,
		media: '(prefers-color-scheme: dark)',
	},
];

const deviceLinks = () => [
	{
		rel: 'stylesheet',
		href: desktopVariables,
	},
	// TODO
	// {
	// 	rel: 'stylesheet',
	// 	href: desktopVariables,
	// 	media: '(max-width: 160rem)',
	// },
	{
		rel: 'stylesheet',
		href: laptopVariables,
		media: '(max-width: 93.75rem)',
	},
	{
		rel: 'stylesheet',
		href: tabletVariables,
		media: '(max-width: 68.75rem)',
	},
	{
		rel: 'stylesheet',
		href: phoneVariables,
		media: '(max-width: 34.375rem)',
	},
];

export const links: LinksFunction = () => {
	return [
		...DefaultFaviconLinks(),
		...BreakpointHelperLinks(),
		{ rel: 'stylesheet', href: styleResetUrl },
		{ rel: 'me', href: 'https://techhub.social/@MarcDonald' },
		{
			rel: 'stylesheet',
			href: globalStylesUrl,
		},
		...themeLinks(),
		...deviceLinks(),
		...WaveBackgroundLinks(),
	];
};

export const meta: MetaFunction = () => {
	const description = 'Software Engineer';

	return {
		viewport: 'width=device-width,initial-scale=1',
		charset: 'utf-8',
		description,
		keywords:
			'marc donald,developer,portfolio,software engineer,android,kotlin,javascript,typescript,java',
		'twitter:creator': '@DeveloperMarc',
		'twitter:site': '@DeveloperMarc',
		'twitter:title': 'Marc Donald',
		'twitter:description': description,
	};
};

function Document({
	children,
	title = 'Marc Donald',
}: {
	children: React.ReactNode;
	title?: string;
}) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				<title>{title}</title>
			</head>
			<body>
				<BreakpointHelper />
				<WaveBackground />
				<div
					style={{
						isolation: 'isolate',
						height: '100%',
						width: '100%',
					}}
				>
					{children}
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<h1>
				{caught.status} {caught.statusText}
			</h1>
		</Document>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error);

	return (
		<Document title="Whoops">
			<h1>App Error</h1>
			<pre>{error.message}</pre>
		</Document>
	);
}
